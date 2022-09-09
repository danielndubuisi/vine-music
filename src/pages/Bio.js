import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./Bio.scss";

const Bio = () => {
  return (
    <>
      <div className="bio">
        <Navbar />
        <div className="content">
          <h2 className="header">Bio</h2>
          <p className="text">
            The story of V.I.N.E is one of perseverance and determination, of
            personal, cumulative growth and maturity. Formed in 2022, the
            current duo of Daniel Ndubuisi and John Godson have unreleased
            full-length albums and headlined tours from coast to coast, picking
            up accolades from the likes of Sanmi, NPR, and many more outlets
            along the way. They’ve been described, at various times over the
            past decade, as a folk, alternative, and rock band – and the truth
            is they’ve dabbled in all these areas, and more – but fitting into
            one box has never been a defining factor for them. “For me, our
            sound is more like a concept or an existential experience than it is
            a specific genre,” John says. “If you have to boil it down that’s
            fine, but I want it to be more than that: I want it to be a way of
            understanding oneself, about making a positive impact – of making a
            difference in people’s lives – and nothing does that more clearly
            than with music" Daniel says. V.I.N.E extends beyond just the duo.
            There’s something there for you in the songs. There’s something you
            can find for yourself, no matter where you are in life.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Bio;
