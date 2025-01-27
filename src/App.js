import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { ReachUs } from "./components/ReachUs";
import { About } from "./components/About";
import { Offerings } from "./components/Offerings";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Offerings />
      {/* <OurTeam /> */}
      <ReachUs />
      <Footer />
    </div>
  );
}

export default App;
