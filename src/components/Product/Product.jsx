import "./Product.css";
import Productcard from "../Productcard/Productcard";

const Product = ({ title, items, cols }) => {
  let gridClass = "grid4";
  if (cols === 3) {
    gridClass = "grid3";
  }

  return (
    <div className="section">
      <div className="container">
        <div className="secTop">
          <div className="secTitle">{title}</div>
        </div>

        <div className={`grid ${gridClass}`}>
          {items.map((item, index) => (
            <Productcard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
