import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Portfolio(props) {
  document.title = "Akshay Jagtap - Portfolio";
  return (
    <section id="aj-portfolio-section">
      <div className="container">
        <h2 className="aj-section-heading">{props.portfolioTitle}</h2>
        <h5 className="text-center mb-4">
          Discover the websites listed below that I've contributed to.
        </h5>
        <div className="row my-2">
          <div className="col-12">
            <h3 className="m-4 aj-section-subheading">PHP (CI)</h3>
          </div>
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
                src="images/company_logo/ankurlogo.jpg"
                e
                className="card-img-top"
                alt="Ankur Pratishthan"
              />
              <div className="card-body">
                <h5 className="card-title">Ankur Pratishthan</h5>
                <p className="card-text">PHP, HTML, CSS, JS, MySQL</p>
                <Link
                  to="https://ankurpratishthan.org/"
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
                src="images/company_logo/ldlogo.jpeg"
                e
                className="card-img-top"
                alt="LD Awards"
              />
              <div className="card-body">
                <h5 className="card-title">LD Awards</h5>
                <p className="card-text">PHP, HTML, CSS, JS, MySQL</p>
                <Link
                  to="https://www.awards.leadersdimension.org/"
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
                src="images/company_logo/pablepiclogo.jpg"
                e
                className="card-img-top"
                alt="Pablepic"
              />
              <div className="card-body">
                <h5 className="card-title">Pablepic</h5>
                <p className="card-text">PHP, HTML, CSS, JS, MySQL</p>
                <Link
                  to="https://www.pablepic.com/"
                  target="_blank"
                  className="btn btn btn-default aj-btn-default"
                  rel="noreferrer"
                >
                  {props.visitBtnText}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-12">
            <h3 className="m-4 aj-section-subheading">Shopify</h3>
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
          <div className="col-lg-3 col-md-3 col-sm-6 col-6">
            <div className="card my-3">
              <img
                src="images/company_logo/braverylogo.jpg"
                className="card-img-top"
                alt="Bravery"
              />
              <div className="card-body">
                <h5 className="card-title">Bravery</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://bravery.co.uk/?preview_theme_id=132411326652"
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
                src="images/company_logo/tdbslogo.png"
                className="card-img-top"
                alt="TDBS"
              />
              <div className="card-body">
                <h5 className="card-title">TDBS</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://thedustpanandbrushstore.co.uk/?preview_theme_id=137468903655"
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
                src="images/company_logo/gossamerlogo.jpg"
                className="card-img-top"
                alt="Gossamer"
              />
              <div className="card-body">
                <h5 className="card-title">Gossamer</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://shop.gossamer.co/?preview_theme_id=146289656110"
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
                src="images/company_logo/etowinelogo.jpg"
                className="card-img-top"
                alt="Eto Wine"
              />
              <div className="card-body">
                <h5 className="card-title">Eto Wine</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://www.etowine.com/"
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
                src="images/company_logo/forggesportslogo.png"
                className="card-img-top"
                alt="Forggesports"
              />
              <div className="card-body">
                <h5 className="card-title">Forggesports</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://forggeesports.com/"
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
                src="images/company_logo/mightyfungilogo.jpeg"
                className="card-img-top"
                alt="Mighty Fungi"
              />
              <div className="card-body">
                <h5 className="card-title">Mighty Fungi</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://www.mightyfungi.com/"
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
                src="images/company_logo/lexxolalogo.jpeg"
                className="card-img-top"
                alt="Lexxola"
              />
              <div className="card-body">
                <h5 className="card-title">Lexxola</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://lexxola.com/"
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
                src="images/company_logo/lyralogo.jpg"
                className="card-img-top"
                alt="Lyra Swim"
              />
              <div className="card-body">
                <h5 className="card-title">Lyra Swim</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://lyraswimwear.com/"
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
                src="images/company_logo/skiclublogo.jpg"
                className="card-img-top"
                alt="Shorditch Ski Club"
              />
              <div className="card-body">
                <h5 className="card-title">Shorditch Ski Club</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://www.shoreditchskiclub.com/"
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
                src="images/company_logo/yniqlogo.jpg"
                className="card-img-top"
                alt="YNIQ"
              />
              <div className="card-body">
                <h5 className="card-title">YNIQ</h5>
                <p className="card-text">Shopify, HTML, CSS, JS</p>
                <Link
                  to="https://yniq.se/"
                  target="_blank"
                  className="btn btn btn-default aj-btn-default"
                  rel="noreferrer"
                >
                  {props.visitBtnText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  portfolioTitle: PropTypes.string,
};

Portfolio.defaultProps = {
  portfolioTitle: "Portfolio",
};
