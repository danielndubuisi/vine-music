import { FaSpotify } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { MdOutlineLiveTv } from "react-icons/md";
import Button from "../../components/button/Button";
import Img from "../../asset/empty-shell.jpeg";
import jay from "../../asset/jay.jpg";
import "./Music.scss";

const Music = () => {
  return (
    <div className="music" id="music">
      <h3 className="header">Music</h3>
      <div className="content">
        <div className="deluxe">
          <p>Empty shell (Deluxe)</p>
          <div className="deluxe-poster">
            <img src={Img} alt="shell" className="poster" />
            <FaSpotify className="icon" />
            <FcLike className="like" />
          </div>
          <Button />
        </div>
        <div className="live">
          <p>Hold you dear (Live version)</p>
          <div className="live-poster">
            <img src={jay} alt="shell" />
            <MdOutlineLiveTv className="icon" />
            <FcLike className="like" />
          </div>
          <Button />
        </div>
      </div>
      <div className="new">
        <h4 className="news">New EP: </h4>
        <span className="title">S7V3N5</span>
        <small className="time"> Coming soon!!!</small>
      </div>
    </div>
  );
};

export default Music;
