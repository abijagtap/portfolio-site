import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Footer(props) {

    const today = new Date();
    // const month = today.getMonth() + 1;
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    // const date = today.getDate();
    const currentDate = month + " " + year;

    return (
      <section id="aj-footer-section">
        <div className="container-fluid">
          <div className="aj-footer">
            <div className="row">
              <div className="col-md-3 col-xs-12">
                <div className="aj-footer-about">
                  <h4 className="">About</h4>
                  <p>
                    Hey there ! Thank you for stopping-by. This is the only
                    official site where I keep my updated profile public.
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="aj-footer-links">
                  <h4 className="">Quick Links</h4>
                  <div className="aj-quick-links">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-3">
                        <Link to="/">{props.homeText}</Link>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-3">
                        <Link to="/about">{props.aboutText}</Link>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-3">
                        <Link to="/portfolio">{props.portfolioText}</Link>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-3">
                        <Link to="/contact">{props.contactText}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="aj-footer-social-links">
                  <h4 className="">Social Media</h4>
                  <Link
                    to="https://www.facebook.com/abhay.jagtap.585"
                    target="_blank"
                  >
                    <img
                      src="images/social_logo/facebook.png"
                      alt="Facebook"
                      title="Facebook"
                    />
                  </Link>
                  <Link
                    to="https://www.instagram.com/abijagtap"
                    target="_blank"
                  >
                    <img
                      src="images/social_logo/instagram.png"
                      alt="Instagram"
                      title="Instagram"
                    />
                  </Link>
                  <Link to="https://www.twitter.com/abijagtap" target="_blank">
                    <img
                      src="images/social_logo/twitter.png"
                      alt="Twitter"
                      title="Twitter"
                    />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/abhay-jagtap-86a36167/"
                    target="_blank"
                  >
                    <img
                      src="images/social_logo/linkedin.png"
                      alt="Linkedin"
                      title="Linkedin"
                    />
                  </Link>
                  <Link to="https://dribbble.com/abijagtap" target="_blank">
                    <img
                      src="images/social_logo/dribbble.png"
                      alt="Dribbble"
                      title="Dribbble"
                    />
                  </Link>
                  <Link
                    to="https://www.behance.net/jagtapabha5d2c"
                    target="_blank"
                  >
                    <img
                      src="images/social_logo/behance.jpg"
                      alt="Behance"
                      title="Behance"
                    />
                  </Link>
                  <Link
                    to="https://in.pinterest.com/jagtapabhay82/"
                    target="_blank"
                  >
                    <img
                      src="images/social_logo/pinterest.png"
                      alt="Pinterest"
                      title="Pinterest"
                    />
                  </Link>
                  <Link to="https://github.com/abijagtap" target="_blank">
                    <img
                      src="images/social_logo/github.jpg"
                      alt="Github"
                      title="Github"
                    />
                  </Link>
                  <Link
                    to="https://stackoverflow.com/users/9304751/abhay-jagtap"
                    target="_blank"
                  >
                    <img
                      src="images/social_logo/stackoverflow.png"
                      alt="Stack Overflow"
                      title="Stack Overflow"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-3 col-xs-12">
                <div className="aj-footer-address">
                  <h4 className="">Contact</h4>
                  <div className="aj-footer-contact">
                    <p>
                      <b>
                        <span className="fa fa-map-marker"></span> Address :{" "}
                      </b>{" "}
                      Bazar Peth, Abhona 423502
                    </p>
                    <p>
                      <b>
                        <span className="fa fa-envelope"></span> Email :{" "}
                      </b>{" "}
                      jagtapabhay82@gmail.com
                    </p>
                    <p>
                      <b>
                        <span className="fa fa-phone"></span> Phone :{" "}
                      </b>{" "}
                      +91 827 558 7326, +91 776 906 0068
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aj-copyright">
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-md-6 col-xs-12">
                <p>Copyright &copy; {currentDate} | All rights reserved</p>
              </div>
              <div className="col-md-6 col-xs-12">
                <p>
                  Designed &amp; Developed by <Link to="/">Akshay Jagtap</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

Footer.propTypes = {
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  portfolioText: PropTypes.string,
  contactText: PropTypes.string,
};

Footer.defaultProps = {
  homeText: "Home",
  aboutText: "About",
  portfolioText: "Portfolio",
  contactText: "Contact",
};