import React from 'react'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import icon5 from '../images/icon-5.png'
import icon6 from '../images/icon-6.png'
import icon7 from '../images/icon-7.png'
import nextjs from '../images/nextjs.png'
import firebase from '../images/firebase.png'
import tailwind from '../images/tailwind.png'
import ionic from '../images/ionic.png'
import boot from '../images/boots.svg'
import elect from '../images/elect.png'

const About = () => {
   const handleDownload = () => {
        const url =   '/kasim cv.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
  <>
       <section className="about">

<h1 className="heading"> about <span>me</span> </h1>

<div className="row">

    <div className="info-container">

        <h1>personal info</h1>

        <div className="box-container">

            <div className="box">
                <h3> <span>name : </span> kasim kadiwala</h3>
                <h3> <span>age : </span> 21 </h3>
                <h3> <span>email : </span> kasimkkn15@gmail.com </h3>
                <h3> <span>address : </span> mumbai, India OR Ahmedabad, India</h3>
            </div>

            <div className="box">
                <h3> <span>experience : </span> 1 year </h3>
                <h3> <span>freelance : </span> available </h3>
                <h3> <span>language : </span> english, hindi, gujarati , urdu , marathi </h3>
                <h3> <span>hobbies : </span> reading, gaming, cricket </h3>
            </div>

        </div>

        <a href="#" className="btn" onClick={handleDownload}> download CV <i className="fas fa-download"></i> </a>

    </div>

    <div className="count-container">

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


<section className="skills">

<h1 className="heading"> <span>my</span> skills </h1>

<div className="box-container">
    <div className="box">
        <img src={icon1}></img>
        <h3>html</h3>
    </div>
    <div className="box">
        <img src={icon2}></img>
        <h3>css</h3>
    </div>
    <div className="box">
        <img src={icon3}></img>
        <h3>javascript</h3>
    </div>
    <div className="box">
        <img src={icon6}></img>
        <h3>reactjs</h3>
    </div>
    <div className="box">
        <img src={boot}></img>
        <h3>bootstrap</h3>
    </div>
    <div className="box">
        <img src={tailwind}></img>
        <h3>tailwindcss</h3>
    </div>
    
    <div className="box">
        <img src={icon5}></img>
        <h3>nodejs</h3>
    </div>
    <div className="box">
        <img src={nextjs}></img>
        <h3>nextjs</h3>
    </div>
    <div className="box">
        <img src={icon4}></img>
        <h3>mysql</h3>
    </div>
    <div className="box">
        <img src={icon7}></img>
        <h3>mongodb</h3>
    </div>
    <div className="box">
        <img src={firebase}></img>
        <h3>firebase</h3>
    </div>
    <div className="box">
        <img src={ionic}></img>
        <h3>ionic</h3>
    </div>
    <div className="box">
        <img src={elect}></img>
        <h3>electronjs</h3>
    </div>
    <div className="box">
        <img src={icon6}></img>
        <h3>react native</h3>
    </div>
    
</div>

</section>


<section className="education">

<h1 className="heading"> <span>my</span> education </h1>

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

  )
}

export default About