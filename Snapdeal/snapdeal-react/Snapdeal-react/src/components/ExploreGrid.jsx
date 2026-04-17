import { useState } from "react";
import products from "../data/products.data.json";

const INITIAL_COUNT = 8;
const LOAD_MORE_COUNT = 4;

const ExploreGrid = ({ cart, setCart, searchQuery }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product }]);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, products.length));
  };

  const filteredProducts = searchQuery
    ? products.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const visibleProducts = searchQuery
    ? filteredProducts
    : filteredProducts.slice(0, visibleCount);

  const hasMore = !searchQuery && visibleCount < products.length;

  return (
    <>
      <h2 className="section-title">
        {searchQuery
          ? `"${searchQuery}" ke liye ${filteredProducts.length} results`
          : "Explore More On Snapdeal"}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="no-results">😕 Koi product nahi mila "{searchQuery}" ke liye</p>
      ) : (
        <div className="grid">
          {visibleProducts.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <div className="price-row">
                <span className="current-price">₹{item.price}</span>
                <span className="original-price">₹{item.price + 500}</span>
              </div>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart 🛒
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="explore-more-wrapper">
        {hasMore ? (
          <button className="explore-more-btn" onClick={handleLoadMore}>
            Explore More <span className="explore-arrow">↓</span>
          </button>
        ) : (
          !searchQuery && (
            <p className="all-loaded-msg">🎉 Aap ne saare products dekh liye!</p>
          )
        )}
      </div>
    </>
  );
};

export default ExploreGrid;