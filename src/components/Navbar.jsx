import { Link } from "react-router-dom";
import { FaRegTimesCircle } from "react-icons/fa";
import { MdOutlineSegment } from "react-icons/md";
import "./Navbar.css";
import { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#cdebf5" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              dannyunggy
            </Link>
            <div className="menu-icon" onClick={() => setClick(!click)}>
              {click ? <FaRegTimesCircle /> : <MdOutlineSegment />}
            </div>
            <li className="nav-btn">
              {button ? (
                <Link
                  to="/sign-up"
                  className="btn-link"
                  style={{ display: "none" }}
                >
                  <Button buttonStyle="btn--outline"></Button>
                </Link>
              ) : (
                <Link to="/#newsletter" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    NewsLetter
                  </Button>
                </Link>
              )}
            </li>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li
                className="nav-item"
                onClick={() => window.location.replace("/#footer")}
              >
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li className="nav-line">
                <hr />
              </li>
              <li
                className="nav-item"
                onClick={() => window.location.replace("/#about")}
              >
                <Link
                  to="/#about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
