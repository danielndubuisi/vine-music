import "./Videos.scss";

const Videos = () => {
  return (
    <div className="videos" id="videos">
      <h3 className="header">Videos</h3>
      <div className="content">
        <h5>No videos available...</h5>
      </div>
      <div className="view">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <button className="btn"> IG LIVE</button>
        </a>
      </div>
    </div>
  );
};

export default Videos;
