import { useState, useEffect } from 'react'
import './App.css'
import Category from './components/Category'
import Menu from './components/Menu'
import { getMenu } from './api'

function App() {
  const [jollibeeCategories, setJollibeeCategories] = useState([])
  const [isCategory, setIsCategory] = useState(true)
  const [param, setParam] = useState('')

  useEffect(() => {
    async function fetchData() {
      const [data, err] = await getMenu()
      if (data) {
        setJollibeeCategories(data)
      } else {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  const toggleIsCategory = () => {
    setIsCategory(!isCategory)
  }

  const handleCategoryClick = (eventParam) => {
    setParam(eventParam)
  }

  return (
    <div className="App">
      {isCategory ? 
        <Category 
          jollibeeCategories={jollibeeCategories} 
          isCategory={isCategory} 
          toggleIsCategory={toggleIsCategory} 
          handleCategoryClick={handleCategoryClick}
        /> :
        <Menu 
          isCategory={isCategory} 
          toggleIsCategory={toggleIsCategory} 
          menuParam={param}
        />
      }
    </div>
  )
}

export default App