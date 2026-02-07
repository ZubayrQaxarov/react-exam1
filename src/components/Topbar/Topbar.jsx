import "./Topbar.css";

const Topbar = ({ left, right }) => {
  return (
    <div className="topbar">
      <div className="container topbarRow">
        <div className="topbarLeft">{left}</div>
        <div className="topbarRight">
          {right.map((item, index) => (
            <button key={index} className="topbarBtn">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
