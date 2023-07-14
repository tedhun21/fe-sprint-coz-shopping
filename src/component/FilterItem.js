import "./FilterItem.css";

const FilterItem = ({ index, filter, onClick }) => {
  const handleClick = () => {
    onClick(index);
  };
  return (
    <button
      className={`filter-btn ${filter.isClicked ? "active" : ""}`}
      onClick={handleClick}
    >
      <img src={`/images/${filter.label}.png`} />
      <div>{filter.label}</div>
    </button>
  );
};

export default FilterItem;
