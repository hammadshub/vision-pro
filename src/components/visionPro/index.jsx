import React ,{useEffect} from "react";
import "./VisionPro.css";
import applevision from "../../assets/videos/applevision.mp4";


const VisionPro = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundVideo = document.getElementById('my2Video');

      if (backgroundVideo) {
        backgroundVideo.style.transform = `translate(0%, calc(10% + ${scrollPosition * 0.5}px))`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="visionpro">
      <div className="applevisionvideo">
        <video autoPlay muted loop id="my2Video">
          <source src={applevision} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="scrollOver">
        <div className="scrollText">
          <p>
          The Apple Vision Pro seamlessly combines <br />digital content with your surroundings.
            <br />
            <br />
            So you can work, watch movies, relive <br /> memories and connect with others in a  <br />whole new way.
             <br />
            <br />
             Welcome to the era of spatial computing. <br />
            <br />
          </p>
        </div>

        <a href="https://www.apple.com/de/apple-vision-pro/" className="play-button">
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
