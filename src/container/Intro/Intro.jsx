import React, { useState, useRef } from "react";

import "./Intro.css";
import { BsFillPlayFill, BsFillplay, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        loop
        controls={false}
        muted
        typeof="video/mp4"
      ></video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center 
        "
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={27} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={27} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Intro;
