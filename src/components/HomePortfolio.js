import React from "react";
import { Link } from "react-router-dom";

const HomePortfolio = (props) => {
  return (
    <section id="aj-portfolio-section">
      <div className="container">
        <h2 className="aj-section-heading">{props.portfolioTitle}</h2>
        <h5 className="text-center mb-4">
          Explore the websites below on which I have worked on
        </h5>
        <div className="row my-2">
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card my-3">
              <img
                src="images/company_logo/kpitlogo.jpg"
                e
                className="card-img-top"
                alt="KPIT Sparkle"
              />
              <div className="card-body">
                <h5 className="card-title">KPIT Sparkle</h5>
                <p className="card-text">PHP, HTML, CSS, JS, MySQL</p>
                <Link
                  to="https://sparkle.kpit.com/"
                  target="_blank"
                  className="btn btn btn-default aj-btn-default"
                  rel="noreferrer"
                >
                  {props.visitBtnText}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card my-3">
              <img
                src="images/company_logo/imllogo.jpg"
                e
                className="card-img-top"
                alt="IML"
              />
              <div className="card-body">
                <h5 className="card-title">Integrity Mind Labs</h5>
                <p className="card-text">PHP, HTML, CSS, JS, MySQL</p>
                <Link
                  to="https://www.integritymindlabs.com/"
                  target="_blank"
                  className="btn btn btn-default aj-btn-default"
                  rel="noreferrer"
                >
                  {props.visitBtnText}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card my-3">
              <img
                src="images/company_logo/ldlogo.jpeg"
                e
                className="card-img-top"
                alt="Leaders Dimension"
              />
              <div className="card-body">
                <h5 className="card-title">Leaders Dimension</h5>
                <p className="card-text">PHP, HTML, CSS, JS, MySQL</p>
                <Link
                  to="https://leadersdimension.com/"
                  target="_blank"
                  className="btn btn btn-default aj-btn-default"
                  rel="noreferrer"
                >
                  {props.visitBtnText}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card my-3">
              <img
                src="images/company_logo/jerseyhemplogo.jpeg"
                className="card-img-top"
                alt="Jersey Hemp"
              />
              <div className="card-body">
                <h5 className="card-title">Jersey Hemp</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://jersey-hemp.com/"
                  target="_blank"
                  className="btn btn btn-default aj-btn-default"
                  rel="noreferrer"
                >
                  {props.visitBtnText}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="read-more-btn-div text-center mt-3">
              <Link
                to="/portfolio"
                className="btn btn btn-default aj-btn-default"
              >
                {props.readMoreText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
