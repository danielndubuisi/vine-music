import { useEffect } from "react";
import "./HeroSection.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightText2,
  lightTextDesc,
  backImg,
  headline,
  subHeadline,
  description,
  subPhotos,
  sectionId,
  img,
  alt,
  imgStart,
}) => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <>
      <div className="topImg-container">
        {backImg ? (
          <img src={backImg} alt="topImg" className="backImg" />
        ) : null}
      </div>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container" id={sectionId}>
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row" : "row-reverse",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className={topLine ? "top-line" : "none"}>{topLine}</div>
                <h1 className={lightText2 ? "none" : "heading dark"}>
                  {headline}
                </h1>
                <h4 className={lightText ? "sub-heading" : "sub-heading dark"}>
                  {subHeadline}
                </h4>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <div className="home__sub-photo">
                  {subPhotos &&
                    subPhotos.map((pic) => (
                      <img key={pic.id} src={pic.src} alt={pic.alt} />
                    ))}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
