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

  useEffect(() => {
    const handleMouseMove = (e) => {
      const content = document.querySelector(".home .content");
      const rect = content.getBoundingClientRect();
      const offsetX = e.clientX - rect.width / 2;
      const offsetY = e.clientY - rect.height / 2;

      content.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
        <p>
          A passionate developer with expertise in a variety of fields including
          web design, front-end and back-end development, software engineering,
          and UI/UX design. I thrive on creating innovative solutions and
          bringing ideas to life. Let's collaborate and turn your vision into
          reality!
        </p>
      </div>
    </section>
  );
};

export default Home;
