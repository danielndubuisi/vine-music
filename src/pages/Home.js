import "./Home.css";
import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { homeDataOne, homeDataThree, homeDataFour } from "../Data/data";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection {...homeDataOne} />
      <HeroSection {...homeDataThree} />
      <HeroSection {...homeDataFour} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
