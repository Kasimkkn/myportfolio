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

import React from "react";
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
    return (
        <section className="skills">
            <h1 className="heading">

                <span>my</span> skills
            </h1>
            <div className="box-container">
                {skills.map((skill, index) => (
                    <div key={skill.id} className="box" style={{}}>
                        <img src={skill.icon} alt={skill.label} />
                        <h3>{skill.label}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default SkillsSection