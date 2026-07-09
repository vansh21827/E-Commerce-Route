import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useContext(CartContext);

  const tax = totalPrice * 0.05;
  const grandTotal = totalPrice + tax;

  if (cart.length === 0) {
    return (
      <section className="empty-cart container">
        <h1>Your Cart is Empty</h1>
        <p>Add some amazing products to continue shopping.</p>

        <Link to="/shop" className="primary-btn">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page container">

      <div className="cart-items">

        <h1>Shopping Cart</h1>

        {cart.map((item) => (
          <div className="cart-card" key={item.id}>

            <img
              src={item.thumbnail}
              alt={item.title}
            />

            <div className="cart-details">

              <h3>{item.title}</h3>

              <p>{item.brand}</p>

              <h2>${item.price}</h2>

            </div>

            <div className="quantity-box">

              <button
                onClick={() =>
                  decreaseQuantity(item.id)
                }
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(item.id)
                }
              >
                +
              </button>

            </div>

            <button
              className="remove-btn"
              onClick={() =>
                removeFromCart(item.id)
              }
            >
              Remove
            </button>

          </div>
        ))}

      </div>

      <aside className="summary-card">

        <h2>Order Summary</h2>

        <div>
          <span>Subtotal</span>

          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div>
          <span>Tax</span>

          <span>${tax.toFixed(2)}</span>
        </div>

        <div>
          <span>Shipping</span>

          <span>FREE</span>
        </div>

        <hr />

        <div className="summary-total">

          <span>Total</span>

          <span>${grandTotal.toFixed(2)}</span>

        </div>

        <Link
          to="/checkout"
          className="primary-btn checkout-btn"
        >
          Proceed to Checkout
        </Link>

      </aside>

    </section>
  );
}

export default Cart;