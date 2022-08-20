import React from "react";
import "./Footer.css";
import artiste from "./asset/artiste.jpg";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaTiktok, FaSpotify } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <img src={artiste} className="artiste-img" alt="artiste" />
            <p>"We belong where songs are made with ♡."</p>
          </div>
          <div className="footer-link-items">
            <h3>Book an event</h3>
            <p>ndubeansdaniel97@gmail.com</p>
            <p>+234(0) 903 067 3128</p>
            <div className="social-icons">
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaSpotify />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaWhatsapp />
              </Link>
              <Link
                className="social-icon-link"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaTiktok />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            © dannyunggy 2022. All rights reserved
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
