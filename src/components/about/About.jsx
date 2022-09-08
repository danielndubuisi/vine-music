import Button from "../button/Button";
import { Link } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <h3 className="header">About</h3>
      <div className="content">
        <p className="text">
          The story of V.I.N.E is one of perseverance and determination, of
          personal, cumulative growth and maturity. Formed in 2022, the current
          duo of Daniel Ndubuisi and John Godson have ...
        </p>
        <Link to="/bio">
          <Button text="SEE FULL BIO" />
        </Link>
      </div>
    </div>
  );
};

export default About;
