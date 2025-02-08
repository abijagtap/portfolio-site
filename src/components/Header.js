import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* <img src="/images/logo.png" alt="logo" /> */}
            <h2 className="logo">
              Akshay <span>Jagtap</span>
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {props.homeText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  {props.portfolioText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {props.contactText}
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Link 1</a>
                    <a className="dropdown-item" href="#">Link 2</a>
                    <a className="dropdown-item" href="#">Link 3</a>
                    </div> 
                </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
}

Header.propTypes = {
  homeText: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  portfolioText: PropTypes.string,
  contactText: PropTypes.string,
};

Header.defaultProps = {
  homeText: "Home",
  aboutText: "About",
  portfolioText: "Portfolio",
  contactText: "Contact",
};