import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineLiveTv } from "react-icons/md";
import Button from "../../components/button/Button";
import Img from "../../asset/empty-shell.jpeg";
import jay from "../../asset/jay.jpg";
import "./Music.scss";

const Music = () => {
  const [click, setClick] = useState(false);
  const [love, setLove] = useState(false);

  return (
    <div className="music" id="music" data-aos="fade-left">
      <h3 className="header">Music</h3>
      <div className="content">
        <div className="deluxe">
          <p>Empty shell (Deluxe)</p>
          <div className="deluxe-poster">
            <img src={Img} alt="shell" className="poster" />
            <FaSpotify className="icon" />
          </div>
          <div className="listen">
            <Button />
            <div className="like" onClick={() => setClick(!click)}>
              {click ? <FcLike /> : <FcLikePlaceholder />}
            </div>
          </div>
        </div>
        <div className="live">
          <p>Hold you dear (Live version)</p>
          <div className="live-poster">
            <img src={jay} alt="shell" className="poster" />
            <MdOutlineLiveTv className="icon" />
          </div>
          <div className="listen">
            <Button />
            <div className="like" onClick={() => setLove(!love)}>
              {love ? <FcLike /> : <FcLikePlaceholder />}
            </div>
          </div>
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
