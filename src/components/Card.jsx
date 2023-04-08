export default function Card (props){
    const toggleMenu = ()=>{
        props.toggleMenu()
    }
    return(
        <div className="item" onClick={toggleMenu}>
            <div className="categories">
                <h2>{props.category}</h2>
                <img src={props.image} alt={props.category} />
            </div>
        </div>
        
    )
}