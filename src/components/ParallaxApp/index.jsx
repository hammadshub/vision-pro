import React, { useEffect, useState, useRef } from "react";
import "./ParallaxApp.css";
import appleVision from "../../assets/videos/applevision.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const ParallaxApp = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".video-sectionn");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const video = section.querySelector("video");
        const text = section.querySelector(".ptext");
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollTop = scrollPosition - sectionTop;

        if (scrollTop < 0) {
          video.style.position = "absolute";
          video.style.top = "0";
          text.style.position = "absolute";
          text.style.top = "50%";
        } else if (scrollTop < sectionHeight) {
          video.style.position = "fixed";
          video.style.top = "0";
          text.style.position = "fixed";
          text.style.top = `${50 - (scrollTop / sectionHeight) * 50}%`;
        } else {
          video.style.position = "absolute";
          video.style.top = `${sectionHeight}px`;
          text.style.position = "absolute";
          text.style.top = `${sectionHeight / 2}px`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="video-sectionn">
        <video
          className="background-video"
          ref={videoRef}
          autoPlay
          loop
          muted
        >
          <source src={appleVision} type="video/mp4" />
        </video>
        <div className="control-button" onClick={togglePlayPause}>
          {isPlaying ? <PauseSvg fill="white" /> : <PlaySvg fill="white" />}
        </div>
        <div className="ptext">
          {/* Your text here */}
        </div>
      </section>
    </div>
  );
};

export default ParallaxApp;
