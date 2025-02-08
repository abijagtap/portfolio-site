import React from "react";
import PropTypes from 'prop-types'

export default function About(props) {
  document.title = "Akshay Jagtap - About";
  return (
    <section id="aj-about-section">
      <div className="container">
        <h2 className="aj-section-heading">{props.aboutTitle}</h2>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="image">
              <img src="images/me.jpg" alt="" />
            </div>
            <p className="mt-4 text-center">
              <a
                href="CV-Akshay.pdf"
                target="_blank"
                className="btn btn btn-default aj-btn-default"
                rel="noreferrer"
              >
                {props.downloadBtnText}
              </a>
            </p>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="description">
              <p>
                Hey there ! Thank you for stopping-by. This is the only official
                site where I keep my updated profile public. So let us start
                with a bit of information of myself. <br />
                I am Akshay Kishor Jagtap. I am a Website Designer and
                Developer. I have completed my bachelors degree in Computer
                Science from K.A.A.N.M.S College, Satana under Pune University
                and completed my M.C.A from Sandip University, Nashik. <br />I
                have worked as a frontend and backend developer with languages
                such as HTML, CSS, JavaScript, PHP, using frameworks and
                libraries like Codeigniter, Bootstrap, Jquery, React.
              </p>
              <h5>What are my skills & expertise?</h5>
              <p>
                ✅ HTML5, CSS3, JavaScript, Bootstrap, jQuery, ReactJS : I have
                a great experience in these front-end technologies, crafting
                pixel-perfect, responsive interfaces that leave a lasting
                impression of your website. <br />
                ✅ PHP, Codeignter, MySQL : I have worked in PHP web development
                for more than 3 years and have a great experience in building
                website Backend using Codeigniter framework and MySQL along with
                the Frontend. <br />✅ Shopify : I have experience in Shopify
                development from theme customization to theme development as per
                the requirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  aboutTitle: PropTypes.string,
};

About.defaultProps = {
  aboutTitle: 'About',
}