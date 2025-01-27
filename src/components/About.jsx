import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import YoutubeIcon from "../assets/img/youtube.png";
import "animate.css";

export const About = () => {
  const src = "https://www.youtube.com/embed/nhmE_6EyqDI?si=K47nnYYKa1TGPPH6";

  return (
    <section className="about" id="about">
      <Container>
        <div class="container-heading">
          <div className="line-left"></div>
          <span className="heading">About Us</span>
        </div>
        <Row
          className="align-items-center"
          style={{ display: "flex", gap: "5%" }}
        >
          <Col size={12}>
            <Container className="about-container">
              <Container className="about-desc">
                <h2>SpiritCity</h2>
                <p>
                  Welcome to Spirit City Roleplay, where immersive adventures
                  and a strong community come together to create unforgettable
                  experiences. Our goal is to provide a dynamic and engaging
                  environment where players can craft and live out unique
                  stories, exploring a world filled with rich narratives,
                  detailed environments, and endless possibilities. Spirit City
                  stands as more than just a server. We are a community driven
                  by creativity, passion, and collaboration. Whether you are a
                  seasoned roleplayer or stepping into this world for the first
                  time, Spirit City offers a welcoming space where your
                  imagination can thrive. <br />
                  <br />
                  Join us in shaping the stories of Spirit City and become part
                  of a legacy that continues to grow and inspire.
                </p>
              </Container>
            </Container>
          </Col>
          <Col className="video">
            <iframe
              width="550"
              height="300"
              src={src}
              title="Youtube Player"
              frameborder="0"
              allowFullScreen
            />
          </Col>
          <div className="link-button">
            <button className="watch-now">
              <img src={YoutubeIcon} alt="Icon" />
              <a href="https://youtu.be/nhmE_6EyqDI?si=jFGtfkxHGdCAO_BB">
                Watch Video
              </a>
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
};
