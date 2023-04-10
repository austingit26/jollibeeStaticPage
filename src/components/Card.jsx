import { useContext } from "react";
import { FoodContext } from "../App";

export default function Card({category, image, param}) {
  const { toggleIsCategory, handleCategoryClick } = useContext(FoodContext);
  const getCategoryOnClick = () => {
    toggleIsCategory();
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
