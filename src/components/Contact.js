import React from "react";
import PropTypes from "prop-types";

export default function Contact(props) {
  document.title = "Akshay Jagtap - Contact";
  return (
    <section id="aj-contact-section">
      <div className="container">
        <h2 className="aj-section-heading">{props.contactTitle}</h2>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-12 my-3">
            <div className="aj-cp-address">
              <h4 className="my-4">Get in touch</h4>
              <div className="aj-cp-contact">
                <p>
                  <b>
                    <span className="fa fa-map-marker"></span> Address :{" "}
                  </b>{" "}
                  Bazar Peth, Abhona, Nashik, India 423502
                </p>
                <p>
                  <b>
                    <span className="fa fa-envelope"></span> Email(s) :{" "}
                  </b>{" "}
                  jagtapabhay82@gmail.com, abhi61390@gmail.com
                </p>
                <p>
                  <b>
                    <span className="fa fa-phone"></span> Contact Number(s) :{" "}
                  </b>{" "}
                  +91 827 558 7326, +91 776 906 0068
                </p>
                <p className="mt-4 text-left">
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
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-12 my-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14950.701646319576!2d73.90604801803397!3d20.478520666318353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bde7236ebce8f83%3A0x2453243986d33461!2sAbhona%2C%20Maharashtra%20423502!5e0!3m2!1sen!2sin!4v1702823905939!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="myFrame"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  contactTitle: PropTypes.string,
};

Contact.defaultProps = {
  contactTitle: "Contact",
};
