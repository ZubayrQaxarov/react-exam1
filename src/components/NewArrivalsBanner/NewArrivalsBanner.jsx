import "./NewArrivalsBanner.css";

const NewArrivalsBanner = () => {
  return (
    <div className="naBanner">
      <div className="naBg" />
      <div className="container naRow">
        <div className="naLeft">
          <div className="naWord naWord1">New</div>
          <div className="naWord naWord2">Arrivals</div>
        </div>

        <div className="naRight">
          <div className="naMini">New Collection 2023</div>
          <div className="naTitle">Apple Watch Series 8</div>
          <div className="naBadges">
            <div className="naBadge">Off
              <span>60%</span>
            </div>
            <div className="naBadge">Price
              <span>$259.00</span>
            </div>
          </div>
          <button className="naBtn">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalsBanner;