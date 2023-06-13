import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  fiInstagram,
} from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> Dubai Town Raiwind Road, Lahore</p>
        <p className="p__opensans"> +92 3474254696</p>
        <p className="p__opensans"> +92 3083664878</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          The best way to find yourself is to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon image"
          className="spoon__img"
          style={{ marginTop: "15px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans"> Monday - Friday</p>
        <p className="p__opensans">08:00 am-12:00 am</p>
        <p className="p__opensans"> Saturday - Sunday</p>
        <p className="p__opensans">07:00 am-11:00 am</p>
      </div>
    </div>
    <div className="app__footer-copyright">
      <p className="p__opensans">2023 all rights reserved</p>
    </div>
  </div>
);

export default Footer;