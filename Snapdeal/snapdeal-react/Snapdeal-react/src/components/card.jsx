const Card = ({ item }) => {
    return (
      <div className="card">
        <div className="deal-badge">{item.discount}</div>
        <img src={item.image} />
        <span className="deal-label">{item.label}</span>
      </div>
    );
  };
  
  export default Card;