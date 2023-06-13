import React from "react";

import "./Header.css";
import images from "../../constants/images";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour " />
      <h1 className="app__header-h1">The Key to fine Dining </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        In the example above, we define an object called styles that contains
        CSS properties and their corresponding values
      </p>
      <button type="button" className="custom__button">
        Explore menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
