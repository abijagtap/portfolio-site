import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Banner(props) {
  document.title = "Akshay Jagtap - Home";
    return (
      <section id="aj-banner-section">
        <div className="aj-banner">
          <img src="images/bg.jpg" alt='Banner'/>
          <div className="container-fluid">
            <div className="aj-banner-data">
              <p>Hello there, I am</p>
              <h1>
                Akshay <span>Jagtap</span>
              </h1>
              <p>I am a Computer Programmer, Website Designer & Developer</p>
              <Link
                to="/portfolio"
                className="btn btn btn-default aj-btn-default"
              >
                {props.exploreBtnText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
}

Banner.propTypes = {
  exploreBtnText: PropTypes.string,
};

Banner.defaultProps = {
  exploreBtnText: "Explore My Work",
};