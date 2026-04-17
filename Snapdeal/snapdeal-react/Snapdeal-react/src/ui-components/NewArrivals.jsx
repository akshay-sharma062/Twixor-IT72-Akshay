import products from "../data/products.data.json";

const NewArrivals = () => {
  return (
    <>
      <h2 className="section-title">New Arrivals</h2>

      <div className="scroll-row">
        {products.slice(0, 6).map((item) => (
          <div className="card" key={item.id}>
            <div className="new-badge">NEW</div>

            <img src={item.image} alt={item.name} />

            <div className="price-row">
              <span className="current-price">₹{item.price}</span>
              <span className="original-price">
                ₹{item.price + 800}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrivals;