import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

function Checkout() {

  const {
    cart,
    totalPrice,
    clearCart
  } = useContext(CartContext);

  const tax = totalPrice * 0.05;
  const total = totalPrice + tax;

  function placeOrder() {

    alert("🎉 Order Placed Successfully!");

    clearCart();
  }

  return (

    <section className="checkout-page">

      <div className="container checkout-grid">

        <div className="shipping-card">

          <h2>Shipping Details</h2>

          <div className="info">

            <p><strong>Name:</strong> Guest User</p>

            <p><strong>Email:</strong> guest@eshop.com</p>

            <p><strong>Address:</strong> 221B Baker Street</p>

            <p><strong>Payment:</strong> Cash on Delivery</p>

          </div>

        </div>

        <div className="order-card">

          <h2>Order Summary</h2>

          {cart.map(item => (

            <div
              key={item.id}
              className="summary-item"
            >

              <span>

                {item.title}

                ×

                {item.quantity}

              </span>

              <span>

                $

                {(item.price * item.quantity).toFixed(2)}

              </span>

            </div>

          ))}

          <hr />

          <div className="summary-item">

            <span>Subtotal</span>

            <span>${totalPrice.toFixed(2)}</span>

          </div>

          <div className="summary-item">

            <span>Tax</span>

            <span>${tax.toFixed(2)}</span>

          </div>

          <div className="summary-item">

            <span>Shipping</span>

            <span>FREE</span>

          </div>

          <hr />

          <div className="summary-item total">

            <span>Total</span>

            <span>${total.toFixed(2)}</span>

          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >

            Place Order

          </button>

        </div>

      </div>

    </section>

  );

}

export default Checkout;