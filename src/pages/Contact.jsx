import Spline from "@splinetool/react-spline";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarked, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <section className="contact" style={{ overflow: 'hidden !important' }}>
        <div className="info-container">
          <h1>get in touch</h1>
          <p>
            Experienced Full Stack Web Developer proficient in front-end and back-end technologies,
            I am available for work. Connect with me
          </p>
          <div className="box-container">
            <div className="box">
              <FaMapMarked />
              <div className="info">
                <h3> address : </h3>
                <p>mumbai, India OR Ahmedabad, India</p>
              </div>
            </div>

            <div className="box">
              <FaEnvelope />
              <div className="info">
                <h3>email :</h3>
                <p>kasimkkn15@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <FaPhone />
              <div className="info">
                <h3>number :</h3>
                <p>+91 8459258801</p>
              </div>
            </div>
          </div>

          <div className="share">
            <Link
              to="https://github.com/Kasimkkn"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              to="https://www.instagram.com/kasim_kkn/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/in/kasim-kadiwala-221665240/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="contact-model">
          <Spline
            scene="https://prod.spline.design/UPTjVBOfURcVKnjv/scene.splinecode"
          />
        </div>
    </section>
  );
};

export default Contact;
