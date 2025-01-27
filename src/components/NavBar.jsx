import React from 'react';
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/textlogo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapsed">
          <Nav
            className="ms-auto nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <span className="intersection">|</span>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <span className="intersection">|</span>
            <Nav.Link
              href="#offerings"
              className={
                activeLink === "offerings"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("offerings")}
            >
              Offerings
            </Nav.Link>
            <span className="intersection">|</span>
            <Nav.Link
              href="#rules"
              className={
                activeLink === "rules" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("rules")}
            >
              Rules
            </Nav.Link>
            <span className="intersection">|</span>
            <Nav.Link
              href="#reach"
              className={
                activeLink === "reach" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("reach")}
            >
              Reach Us
            </Nav.Link>
          </Nav>

          <span className="navbar-text">
            <a href="https://scrpallowlist.netlify.app/" target="_blank">
              <button className="vvd">
                <span>Apply Now</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
