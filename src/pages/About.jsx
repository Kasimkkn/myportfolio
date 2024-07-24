import React from "react";
import EducationSection from "../components/EducationSection";
import SkillsSection from "../components/SkillSection";


const About = () => {
  const handleDownload = () => {
    const url = "/kasim cv.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="about">
        <h1 className="heading">

          about <span>me</span>
        </h1>

        <div className="row">
          <div className="count-container">
            <div className="box">
              <a href="#" className="btn" onClick={handleDownload}>
                download CV <i className="fas fa-download"></i>
              </a>
            </div>
            <div className="box">
              <h3>1+</h3>
              <p>year of experience</p>
            </div>

            <div className="box">
              <h3>10+</h3>
              <p>happy clients</p>
            </div>
            <div className="box">
              <h3>20+</h3>
              <p>project completed</p>
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />
      <EducationSection />
    </>
  );
};

export default About;
