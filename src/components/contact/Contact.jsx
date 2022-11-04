import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { SiAudiomack } from "react-icons/si";
import "./Contact.scss";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
  };
  return (
    <div className="contact" id="contact">
      <h3 className="header">Contact</h3>
      <div className="content">
        <div className="top-content">
          <div className="bookings">
            <h4 className="title">For enquires:</h4>
            <p className="email">info@vinemusic.xyz</p>
          </div>
          <div className="label">
            <h4 className="title">Label:</h4>
            <p className="label-name">
              &copy; <span>vinemusic</span>
            </p>
          </div>
          <div className="social">
            <h4 className="title">Social:</h4>
            <div className="links">
              <FaInstagram className="icon" />
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaSpotify className="icon" />
              <FiMusic className="icon" />
              <SiAudiomack className="icon" />
            </div>
          </div>
        </div>
        <div className="news-letter">
          <div className="letter-header">
            <h3>Get notified</h3>
            <p>Sign up with your email address to recieve news and updates</p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
              <input type="email" placeholder="Email" />
              <button type="submit" className="signup-btn">
                SIGN UP
              </button>
            </form>
            <small>We respect your privacy.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
