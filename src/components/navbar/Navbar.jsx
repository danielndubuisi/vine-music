import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";
import { useState } from "react";
import "./Navbar.scss";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#13264bef" }}>
        <div className="navbar">
          <div className="menu-icon" onClick={() => setClick(!click)}>
            {click ? <FaRegTimesCircle /> : <MdOutlineSegment />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#music");
              }}
            >
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Music
              </Link>
            </li>
            <li className="nav-line">
              <hr />
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#videos");
              }}
            >
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                Videos
              </Link>
            </li>
            <li className="nav-line">
              <hr />
            </li>

            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#about");
              }}
            >
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
          </ul>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            V.I.N.E.
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#tour");
              }}
            >
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                Tour
              </Link>
            </li>
            <li className="nav-line">
              <hr />
            </li>
            <li
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#contact");
              }}
            >
              <Link to="" className="nav-links" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li className="nav-line">
              <hr />
            </li>

            <li className="nav-item">
              <Link to="/store" className="nav-links" onClick={closeMobileMenu}>
                Store
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
