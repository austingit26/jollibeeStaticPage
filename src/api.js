export async function getMenu() {
    try {
      let response = await fetch("https://api-jollibee-menu.vercel.app/menu")
      let data = await response.json()
      data = data.data
      return [data, null]
    } catch(err) { 
      return [null, err] 
    }
}