import { useState } from "react";

export default function Blog({ data }) {
  const { topbar, header, footer } = data;
  const [activeNav, setActiveNav] = useState("Blog");

  const posts = [
    { title: "How to choose a smart watch", date: "2026-01-12" },
    { title: "Best headphones for gaming", date: "2026-01-20" },
    { title: "Laptop buying guide 2026", date: "2026-02-01" },
    { title: "Top gadgets under $100", date: "2026-02-08" },
  ];

  return (
    <div className="home">
      <div className="topbar">
        <div className="container topbarRow">
          <div className="topbarLeft">{topbar.left}</div>
          <div className="topbarRight">
            {topbar.right.map((item, index) => (
              <button key={index} className="topbarBtn">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container headerRow">
          <Link className="brand" to="/">
            {header.brand}
          </Link>

          <div className="searchBox">
            <button className="catBtn">{header.categories} ▾</button>
            <input className="searchInput" placeholder="Search products..." />
            <button className="searchBtn">Search</button>
          </div>

          <div className="icons">
            {header.icons.map((item, index) => (
              <button key={index} className="iconBtn">
                <img src={item.url} alt={item.label} />
              </button>
            ))}
          </div>
        </div>

        <div className="nav">
          {header.nav.map((item, index) =>
            item === "Blog" ? (
              <Link
                key={index}
                to="/blog"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            ) : item === "Top Sellers" ? (
              <Link
                key={index}
                to="/top-sellers"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            ) : (
              <Link
                key={index}
                to="/"
                className={`navLink ${activeNav === item ? "active" : ""}`}
                onClick={() => setActiveNav(item)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      </div>

      <div className="page">
        <div className="container pageBody">
          <div className="pageTitle">Blog</div>

          <div className="list">
            {posts.map((item, index) => (
              <div key={index} className="listItem">
                <div className="listTitle">{item.title}</div>
                <div className="listSub">{item.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container footerRow">
          <div className="footerLeft">
            <div className="footerBrand">{footer.brand}</div>
            <div className="footerDesc">{footer.desc}</div>

            <div className="footerSubRow">
              <input className="footerInput" placeholder="Your email" />
              <button className="footerBtn">Submit</button>
            </div>

            <div className="socials">
              {footer.socials.map((item, index) => (
                <button key={index} className="socialBtn">
                  <img src={item.url} alt={item.label} />
                </button>
              ))}
            </div>
          </div>

          <div className="footerCols">
            {footer.cols.map((col, index) => (
              <div key={index} className="footerCol">
                <div className="footerTitle">{col.title}</div>
                {col.links.map((link, i) => (
                  <a key={i} className="footerLink" href="#">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="container footerBottom">
          <div className="footerCopy">{footer.copy}</div>
        </div>
      </div>
    </div>
  );
}
