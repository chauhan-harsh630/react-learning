import { useState } from "react";
import "./Card.css";

function Card({ product }) {
    const [addToCart, setToCart] = useState(false);

    // Default fallback if no product is passed
    const item = product || {
        name: "Product Name",
        price: 0,
        image: "https://via.placeholder.com/300",
        stock: 0
    };

    return (
        <div className="card">
            <img src={item.image} alt={item.name} />
            <div className="card-info">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-desc">Stock: {item.stock}</p>
                <div className="card-price">${item.price}</div>
            </div>
            <button 
                className={addToCart ? "remove" : "add"} 
                onClick={() => setToCart(!addToCart)}
            >
                {addToCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
}

export default Card;