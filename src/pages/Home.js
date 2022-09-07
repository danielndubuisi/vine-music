import { useEffect } from "react";
import "./Home.scss";
import Navbar from "../components/navbar/Navbar";
import bgImg from "../asset/guitar1.webp";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Tour from "../components/tour/Tour";
import Videos from "../components/video/Videos";
import Music from "../components/music/Music";
import Footer from "../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="top-section">
          <div className="top-background">
            <img src={bgImg} alt="bgImg" />
          </div>
        </div>
        <div className="mid-section">
          <Music />
          <Videos />
          <About />
        </div>
        <div className="bottom-section">
          <Tour />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
