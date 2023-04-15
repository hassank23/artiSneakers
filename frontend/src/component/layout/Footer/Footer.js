import React from "react";
//import ReactDOM from 'react-dom';
import { FaInstagram } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>ARTISNEAKS</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy;ArtiSneaks</p>
      </div>

      <div className="rightFooter social-icons">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">  <FaInstagram /> <span>Instagram</span></a>
      </div>
    </footer>
  );
};

export default Footer;