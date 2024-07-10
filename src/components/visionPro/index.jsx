import React, { useEffect, useRef, useState  } from "react";
import styles from "./VisionPro.module.css";
import applevision from "../../assets/videos/applevision.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";



const VisionPro = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundVideo = document.getElementById("my2Video");

      if (backgroundVideo) {
        backgroundVideo.style.transform = `translate(0%, calc(0% + ${
          scrollPosition * 0.5
        }px))`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const handlePlayPausebtn = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className= {styles.visionpro}>
      <div className={styles.applevisionvideo}>
        <div className={styles.playypausebutton} onClick={handlePlayPausebtn}>
        {isPlaying ? (
          <PauseSvg fill="#d1d1d3"/>
        ) : (
          <PlaySvg fill="#d1d1d3" />
        )}
      </div>
        <video ref={videoRef} autoPlay muted loop id="my2Video">
          <source src={applevision} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.scrollOver}>
        <div className={styles.scrollText}>
          <p>
            The Apple Vision Pro seamlessly combines <br />
            digital content with your surroundings.
            <br />
            <br />
            So you can work, watch movies, relive <br /> memories and connect
            with others in a <br />
            whole new way.
            <br />
            <br />
            Welcome to the era of spatial computing. <br />
            <br />
          </p>
        </div>

        <a
          href="https://www.apple.com/de/apple-vision-pro/"
          className={styles.playButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span>watching a movie</span>
        </a>
      </div>
    </div>
  );
};

export default VisionPro;
