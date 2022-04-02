import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer-container">
      <div className="row">
        <div className="col-md-4 text-center">
          <h2>About Us</h2>
          <p>
            PUCPC is the most primitive and extensive club of our University. We
            work together to explore every field of Computer Science. Join us to
            know more.
          </p>
        </div>
        <div className="col-md-4 site-nav text-center">
          <h2>Site Navigation</h2>
          <ul className="site-navigation">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4  text-center">
          <h2>Stay Connected</h2>

          <a
            href="https://www.facebook.com/CPCPrimeUniversity/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faFacebook}
              className="p-3 fs-1"
            />
          </a>

          <a href="/" target="_blank">
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faTwitter}
              className="p-3 fs-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/prime-university-computer-programming-club-7539a4229/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faLinkedin}
              className="p-3 fs-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
