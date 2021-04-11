import React from "react";
import {Link} from "react-router-dom"
import "../../static/style/layout/navbar.css";
import printroxLogo from "../../static/img/layout/logo.png";
const Navbar = () => {
  return (
    <div className="navbar-sec">
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">
        {/* eslint-disable-next-line */}
          <Link to = "/">
          <a class="navbar-brand" href="/">
            <img className="brand-logo" src={printroxLogo} alt="Printrox" />
          </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Togglenavigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* eslint-disable-next-line */}
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ">
              {/* eslint-disable-next-line */}
              <a class="nav-link active" aria-current="page" href="/">
                Printrox
              {/* eslint-disable-next-line */}
              </a>
              {/* eslint-disable-next-line */}
              <a class="nav-link" href="#">
                How it works
              </a>
              {/* eslint-disable-next-line */}
              <a class="nav-link" href="#">
                Shops and offers
              {/* eslint-disable-next-line */}
              </a>
              {/* eslint-disable-next-line */}
              <Link to = "/signin">
              <a class="nav-link" href="/signin">
                Sign up/Sign in
              </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
