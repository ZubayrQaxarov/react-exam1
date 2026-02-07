import "./Productcard.css";

const Productcard = ({ item }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={item.img} alt={item.title} />
        <span className="tag">{item.off}</span>
      </div>

      <div className="cardTitle">{item.title}</div>

      <div className="cardRow">
        <div className="price">
          ${item.price} <span>${item.oldPrice}</span>
        </div>
        <div className="rate">⭐ {item.rating}</div>
      </div>

      <button className="btn dark">Add To Cart</button>
    </div>
  );
};

export default Productcard;
