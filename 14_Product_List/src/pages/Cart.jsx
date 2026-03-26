import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart() {
    const { cart, removeFromCart } = useCart();
    
    // Safety fallback for malformed prices
    const parsePrice = (priceStr) => {
        if (!priceStr) return 0;
        const num = parseFloat(priceStr.replace('$', '').replace(/,/g, ''));
        return isNaN(num) ? 0 : num;
    };
    
    const totalPrice = cart.reduce((total, item) => {
        return total + (parsePrice(item.price) * item.quantity);
    }, 0);

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h2>Your Shopping Cart</h2>
                
                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is currently empty.</p>
                        <Link to="/" className="continue-shopping">Continue Shopping</Link>
                    </div>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cart.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h3>{item.title}</h3>
                                        <p className="item-price">{item.price}</p>
                                        <p className="item-qty">Quantity: {item.quantity}</p>
                                    </div>
                                    <button 
                                        className="remove-btn" 
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="summary-total">
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
