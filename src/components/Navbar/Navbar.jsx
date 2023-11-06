import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="logo">
            <h1>Krystian</h1>
          </div>
          <div className="menu-items">
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
