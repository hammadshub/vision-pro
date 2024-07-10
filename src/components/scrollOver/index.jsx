import React from "react";
import "./ScrollOver.css";

const ScrollOver = () => {
  return (
    <div className="scrollOver">
    <div className="scrollText">
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
      className="play-button"
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

  );
};

export default ScrollOver;
