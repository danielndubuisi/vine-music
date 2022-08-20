import "./NewsLetter.css";
import img from "../components/asset/newsletter.jpg";

const NewsLetter = () => {
  return (
    <>
      <div className="connected-section">
        <div className="connected-section__container">
          <div className="content" style={{ backgroundImage: `url(${img})` }}>
            <h2>NewsLetter sign-up</h2>
            <p>
              Don't want to miss exciting new music updates ? Just leave us your
              email and we'll keep you updated!
            </p>
            <div className="connected-form__container">
              <div className="form-container">
                <form>
                  <input type="text" placeholder="Enter email address" />
                  <input type="submit" className="blue" value="Subscribe" />
                </form>
              </div>
              <small className="privacy">We respect your privacy.</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
