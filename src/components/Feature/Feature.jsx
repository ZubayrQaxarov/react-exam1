import "./Feature.css";

const Feature = ({ items }) => {
  return (
    <div className="features">
      <div className="container strip">
        {items.map((item, index) => (
          <div key={index} className={`stripItem ${item.theme}`}>
            <div className="stripIcon">{item.icon}</div>
            <div className="stripText">
              <div className="stripTitle">{item.title}</div>
              <div className="stripSub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
