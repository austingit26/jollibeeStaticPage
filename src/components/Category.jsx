import { useState, useEffect } from 'react'
import Card from './Card'

export default function Category(props){
  console.log(props);
  const [search, setSearch] = useState('');

  const toggleMenu = ()=>{
    props.toggleIsCategory();
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const filteredCategory = props.jollibeeCategories.filter((item) => {
    return item.category.toLowerCase().includes(search.toLowerCase());
  });

  const displayCategories = filteredCategory.map(items=>{
    return (
      <Card 
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
          <h2>Jollibee Categories</h2>
          <input type="text" placeholder='Search' onChange={handleSearch} value={search} />
        </nav>
        <div className="categoryContainer">{filteredCategory.length? displayCategories: <p>Sorry, <b><i>{search}</i></b> not found.</p>}</div>
    </div>
    )
}