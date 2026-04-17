import { useState } from "react";
import LoginDropdown from "../ui-components/LoginDropdown";
import SearchBox from "../ui-components/SearchBox";

const CATEGORIES = [
  ["Mobiles & Tablets", "Computers & Peripherals", "Cameras & Accessories", "Gaming"],
  ["Audio & Video", "Appliances", "Men's Clothing", "Women's Clothing"],
  ["Footwear", "Kid's Fashion & Accessories", "Fashion Accessories", "Daily Needs"],
  ["Furniture", "Home Furnishing", "Home Decoratives", "Watch"],
  ["Bags & Luggage", "Eyewear", "Automotive", "Tools & Hardware"],
];

const Header = ({ cart, setCart, searchQuery, setSearchQuery }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [, forceUpdate] = useState(0);

  const increaseQty = (index) => {
    cart[index].qty = (cart[index].qty || 1) + 1;
    forceUpdate((n) => n + 1);
  };

  const decreaseQty = (index) => {
    if ((cart[index].qty || 1) > 1) {
      cart[index].qty -= 1;
      forceUpdate((n) => n + 1);
    }
  };

  const removeItem = (index) => {
    cart.splice(index, 1);
    forceUpdate((n) => n + 1);
  };

  const total = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span>Free Delivery</span>
            <span>7 Days Easy Returns</span>
            <span>Best Prices</span>
          </div>
          <div className="top-bar-right">
            <a href="#">Our Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Sell on Snapdeal</a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="header-container">
        <a href="#" className="logo">
          <img src="src/assets/image.png" alt="logo" />
        </a>

        <div className="header-right">

          {/* 🔍 SEARCH BOX — updated props */}
          <SearchBox
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <LoginDropdown />

          {/* 🛒 CART ICON */}
          <div className="icon-box" onClick={() => setCartOpen((prev) => !prev)}>
            <span className="icon">🛒</span>
            <span>My Cart ({cart.length})</span>
          </div>

          <a href="#" className="download-btn">↗ Download App</a>
        </div>
      </div>

      {/* 🔥 CART POPUP */}
      {cartOpen && (
        <div className="cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="cart-popup" onClick={(e) => e.stopPropagation()}>

            <button className="cart-close-btn" onClick={() => setCartOpen(false)}>✕</button>

            {cart.length === 0 ? (
              <>
                <p className="cart-empty-title">Shopping Cart is empty!</p>

                <div className="cart-browse-section">
                  <p className="cart-browse-heading">Browse Categories</p>

                  <div className="cart-categories-grid">
                    {CATEGORIES.map((row, rowIdx) =>
                      row.map((cat, colIdx) => (
                        <a key={`${rowIdx}-${colIdx}`} href="#" className="cart-category-link">
                          - {cat}
                        </a>
                      ))
                    )}
                  </div>

                  <button className="cart-start-btn">START SHOPPING NOW</button>
                </div>

                <div className="cart-footer-trust">
                  <span>🛡️ Safe and Secure Payments</span>
                  <span>🚚 100% Payment Protection, Easy Returns Policy</span>
                </div>
              </>
            ) : (
              <>
                <h3 className="cart-title">My Cart ({cart.length})</h3>

                <div className="cart-items-list">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item-row">
                      <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <p className="cart-item-price">
                          ₹{(item.price * (item.qty || 1)).toLocaleString()}
                        </p>
                      </div>

                      <div className="cart-qty-controls">
                        <button onClick={() => decreaseQty(index)}>−</button>
                        <span>{item.qty || 1}</span>
                        <button onClick={() => increaseQty(index)}>+</button>
                      </div>

                      <button className="cart-remove-btn" onClick={() => removeItem(index)}>✕</button>
                    </div>
                  ))}
                </div>

                <div className="cart-total-row">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <button className="cart-checkout-btn">PROCEED TO CHECKOUT</button>

                <div className="cart-footer-trust">
                  <span>🛡️ Safe and Secure Payments</span>
                  <span>🚚 100% Payment Protection, Easy Returns Policy</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;