import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./ProductItem.css";
import { mark, unmark } from "../reducers/markedDataReducer";

const ProductItem = ({ product }) => {
  const [isMarked, setIsMarked] = useState(() => {
    const storedIsMarked = localStorage.getItem(`isMarked_${product.id}`);
    return storedIsMarked === "true";
  });

  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem(`isMarked_${product.id}`, isMarked.toString());
  }, [isMarked]);

  useEffect(() => {
    if (isMarked === true) {
      dispatch(mark({ ...product, isMarked: true }));
    } else if (isMarked === false) {
      dispatch(unmark({ ...product, isMarked: false }));
    }
  }, [isMarked]);

  const markedHandler = () => {
    setIsMarked((prev) => !prev);
  };

  return (
    <div className="item">
      <img
        className="product-img"
        src={product.image_url || product.brand_image_url}
      />
      <div className="bookmark-img">
        <img
          src={isMarked ? "/images/on.png" : "/images/off.png"}
          onClick={markedHandler}
        />
      </div>
      <div className="product-label">
        <h3>
          {product.type === "Category"
            ? `#${product.title}`
            : product.type === "Brand"
            ? product.brand_name
            : product.title}
        </h3>
        <span className={product.type === "Product" ? "purple" : ""}>
          {product.type === "Product" && product.discountPercentage
            ? `${product.discountPercentage}%`
            : product.type === "Brand"
            ? "관심고객수"
            : null}
        </span>
      </div>
      <div className="second-line">
        <span>{product.type === "Exhibition" ? product.sub_title : null}</span>
        <span>
          {product.type === "Product"
            ? `${product.price.toLocaleString()}원`
            : product.type === "Brand"
            ? product.follower.toLocaleString()
            : null}
        </span>
      </div>
    </div>
  );
};
export default ProductItem;
