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
          duo of Daniel Ndubuisi and John Godson have headlined live
          performances, picking up accolades from the likes of Sanmi, and many
          more outlets along the way. They’ve been described, at various times
          over this period, as a folk, soul, and pop rock band – and the truth
          is they’ve dabbled in ...
        </p>
        <Link to="/bio" className="btn">
          SEE FULL BIO
        </Link>
      </div>
    </div>
  );
};

export default About;
