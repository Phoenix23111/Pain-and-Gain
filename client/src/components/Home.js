import React, { useState, useEffect } from "react";
import AboutSection from "./AboutSection";
import SliderHome from "./SliderHome";
import FooterHome from "./FooterHome";

function Home() {
  const slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  const [showAboutSection, setShowAboutSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust this value as needed
      const triggerPoint = 0.3 * windowHeight; // Trigger when user scrolls past half of the window height

      if (scrollPosition > triggerPoint) {
        setShowAboutSection(true);
      } else {
        setShowAboutSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="grid grid-flow-row">
        <div>
          <SliderHome slides={slides} />
        </div>
        <div className=" flex contain-content mx-auto w-auto h-auto px-4">
          <div className="transition-transform duration-2000 ease-in-out transform">
            <div
              className={`${
                showAboutSection ? "slide-in" : ""
              } bg-white text-black h-auto pt-16  mt-28`}
            >
              <div className="bg-white  text-black">
                <AboutSection></AboutSection>
              </div>
            </div>
            <style jsx>{`
              .slide-in {
                animation: slideIn 1s forwards;
                margin-top: 0px;
              }

              @keyframes slideIn {
                from {
                  transform: translateY(100%);
                }
                to {
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </div>
        <div className=" mt-16 flex-row">
          <FooterHome />
        </div>
      </div>
    </>
  );
}

export default Home;
