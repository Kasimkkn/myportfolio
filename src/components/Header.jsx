import React from "react";
import { NavLink } from "react-router-dom";

import pian1Sound from "/1.mp3";
import pian2Sound from "/2.mp3";
import pian3Sound from "/3.mp3";

const Header = () => {
  const playSound = (sound) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createBufferSource();

    fetch(sound)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
      })
      .catch((error) => {
        console.error("Error loading audio file:", error);
      });
  };

  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="active" onClick={() => playSound(pian1Sound)}>
        <i className="fas fa-home"></i>
        <span>home</span>
      </NavLink>
      <NavLink to="about" activeClassName="active" onClick={() => playSound(pian2Sound)}>
        <i className="fas fa-user"></i>
        <span>about</span>
      </NavLink>
      <NavLink to="portfolio" activeClassName="active" onClick={() => playSound(pian3Sound)}>
        <i className="fas fa-briefcase"></i>
        <span>portfolio</span>
      </NavLink>
      <NavLink to="contact" activeClassName="active" onClick={() => playSound(pian1Sound)}>
        <i className="fas fa-address-book"></i>
        <span>contact</span>
      </NavLink>
    </nav>
  );
};

export default Header;
