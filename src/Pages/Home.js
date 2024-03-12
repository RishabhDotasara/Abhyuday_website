import React from "react";
import { MdRocket } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import PageTransit from "../components/PageTransit";

export default function Home() {
  document.title = "Abhyuday | Home";
  const [currentPage, setCurrentPage] = useState("Home");
  const textVariants = {
    leftComing: {
      initial: { translateX: -50 },
      animate: { translateX: 0 },
    },
    rightComing: {
      initial: { translateX: 50 },
      animate: { translateX: 0 },
    },
    bottomComing: {
      initial: { translateY: 50 },
      animate: { translateY: 0 },
    },
  };

  return (
    <>
      <PageTransit currentPage={currentPage} />
      <section className="landing_section">
        <div className="left_part">
          <motion.span
            className="club_name"
            initial={textVariants.leftComing.initial}
            animate={textVariants.leftComing.animate}
            transition={{ duration: 2 }}
          >
            ABHY
          </motion.span>
          <motion.span
            className="club_rocketry"
            initial={textVariants.leftComing.initial}
            animate={textVariants.leftComing.animate}
            transition={{ duration: 2 }}
          >
            ROCKETRY
          </motion.span>
          <motion.div className="rocket">
            <MdRocket />
            {/* <div className="flame"></div> */}
          </motion.div>
        </div>
        <div className="right_part">
          <motion.span
            className="club_name"
            initial={textVariants.rightComing.initial}
            animate={textVariants.rightComing.animate}
            transition={{ duration: 2 }}
          >
            UDAY
          </motion.span>
          <motion.span
            className="club_rocketry"
            initial={textVariants.rightComing.initial}
            animate={textVariants.rightComing.animate}
            transition={{ duration: 2 }}
          >
            CLUB
          </motion.span>
          <motion.div
            className="iitm_text"
            initial={textVariants.bottomComing.initial}
            animate={textVariants.bottomComing.animate}
            transition={{ duration: 2 }}
          >
            IIT-MADRAS
          </motion.div>
        </div>
      </section>
    </>
  );
}
