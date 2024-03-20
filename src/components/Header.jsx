import React from "react";
import { Link } from "react-router-dom";

import pianoSound from "/piano.wav";

const Header = () => {
  const playPianoSound = () => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();

    const source = audioContext.createBufferSource();

    fetch(pianoSound)
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
      <Link to="/" onClick={playPianoSound}>
        {" "}
        <i className="fas fa-home"></i> <span>home</span>{" "}
      </Link>
      <Link to="about" onClick={playPianoSound}>
        {" "}
        <i className="fas fa-user"></i> <span>about</span>{" "}
      </Link>
      <Link to="portfolio" onClick={playPianoSound}>
        {" "}
        <i className="fas fa-briefcase"></i> <span>portfolio</span>{" "}
      </Link>
      <Link to="contact" onClick={playPianoSound}>
        {" "}
        <i className="fas fa-address-book"></i> <span>contact</span>{" "}
      </Link>
    </nav>
  );
};

export default Header;
