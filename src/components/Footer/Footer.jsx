import "./Footer.css";

const Footer = ({ brand, desc, cols, socials, copy }) => {
  return (
    <div className="footer">
      <div className="container footerRow">
        <div className="footerLeft">
          <div className="footerBrand">{brand}</div>
          <div className="footerDesc">{desc}</div>

          <div className="footerSubRow">
            <input className="footerInput" placeholder="Your email" />
            <button className="footerBtn">Submit</button>
          </div>

          <div className="socials">
            {socials.map((item, index) => (
              <button key={index} className="socialBtn">
                <img src={item.url} alt={item.label} />
              </button>
            ))}
          </div>
        </div>

        <div className="footerCols">
          {cols.map((col, index) => (
            <div key={index} className="footerCol">
              <div className="footerTitle">{col.title}</div>
              {col.links.map((link, index2) => (
                <a key={index2} className="footerLink" href="#">
                  {link}
                </a>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container footerBottom">
        <div className="footerCopy">{copy}</div>
      </div>
    </div>
  );
};

export default Footer;
