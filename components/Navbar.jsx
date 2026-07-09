import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

import "../styles/navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="navbar">

      <div className="nav-container">

        <Link to="/" className="logo">
          🛍 <span>E-Shop</span>
        </Link>

        <nav>

          <ul className="nav-links">

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/cart" className="cart-link">
                🛒
                <span className="cart-badge">
                  {cart.length}
                </span>
              </Link>
            </li>

            <li>
              {isLoggedIn ? (
                <button
                  className="logout-btn"
                  onClick={logout}
                >
                  Logout
                </button>
              ) : (
                <Link className="login-btn" to="/login">
                  Login
                </Link>
              )}
            </li>

          </ul>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;