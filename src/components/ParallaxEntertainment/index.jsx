import React, { useEffect, useState, useRef } from "react";
import "./ParallaxEntertainment.css";
import videoSource from "../../assets/videos/large.mp4";
import PlayIcon from "../../assets/svg/PauseSvg";
import PauseIcon from "../../assets/svg/PauseSvg";

const ParallaxEntertainment = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoElementRef = useRef(null);

  const handlePlayPauseToggle = () => {
    if (isPlaying) {
      videoElementRef.current.pause();
    } else {
      videoElementRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleScrollEffect = () => {
      const sections = document.querySelectorAll(".video-container");
      const currentScrollPosition = window.scrollY;

      sections.forEach((section) => {
        const videoElement = section.querySelector("video");
        const textElement = section.querySelector(".scrolling-text");
        const sectionTopOffset = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollOffset = currentScrollPosition - sectionTopOffset;

        if (scrollOffset < 0) {
          videoElement.style.position = "absolute";
          videoElement.style.top = "0";
          textElement.style.position = "absolute";
          textElement.style.top = "50%";
        } else if (scrollOffset < sectionHeight) {
          videoElement.style.position = "fixed";
          videoElement.style.top = "0";
          textElement.style.position = "fixed";
          textElement.style.top = `${50 - (scrollOffset / sectionHeight) * 50}%`;
        } else {
          videoElement.style.position = "absolute";
          videoElement.style.top = `${sectionHeight}px`;
          textElement.style.position = "absolute";
          textElement.style.top = `${sectionHeight / 2}px`;
        }
      });
    };

    window.addEventListener("scroll", handleScrollEffect);
    return () => {
      window.removeEventListener("scroll", handleScrollEffect);
    };
  }, []);

  return (
    <div>
      <section className="video-container">
        <video
          className="parallax-video"
          ref={videoElementRef}
          autoPlay
          loop
          muted
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="playback-control" onClick={handlePlayPauseToggle}>
          {isPlaying ? <PauseIcon fill="white" /> : <PlayIcon fill="white" />}
        </div>
        <div className="scrolling-text">
          {/* Your text here */}
        </div>
      </section>
    </div>
  );
};

export default ParallaxEntertainment;
