import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import Sponsors from "./Pages/Sponsors";
import Team from "./Pages/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import {motion} from "framer-motion"

function App() {

  //state for the go to top button
  const [active,setActive] = useState(false)
  //checking the state of the go to top button using event listeners.
  window.addEventListener('scroll',()=>{
    if (window.scrollY > 400)
    {
      setActive(true);
    }
    else
    {
      setActive(false);
    }
  })
  //on click function for go to top button
  function GoToTop()
  {
    window.scroll({
      top:0,
      left:0,
      behaivour:'smooth',
    })
  }

  // Creating the router, latest method in react to add router
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar /><Home/><Footer/></>
    },
    {
      path:'/work',
      element:<><Navbar /><Work/><Footer/></>
    },
    {
      path:'/team',
      element:<><Navbar/><Team/><Footer/></>
    },
    {
      path:'/contact',
      element:<><Navbar/><Contact/><Footer/></>
    },
    {
      path:'/sponsors',
      element:<><Navbar/><Sponsors/><Footer/></>
    }

  ])
  return (
    <>
        {/* NAVBAR */}

      
      
      {/* Routing */}
      <RouterProvider router={router}/>
      <div className="go_to_top" style={{opacity:active ? 1:0}} onClick={GoToTop}><FaArrowUp/></div>
    </>
  );
}

export default App;
