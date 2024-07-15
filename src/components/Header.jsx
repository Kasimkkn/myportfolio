import React from "react";
import { Link } from "react-router-dom";

import pian1Sound from "/1.mp3";
import pian2Sound from "/2.mp3";
import pian3Sound from "/3.mp3";

const Header = () => {
  const play1Sound = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    const source = audioContext.createBufferSource();

    fetch(pian1Sound)
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
  const play2Sound = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    const source = audioContext.createBufferSource();

    fetch(pian2Sound)
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
  const play3Sound = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    const source = audioContext.createBufferSource();

    fetch(pian3Sound)
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
      <Link to="/" onClick={play1Sound}>
        {" "}
        <i className="fas fa-home"></i> <span>home</span>{" "}
      </Link>
      <Link to="about" onClick={play2Sound}>
        {" "}
        <i className="fas fa-user"></i> <span>about</span>{" "}
      </Link>
      <Link to="portfolio" onClick={play3Sound}>
        {" "}
        <i className="fas fa-briefcase"></i> <span>portfolio</span>{" "}
      </Link>
      <Link to="contact" onClick={play1Sound}>
        {" "}
        <i className="fas fa-address-book"></i> <span>contact</span>{" "}
      </Link>
    </nav>
  );
};

export default Header;
