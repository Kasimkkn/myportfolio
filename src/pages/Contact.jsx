const Contact = () => {
  return (
    <section className="contact">
      <h1 className="heading">
        {" "}
        contact <span>me</span>{" "}
      </h1>

      <div className="row">
        <div className="info-container">
          <h1>get in touch</h1>
          <p>
          Experienced Full Stack Web Developer proficient in front-end and back-end technologies,
            I am available for work. Connect with me
          </p>
          <div className="box-container">
            <div className="box">
              <i className="fas fa-map"></i>
              <div className="info">
                <h3> address : </h3>
                <p>mumbai, India OR Ahmedabad, India</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-envelope"></i>
              <div className="info">
                <h3>email :</h3>
                <p>kasimkkn15@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-phone"></i>
              <div className="info">
                <h3>number :</h3>
                <p>+91 8459258801</p>
              </div>
            </div>
          </div>

          <div className="share">
            <a
              href="https://github.com/Kasimkkn"
              className="fab fa-github"
              target="_blank"
            ></a>
            <a
              href="https://www.instagram.com/kasim_kkn/"
              className="fab fa-instagram"
              target="_blank"
            ></a>
            <a
              href="https://www.linkedin.com/in/kasim-kadiwala-221665240/"
              className="fab fa-linkedin"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
