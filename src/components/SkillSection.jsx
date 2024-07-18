import React from 'react'
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
import './skillsection.css'

const SkillSection = () => {
  return (
    <div className="skillSlider" reverse="true" style={{
            '--width': '120px',
            '--height': '120px',
            '--quantity': '13'
        }}>
            <div className="list">
                <div className="item" style={{'--position': '1'}}><img src={icon1} alt=""/></div>
                <div className="item" style={{'--position': '2'}}><img src={icon2} alt=""/></div>
                <div className="item" style={{'--position': '3'}}><img src={icon3} alt=""/></div>
                <div className="item" style={{'--position': '4'}}><img src={icon4} alt=""/></div>
                <div className="item" style={{'--position': '5'}}><img src={icon5} alt=""/></div>
                <div className="item" style={{'--position': '6'}}><img src={icon6} alt=""/></div>
                <div className="item" style={{'--position': '7'}}><img src={icon7} alt=""/></div>
                <div className="item" style={{'--position': '8'}}><img src={tailwind} alt=""/></div>
                <div className="item" style={{'--position': '9'}}><img src={boot} alt=""/></div>
                <div className="item" style={{'--position': '10'}}><img src={elect} alt=""/></div>
                <div className="item" style={{'--position': '11'}}><img src={firebase} alt=""/></div>
            </div>
        </div>
  )
}

export default SkillSection