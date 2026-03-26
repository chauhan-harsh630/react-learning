import './ProductList.css';
import { useCart } from '../../context/CartContext';

function Productcard({ product }) {
    const { addToCart } = useCart();
    const priceNumber = parseFloat(product.price.replace('$', '').replace(/,/g, ''));
    const originalPrice = !isNaN(priceNumber) ? (priceNumber * 1.25).toFixed(2) : '199.99';
    
    
    const isSale = product.id % 3 === 0;
    const isNew = product.id % 4 === 0 && !isSale;
    const reviewCount = 20 + (product.id * 15) % 300; 

    return (
        <div className="product-card">
            <div className="product-image-container">
                {isSale && <span className="product-badge">Sale</span>}
                {isNew && <span className="product-badge new">New</span>}
                <img src={product.image} alt={product.title} className="product-image" />
            </div>
            
            <div className="product-info">
                <div className="product-category">Featured Tech</div>
                <h2 className="product-title">{product.title}</h2>
                
                <div className="product-rating">
                    ⭐⭐⭐⭐⭐ <span>({reviewCount})</span>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-price-row">
                    <span className="product-price">{product.price}</span>
                    <span className="product-original-price">${originalPrice}</span>
                </div>
                
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Productcard;