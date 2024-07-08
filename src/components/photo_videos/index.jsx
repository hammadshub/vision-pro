

import React,{useEffect} from "react";
import "./Photos_videos.css";

import large from "../../assets/videos/large.mp4";

const Photos_videos = () => {


  return (
    <div className="videos_container">
      <div className="bg__video">
        <video autoPlay muted loop id="my5Video">
          <source src={large} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="scroll__Over">
          <h3>Photos and videos</h3>
          <h1>Experiencing the moment.<br/>Again and again.</h1>
        </div>
      </div>
    
  );
};

export default Photos_videos;
