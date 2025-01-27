import React from 'react';
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/discord.png";
import navIcon2 from "../assets/img/youtube.png";
import navIcon3 from "../assets/img/instagram.png";
import { Info } from "./Info";
import { Tooltip } from "react-tooltip";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-con">
        <Info />
        <div className="copyright">
          <p>
            Copyright &copy; 2025 SpiritCityRoleplay. <br />
            All Rights Reserved.
          </p>
        </div>
        <div>
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-social-icon">
          <a href="https://discord.gg/spiritcity" className="discord-tooltip">
            <img src={navIcon1} alt="Icon" />
          </a>
          <a
            href="https://www.youtube.com/@SCRP-JOD"
            className="youtube-tooltip"
          >
            <img src={navIcon2} alt="Icon" />
          </a>
          <a href="#" className="instagram-tooltip">
            <img src={navIcon3} alt="Icon" />
          </a>
        </div>
      </div>
      <div className="watermark">Made with &#10084; for SCRP</div>
      <Tooltip
        anchorSelect=".discord-tooltip"
        place="top"
        style={{ backgroundColor: "white", color: "black" }}
      >
        Discord
      </Tooltip>
      <Tooltip
        anchorSelect=".youtube-tooltip"
        place="top"
        style={{ backgroundColor: "white", color: "black" }}
      >
        Youtube
      </Tooltip>
      <Tooltip
        anchorSelect=".instagram-tooltip"
        place="top"
        style={{ backgroundColor: "white", color: "black" }}
      >
        Instagram
      </Tooltip>
    </footer>
  );
};
