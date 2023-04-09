export default function Card({
  category,
  image,
  toggleMenu,
  handleCategoryClick,
  param,
}) {
  const getCategoryOnClick = () => {
    toggleMenu();
    handleCategoryClick(param);
  };
  return (
    <div className="item" onClick={getCategoryOnClick}>
      <div className="categories">
        <h2>{category}</h2>
        <img src={image} alt={category} />
      </div>
    </div>
  );
}
