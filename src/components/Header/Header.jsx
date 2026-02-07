import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ brand, categories, nav, icons, mobileOpen, setMobileOpen }) => {
  return (
    <div className="header">
      <div className="container headerRow">
        <NavLink to="/" className="brand">
          {brand}
        </NavLink>

        <div className="searchBox">
          <button className="catBtn">{categories} ▾</button>
          <input className="searchInput" placeholder="Search products..." />
          <button className="searchBtn">Search</button>
        </div>

        <div className="icons">
          <button className="burger" onClick={() => setMobileOpen(!mobileOpen)}>
            ☰
          </button>
          {icons.map((item, index) => (
            <button key={index} className="iconBtn">
              <img src={item.url} alt={item.label} />
            </button>
          ))}
        </div>
      </div>

      <div className={`nav ${mobileOpen ? "open" : ""}`}>
        {nav.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) => `navLink ${isActive ? "active" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
