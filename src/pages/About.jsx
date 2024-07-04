import React, { useEffect, useState } from "react";
import icon1 from "../images/icon-1.png";
import icon2 from "../images/icon-2.png";
import icon3 from "../images/icon-3.png";
import icon4 from "../images/icon-4.png";
import icon5 from "../images/icon-5.png";
import icon6 from "../images/icon-6.png";
import icon7 from "../images/icon-7.png";
import nextjs from "../images/nextjs.png";
import firebase from "../images/firebase.png";
import tailwind from "../images/tailwind.png";
import ionic from "../images/ionic.png";
import boot from "../images/boots.svg";
import elect from "../images/elect.png";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialData = {
  about: {
    id: "about",
    title: "About Me",
    items: [
      { id: "item-1", content: "name: kasim kadiwala" },
      { id: "item-2", content: "age: 21" },
      { id: "item-3", content: "email: kasimkkn15@gmail.com" },
      { id: "item-4", content: "address: mumbai, India OR Ahmedabad, India" },
      { id: "item-6", content: "freelance: available" },
      {
        id: "item-7",
        content: "language: english, hindi, gujarati, urdu, marathi",
      },
      { id: "item-8", content: "hobbies: reading, gaming, cricket" },
    ],
  },
  stats: {
    id: "stats",
    title: "Stats",
    items: [
      { id: "item-9", content: "1+ year of experience" },
      { id: "item-10", content: "10+ happy clients" },
      { id: "item-11", content: "20+ project completed" },
    ],
  },
};

const About = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("aboutData");
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem("aboutData", JSON.stringify(data));
  }, [data]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const sourceList = data[result.source.droppableId];
    const destList = data[result.destination.droppableId];
    const [reorderedItem] = sourceList.items.splice(result.source.index, 1);
    destList.items.splice(result.destination.index, 0, reorderedItem);

    setData({
      ...data,
      [sourceList.id]: sourceList,
      [destList.id]: destList,
    });
  };

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
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <section className="about">
          <h1 className="heading">
            {" "}
            about <span>me</span>{" "}
          </h1>
          <div className="row">
            <div className="info-container">
              <div className="box-container">
                <Droppable droppableId="about">
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="box"
                    >
                      {data.about.items.map(({ id, content }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="box-item"
                            >
                              <h3>{content}</h3>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
            <div className="count-container">
              <Droppable droppableId="stats">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="box"
                  >
                    {data.stats.items.map(({ id, content }, index) => (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="box-item"
                          >
                            <h3>{content}</h3>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
          <a href="#" className="btn" onClick={handleDownload}>
            {" "}
            download CV <i className="fas fa-download"></i>{" "}
          </a>
        </section>
      </DragDropContext>

      <SkillsSection />

      <section className="education">
      
        <h1 className="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2021 - 2024</span>
            <h3>bacehelor of computer application</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2022 - 2023</span>
            <h3>full stack web developer</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2023 - 2024</span>
            <h3>database management</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2022 - 2023</span>
            <h3>web design</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2023 - 2024</span>
            <h3>software engineering</h3>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2022 - </span>
            <h3>git & github and other tools</h3>
          </div>
        </div>
      </section>
    </>
  );
};



const skills = [
  { id: "html", icon: icon1, label: "html" },
  { id: "css", icon: icon2, label: "css" },
  { id: "javascript", icon: icon3, label: "javascript" },
  { id: "reactjs", icon: icon6, label: "reactjs" },
  { id: "bootstrap", icon: boot, label: "bootstrap" },
  { id: "tailwind", icon: tailwind, label: "tailwindcss" },
  { id: "nodejs", icon: icon5, label: "nodejs" },
  { id: "nextjs", icon: nextjs, label: "nextjs" },
  { id: "mysql", icon: icon4, label: "mysql" },
  { id: "mongodb", icon: icon7, label: "mongodb" },
  { id: "firebase", icon: firebase, label: "firebase" },
  { id: "ionic", icon: ionic, label: "ionic" },
  { id: "electronjs", icon: elect, label: "electronjs" },
  { id: "reactnative", icon: icon6, label: "react native" },
];

const SkillsSection = () => {
    const [displaySkills, setDisplaySkills] = useState(skills);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplaySkills(prevSkills => [
                ...prevSkills.slice(1),  
                prevSkills[0],
            ]);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="skills">
            <h1 className="heading"> <span>my</span> skills </h1>
            <div className="box-container">
                {displaySkills.map((skill, index) => (
                    <div key={skill.id} className="box" style={{  }}>
                        <img src={skill.icon} alt={skill.label} />
                        <h3>{skill.label}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
