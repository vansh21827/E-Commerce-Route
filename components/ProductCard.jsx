import { useNavigate } from "react-router-dom";
import "../styles/productCard.css";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.title}</h3>

        <p className="category">{product.category}</p>

        <p className="price">${product.price}</p>

        <button
          onClick={() => navigate(`/product/${product.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;