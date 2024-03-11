import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("home");

  // Js to keep navbar in track 
  
  return (
    <div className="nav">
      <div className="wrapper_nav">
        <div className="left_part">
          {/* One that consists of the logo or the brand name */}
          <div className="logo">
            <img src="./Images/abhyuday_circle_logo.png" alt="Abhyuday-Logo" />
          </div>
        </div>
        <div className="right_part">
          {/* One that consists the whole navigation menu */}
          <ul className="links">
            <li className="link">
              <Link
                to="/"
                onClick={() => {
                  setCurrentPage("home");
                }}
                className={currentPage === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li className="link">
              <Link
                to="/work"
                onClick={() => {
                  setCurrentPage("work");
                }}
                className={currentPage === "work" ? "active" : ""}
              >
                Work
              </Link>
            </li>
            <li className="link">
              <Link
                to="/team"
                onClick={() => {
                  setCurrentPage("team");
                }}
                className={currentPage === "team" ? "active" : ""}
              >
                Team
              </Link>
            </li>
            <li className="link">
              <Link
                to="/sponsors"
                onClick={() => {
                  setCurrentPage("sponsors");
                }}
                className={currentPage === "sponsors" ? "active" : ""}
              >
                Sponsors
              </Link>
            </li>
            <li className="link">
              <Link
                to="/contact"
                onClick={() => {
                  setCurrentPage("contact");
                }}
                className={currentPage === "contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
