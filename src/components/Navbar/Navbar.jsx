import React from "react";
import "./navbar.css";
import discord from "../../assests/social-logo.png"
import t from "../../assests/twiter.png"
import o from "../../assests/opensea.png"


const Navbar = () => {
  return (
    <div className="container-fluid navBar">
      <div className="row">
        <div className=" col-md-12 ">
          <nav className=" navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <a href="#Home" className="navbar-brand a" to="/">
                <h2 className="logo">Logo here</h2>
              </a>
              <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item bg-link">
                    <a href="#Home" className={`nav-link navLink `} to="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item bg-link">
                    <a href="#About" className={`nav-link navLink `}>
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item bg-link">
                    <a href="#Roadmap" className={`nav-link navLink `}>
                      ROADMAP
                    </a>
                  </li>
                  <li className="nav-item bg-link">
                    <a href="#Team" className={`nav-link navLink `}>
                      TEAM
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link  `}>
                      <img  className="bg-social" src={discord} alt="No Pic" />
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link  `}>
                      <img  className="bg-social" src={t} alt="No Pic" />
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link  `}>
                      <img  className="bg-social" src={o} alt="No Pic" />
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="#Buynft" className={`nav-link connect `}>
                      Connect Wallet
                    
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
