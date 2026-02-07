import "./TopSellers.css";

const TopSellers = ({ data }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="secTop">
          <div className="secTitle">Top Sellers</div>
        </div>

        <div className="grid grid4">
          {data.map((item, index) => (
            <div className="card" key={index}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
