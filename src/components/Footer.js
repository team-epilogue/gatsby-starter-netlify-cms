import * as React from "react";
import { Link } from "gatsby";

import Site from "../utils/site.json";
import logo from "../img/logo.svg";
import github from "../img/github-icon.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = () => {
  const social_ids = Site.meta.social;
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} alt="Kaldi" style={{ width: "14em", height: "10em" }} />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/pages/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/pages/products">
                      Products
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a title="github" href={social_ids["github"].url + social_ids["github"].username}>
                <img src={github} alt="GitHub" style={{ width: "1em", height: "1em" }} />
              </a>
              <a title="twitter" href={social_ids["twitter"].url + social_ids["twitter"].username}>
                <img className="fas fa-lg" src={twitter} alt="Twitter" style={{ width: "1em", height: "1em" }} />
              </a>
              <a title="instagram" href={social_ids["instagram"].url + social_ids["instagram"].username}>
                <img src={instagram} alt="Instagram" style={{ width: "1em", height: "1em" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
