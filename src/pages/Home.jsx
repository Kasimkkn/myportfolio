import React, { useState, useEffect } from 'react';
import myphoto from '../images/kasim.png';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const strings = ['web designer', 'front-end developer', 'backend developer', 'software engineer'];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (currentIndex < strings[index].length) {
        currentText += strings[index].charAt(currentIndex);
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText('');
          setIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, 2000); // Delay before starting to type next string
      }
    }, 100); // Typing speed (milliseconds per character)

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="home">
      <div className="image">
        <img src={myphoto} alt="" />
      </div>
      <div className="content">
        <h3>hi, i am kasim kadiwala</h3>
        <span>{displayedText}</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
        <a href="#" className="btn"> about me <i className="fas fa-user"></i> </a>
      </div>
    </section>
  );
};

export default Home;
