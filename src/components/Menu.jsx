import { useState, useEffect } from "react";
import Item from "./Item";

export default function Menu({ menuParam, toggleIsCategory }) {
  const [jollibeeMenu, setJollibeeMenu] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getMenu() {
      try {
        const response = await fetch(
          `https://api-jollibee-menu.vercel.app/menu/${menuParam}`
        );
        const { data } = await response.json();
        setJollibeeMenu(data);
      } catch (err) {
        console.error(err);
      }
    }

    getMenu();
  }, [menuParam]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredMenu = jollibeeMenu.filter((item) => {
    return item.description.toLowerCase().includes(search.toLowerCase());
  });

  const menuItems = filteredMenu.map((item) => {
    return <Item key={item.id} {...item} toggleMenu={toggleIsCategory} />;
  });

  return (
    <div>
      <nav>
        <h2 className="title">
          Jollibee Menu: <span> {menuParam}</span>
        </h2>
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={search}
        />
      </nav>
      <div className="categoryContainer">
        {filteredMenu.length ? (
          menuItems
        ) : (
          <p>
            Sorry,{" "}
            <b>
              <i>{search}</i>
            </b>{" "}
            not found.
          </p>
        )}
      </div>
      <button className="goBack" onClick={toggleIsCategory}>
        Go back to categories
      </button>
    </div>
  );
}
