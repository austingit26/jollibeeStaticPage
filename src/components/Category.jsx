import { useState, useMemo } from 'react'
import Card from './Card'

export default function Category(props){
  const [search, setSearch] = useState('');

  const toggleMenu = ()=>{
    props.toggleIsCategory();
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const filteredCategory = useMemo(() => {
    return props.jollibeeCategories.filter((item) => {
      return item.category.toLowerCase().includes(search.toLowerCase());
    });
  }, [props.jollibeeCategories, search])

  const displayCategories = filteredCategory.map((items)=>{
    return (
      <Card 
        key={items.id}
        {...items}
        isCategory={props.isCategory}
        toggleMenu={toggleMenu}
        handleCategoryClick={props.handleCategoryClick}
      />
    )
  })

  return (
    <div>
      <nav>
        <h2>Jollibee Categories</h2>
        <input type="text" placeholder='Search' onChange={handleSearch} value={search} />
      </nav>
      <div className="categoryContainer">
        {filteredCategory.length ? displayCategories : <p>Sorry, <b><i>{search}</i></b> not found.</p>}
      </div>
    </div>
  )
}