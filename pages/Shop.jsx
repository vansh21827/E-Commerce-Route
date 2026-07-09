import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const filteredProducts = [...products]
  .filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
  .sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0;
  });
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products"
        );

        if (!response.ok) {
          throw new Error("Unable to fetch products.");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }

  return (
    <section className="shop-page">
      <h1>Shop Products</h1>
<section className="shop-header container">

  <div>

    <h1>Shop Products</h1>

    <p>
      Discover premium products at the best prices.
    </p>

  </div>

  <div className="shop-controls">

    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
    >
      <option value="default">
        Sort By
      </option>

      <option value="low">
        Price: Low to High
      </option>

      <option value="high">
        Price: High to Low
      </option>

      <option value="rating">
        Highest Rated
      </option>

    </select>

  </div>

</section>

<div className="container">
  <p className="product-count">
    {filteredProducts.length} Products Found
  </p>
</div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Shop;