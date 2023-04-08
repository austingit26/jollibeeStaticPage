export default function Item (props){
    return(
        <div className="item">
            <div className="categories">
                <h2>{props.description}</h2>
                <img src={props.img} alt={props.category} />
                <h3>₱{props.price}.00</h3>
            </div>
        </div>
    )
}