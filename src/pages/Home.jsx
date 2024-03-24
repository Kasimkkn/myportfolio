import React, { useState, useEffect } from 'react';
import myphoto from '/kasim.png';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const strings = ['web designer', 'front-end developer', 'backend developer', 'software developer','full stack developer','ui/ux designer'];

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
        }, 2000);
      }
    }, 100);

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
        <p>A passionate developer with expertise in a variety of fields including web design, front-end and back-end development, software engineering, and UI/UX design. I thrive on creating innovative solutions and bringing ideas to life. Let's collaborate and turn your vision into reality!</p>
         {/* <a href="/about" className="btn"> about me <i className="fas fa-user"></i> </a> */}
      </div>
    </section>
  );
};

export default Home;
