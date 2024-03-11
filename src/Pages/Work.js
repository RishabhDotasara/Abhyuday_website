//This is the our work page.

import React, { useState } from "react";
import {motion} from "framer-motion"
import PageTransit from "../components/PageTransit";

export default function Work() {
  document.title = "Abhyuday | Work";
  const [currentPage, setCurrentPage] = useState("Work");
  return (
    <div>
      <PageTransit currentPage={currentPage}/>
      <h1>This is the our work page.</h1>
    </div>
  );
}
