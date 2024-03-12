import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Js to keep navbar in track
  const links = ["Home", "Work", "Team", "Sponsors", "Contact"];
  const hrefs = ["/","/work","/team","/sponsors","/contact"];
  // const linkVariants = {
  //   intitial: {translateY: }
  // }

  return (
    <motion.div
      className="nav"
      initial={{ translateY: -100 }}
      animate={{ translateY: [-100, -100, 0, 0] }}
      transition={{ duration: 4, type: "tween", times: [0, 0.25, 0.5, 1] }}
    >
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
            {links.map((pageName,index) => {
              
              return (
                <li className="link">
                  <Link
                    to={hrefs[index]}
                    onClick={() => {
                      setCurrentPage(pageName);
                    }}
                    className={currentPage === pageName ? "active" : ""}
                  >
                    {pageName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
