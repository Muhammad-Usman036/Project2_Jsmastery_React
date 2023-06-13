import React from "react";

import "./AboutUs.css";
import images from "../../constants/images";
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          doloribus atque magni, vero vitae illo ullam ab, necessitatibus vel
          error ea mollitia quia praesentium, nobis laborum quae optio
          voluptatibus odio!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_Knife flex__center">
        <img src={images.knife} alt="about_Knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          doloribus atque magni, vero vitae illo ullam ab, necessitatibus vel
          error ea mollitia quia praesentium, nobis laborum quae optio
          voluptatibus odio!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
