import React from 'react';
import { FaGraduationCap } from "react-icons/fa";
const educationData = [
  {
    id: "bca",
    icon: <FaGraduationCap/>,
    duration: "2021 - 2024",
    degree: "Bachelor of Computer Application"
  },
  {
    id: "fullstack",
    icon: <FaGraduationCap/>,
    duration: "2022 - 2023",
    degree: "Full Stack Web Developer"
  },
  {
    id: "dbms",
    icon: <FaGraduationCap/>,
    duration: "2023 - 2024",
    degree: "Database Management"
  },
  {
    id: "webdesign",
    icon: <FaGraduationCap/>,
    duration: "2022 - 2023",
    degree: "Web Design"
  },
  {
    id: "software",
    icon: <FaGraduationCap/>,
    duration: "2023 - 2024",
    degree: "Software Engineering"
  },
  {
    id: "tools",
    icon: <FaGraduationCap/>,
    duration: "2022 - 2022 ",
    degree: "Git & GitHub and other tools"
  }
];

const EducationSection = () => {
  return (
    <section className="education">
      <h1 className="heading">
        <span>my</span> education
      </h1>
      <div className="box-container">
        {educationData.map((item) => (
          <div key={item.id} className="box">
            {item.icon}
            <span>{item.duration}</span>
            <h3>{item.degree}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
