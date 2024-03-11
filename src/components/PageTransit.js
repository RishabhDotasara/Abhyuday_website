import React from "react";
import { motion } from "framer-motion";

export default function PageTransit(props) {
  const { currentPage } = props;
  return (
    <div>
      <motion.div
        className="page_transit"
        initial={{ opacity: 0,translateY:0}}
        animate={{
          opacity: [
            1,1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.7, 0.5, 0.2, 0.1, 0, 0, 0, 0, 0,
          ],
          translateY: [-200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,500,1000],
        }}
        transition={{
          type: "tween",
          ease: "easeIn",
          duration: 1,
          times: [
            0, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7,
            0.75, 0.8, 0.85, 0.9, 0.95, 1,
          ],
        }}
      >
        
        <div className="loader"></div>
        <h1>{currentPage}</h1>
        <div className="loader"></div>
      </motion.div>
    </div>
  );
}
