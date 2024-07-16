import React, { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const strings = [
    "web designer",
    "front-end developer",
    "backend developer",
    "software developer",
    "full stack developer",
    "ui/ux designer",
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (currentIndex < strings[index].length) {
        currentText += strings[index].charAt(currentIndex);
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setDisplayedText("");
          setIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="home">
      <div className="image">
        <Spline
          scene="https://prod.spline.design/0-77-vpBpPWyxvCW/scene.splinecode"
          className="spline"
        />
      </div>

      <div className="content">
        <h3>hi, i am kasim kadiwala</h3>
        <span>{displayedText}</span>
      </div>
    </section>
  );
};

export default Home;
