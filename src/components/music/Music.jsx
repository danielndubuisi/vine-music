import { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineLiveTv } from "react-icons/md";
import Img from "../../asset/artboard1.png";
import hold from "../../asset/hold2.png";
import "./Music.scss";

const Music = () => {
  const [click, setClick] = useState(false);
  const [love, setLove] = useState(false);

  return (
    <div className="music" id="music">
      <h3 className="header">Music</h3>
      <div className="content" data-aos="fade-left">
        <div className="deluxe">
          <p>Empty shell (Deluxe)</p>
          <div className="deluxe-poster">
            <img src={Img} alt="shell" className="poster" />
            <FaSpotify className="icon" />
          </div>
          <div className="listen">
            <a href="https://spotify.com" target="_blank" rel="noreferrer">
              LISTEN HERE
            </a>

            <div className="like" onClick={() => setClick(!click)}>
              {click ? (
                <FcLike className="like-icon" />
              ) : (
                <FcLikePlaceholder className="like-icon" />
              )}
            </div>
          </div>
        </div>
        <div className="live">
          <p>Hold you dear (Live version)</p>
          <div className="live-poster">
            <img src={hold} alt="shell" className="poster" />
            <MdOutlineLiveTv className="icon" />
          </div>
          <div className="listen">
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              LISTEN HERE
            </a>

            <div className="like" onClick={() => setLove(!love)}>
              {love ? <FcLike /> : <FcLikePlaceholder />}
            </div>
          </div>
        </div>
      </div>
      <div className="new">
        <h4 className="news">New EP: </h4>
        <span className="title">S7V3N5</span>
        <small> Coming soon!!!</small>
      </div>
    </div>
  );
};

export default Music;
