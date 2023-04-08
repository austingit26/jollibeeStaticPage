import { useState, useEffect } from 'react'
import Item from './Item'

export default function Menu (props){
    const [jollibeeMenu, setJollibeeMenu] = useState([]);
    const [search, setSearch] = useState('');

    async function getMenu() {
        try {
          let response = await fetch(`https://api-jollibee-menu.vercel.app/menu/${props.menuParam}`);
          let data = await response.json();
          data= data.data
          setJollibeeMenu(data);
          return [data, null];
        } catch (err) {
          return [null, err];
        }
      }
    
    useEffect(() => {
      getMenu();
    }, []);

    const toggleMenu = ()=>{
        props.toggleIsCategory();
    }

    const handleSearch = (event) => {
      setSearch(event.target.value);
    }

    const filteredMenu = jollibeeMenu.filter((item) => {
      return item.description.toLowerCase().includes(search.toLowerCase());
    });
    
    const displayMenu = filteredMenu.map(items=>{
      return (
        <Item 
        key= {items.id}
        {...items}
        isCategory = {props.isCategory}
        toggleMenu={toggleMenu}
        />
      )
    })

    return(
      <div>
        <nav>
          <h2>Jollibee Menu</h2>
          <input type="text" placeholder='Search' onChange={handleSearch} value={search} />
        </nav>
        <div className="categoryContainer">{filteredMenu.length? displayMenu: <p>Sorry, <b><i>{search}</i></b> not found.</p>}</div>
        <button className='goBack' onClick={toggleMenu}>Go back to categories</button>
      </div>
    )
}