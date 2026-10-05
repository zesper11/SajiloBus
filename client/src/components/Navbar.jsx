import React from "react";
import assets from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="shrink-0">
      <nav className="flex w-full items-center justify-between">
        <img src={assets.PngLogoWithText} className="h-20" alt="SajiloBus" />
        <ul className="flex gap-4">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Signup</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
        </ul>
        <button className="primary-btn">
          Find a Route <ArrowRight />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
