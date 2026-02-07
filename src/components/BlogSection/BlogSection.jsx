import "./BlogSection.css";

const BlogSection = ({ title, posts }) => {
  return (
    <div className="section">
      <div className="container">
        <div className="secTop">
          <div className="secTitle">{title}</div>
        </div>

        <div className="blogGrid">
          {posts.map((item, index) => (
            <div key={index} className="blogCard">
              <div className="blogImg">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="blogTitle">{item.title}</div>
              <div className="blogDate">{item.date}</div>
              <button className="blogBtn">Read more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
