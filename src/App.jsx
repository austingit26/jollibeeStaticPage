import { useState, useEffect } from 'react'
import './App.css'
import Category from './components/Category'
import Menu from './components/Menu'

function App() {
  const [jollibeeCategories, setJollibeeCategories] = useState([])
  const [isCategory, setIsCategory] = useState(true)
  const [param, setParam] = useState('breakfast')

  async function getMenu() {
    try {
      let response = await fetch("https://api-jollibee-menu.vercel.app/menu")
      let data = await response.json()
      data = data.data
      setJollibeeCategories(data);
      return [data, null]
    } catch(err) { 
      return [null, err] 
    }
  }

  useEffect(() => {
    getMenu();
  }, [])

  const toggleIsCategory = ()=>{
    setIsCategory(!isCategory);
  }

  return (
    <div className="App">
    {isCategory ? 
    <Category jollibeeCategories= {jollibeeCategories} isCategory={isCategory} toggleIsCategory={toggleIsCategory}/> :
    <Menu isCategory={isCategory} toggleIsCategory={toggleIsCategory}  menuParam={param}/>
    }
    </div>
  )
}
export default App
