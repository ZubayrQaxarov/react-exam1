import "./Category.css";

const Category = ({ title, cards }) => {
  return (
    <div className="section light">
      <div className="container">
        <div className="secTop">
          <div className="secTitle">{title}</div>
        </div>

        <div className="catGrid">
          {cards.map((item, index) => (
            <div key={index} className="catCard">
              <div className="catTitle">{item.name}</div>
              <div className="catList">
                {item.items.map((it, index2) => (
                  <div key={index2} className="catLi">
                    {it}
                  </div>
                ))}
              </div>
              <div className="catLink">{item.link}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
