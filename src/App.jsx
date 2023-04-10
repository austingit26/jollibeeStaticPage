import { useState, useEffect, createContext} from "react";
import "./App.css";
import Category from "./components/Category";
import Menu from "./components/Menu";
import { getMenu } from "./api";

export const FoodContext = createContext()

function App() {
  const [jollibeeCategories, setJollibeeCategories] = useState([]);
  const [isCategory, setIsCategory] = useState(true);
  const [param, setParam] = useState("");

  useEffect(() => {
    async function fetchData() {
      const [data, err] = await getMenu();
      if (data) {
        setJollibeeCategories(data);
      } else {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const toggleIsCategory = () => {
    setIsCategory(!isCategory);
  };

  const handleCategoryClick = (eventParam) => {
    setParam(eventParam);
  };

  return (
    <div className="App">
      {isCategory ? (
        <FoodContext.Provider value={{ toggleIsCategory, handleCategoryClick }}>
          <Category jollibeeCategories={jollibeeCategories}  />
        </FoodContext.Provider>
      ) : (
        <Menu
          isCategory={isCategory}
          toggleIsCategory={toggleIsCategory}
          menuParam={param}
        />
      )}
    </div>
  );
}

export default App;
