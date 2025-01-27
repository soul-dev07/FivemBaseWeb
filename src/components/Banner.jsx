import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/discord.png";
import navIcon2 from "../assets/img/youtube.png";
import navIcon3 from "../assets/img/instagram.png";
import { Tooltip } from "react-tooltip";
import bg from "../assets/img/bg.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      {/* <img src={bg} alt="bg-logo" className="bg-logo" /> */}
      <Container>
        <Row className="aligh-items-center justify-content-center text-center ">
          <Col xs={8} md={6} xl={7} className="main-text">
            <span className="tagline">Welcome to</span>
            <h1>SPIRIT CITY ROLEPLAY</h1>
            <span>DISCOVER SECRETS AND SHAPE STORIES</span>
          </Col>
        </Row>
        <Row>
          <Col className="banner-btns">
            <a
              href="https://cfx.re/join/4jpxa5"
              target="_blank"
              className="play-btn btn-anim"
            >
              Play
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="banner-social-btns">
            <div className="social-icon">
              <a
                href="https://discord.gg/spiritcity"
                target="_blank"
                className="dc"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://www.youtube.com/@SCRP-JOD"
                target="_blank"
                className="yt"
              >
                <img src={navIcon2} alt="" />
              </a>
              <a href="#" target="_blank" className="insta">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
        <Tooltip
          anchorSelect=".dc"
          place="left"
          style={{ backgroundColor: "rgba(0,0,0)" }}
        >
          Discord
        </Tooltip>
        <Tooltip
          anchorSelect=".yt"
          place="left"
          style={{ backgroundColor: "rgba(0,0,0)" }}
        >
          Youtube
        </Tooltip>
        <Tooltip
          anchorSelect=".insta"
          place="left"
          style={{ backgroundColor: "rgba(0,0,0)" }}
        >
          Instagram
        </Tooltip>
      </Container>
    </section>
  );
};
