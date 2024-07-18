import React from "react";
import { NavLink } from "react-router-dom";
import { FaAddressCard, FaBriefcase, FaHome, FaUser } from "react-icons/fa";
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
      <NavLink to="/" exact="true" activeClassName="active" onClick={() => playSound(pian1Sound)}>
        <FaHome/>
        <span>home</span>
      </NavLink>
      <NavLink to="about" activeClassName="active" onClick={() => playSound(pian2Sound)}>
        <FaUser/>
        <span>about</span>
      </NavLink>
      <NavLink to="portfolio" activeClassName="active" onClick={() => playSound(pian3Sound)}>
        <FaBriefcase/>
        <span>portfolio</span>
      </NavLink>
      <NavLink to="contact" activeClassName="active" onClick={() => playSound(pian1Sound)}>
        <FaAddressCard/>
        <span>contact</span>
      </NavLink>
    </nav>
  );
};

export default Header;
