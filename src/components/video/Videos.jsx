import Button from "../button/Button";
import "./Videos.scss";

const Videos = () => {
  return (
    <div className="videos" id="videos">
      <h3 className="header">Videos</h3>
      <div className="content">
        <h5>No videos available...</h5>
      </div>
      <div className="view">
        <Button text="IG LIVE" />
      </div>
    </div>
  );
};

export default Videos;
