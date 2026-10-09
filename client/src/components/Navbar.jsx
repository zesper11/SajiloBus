import React from "react";
import assets from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#" aria-label="SajiloBus home">
          <img src={assets.PngLogoWithText} className="brand-logo" alt="SajiloBus" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#features">About Us</a>
          </li>
          <li>
            <a href="#routeFinder">How it works</a>
          </li>
          <li>
            <a href="#routeFinder">Plans</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
        <a className="primary-btn" href="#routeFinder">
          Find a Route <ArrowRight />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
