import "./ProductItem.css";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <div>
      <img
        className="product-img"
        src={product.image_url || product.brand_image_url}
      />
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
