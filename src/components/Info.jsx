import React from 'react';
import discordicon from "../assets/img/discord.png";

export const Info = () => {
  return (
    <div className="newsletter-bx">
      <div className="box-text">
        <h3>Join Our Discord For</h3> <br />
        <h3>Daily Updates and Suggestions !!</h3>
      </div>
      <div className="discord-button">
        <a href="https://discord.gg/spiritcity">
          <img src={discordicon} alt="Icon" className="dc-icon" />
        </a>
      </div>
    </div>
  );
};
