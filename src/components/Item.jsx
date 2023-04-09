export default function Item ({ description, img, category, price }) {
    return (
        <div className="item">
            <div className="categories">
                <h2 className="desc">{description}</h2>
                <img src={img} alt={category} />
                <h3>₱{price}.00</h3>
            </div>
        </div>
    )
}