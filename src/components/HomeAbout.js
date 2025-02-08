import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function HomeAbout(props) {
  return (
    <section id="aj-about-section" className="home-about-bg">
      <div className="container">
        <h2 className="aj-section-heading">{props.aboutTitle}</h2>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="image">
              <img src="images/me.jpg" alt="Me"/>
            </div>
          </div>
          <div
            className="col-lg-9 col-md-12 col-sm-12 col-12"
            style={{ alignSelf: "center" }}
          >
            <div className="description">
              <p>
                Hey there ! Thank you for stopping-by. This is the only official
                site where I keep my updated profile public. So let us start
                with a bit of information of myself.
              </p>
              <p>
                I am Akshay Kishor Jagtap. I am a Website Designer and
                Developer. I have completed my bachelors degree in Computer
                Science from K.A.A.N.M.S College, Satana under Pune University
                and completed my M.C.A from Sandip University, Nashik.
              </p>
            </div>
            <div className="read-more-btn-div">
              <Link to="/about" className="btn btn btn-default aj-btn-default">
                {props.readMoreText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

HomeAbout.propTypes = {
  aboutTitle: PropTypes.string,
};

HomeAbout.defaultProps = {
  aboutTitle: "About",
};
