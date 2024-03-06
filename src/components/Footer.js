import React from 'react'
import { FaFacebookF,FaInstagram,FaLinkedin,FaDiscord} from "react-icons/fa";

export default function Footer() {
  return (
    
        <div className='wrapper_footer'>
            <div className='top_part'>
                <div className='left_part'>
                    <div className='logo'>
                        <img src="./Images/abhyuday_name_logo.png" alt="Abhyuday-logo"/>
                    </div>
                    <a href="#">Download Brochure</a>
                </div>
                
                <div className='right_part'>
                        <span>Let's Connect!</span>
                    <div className='social_media'>
                        <a href="#"><FaFacebookF/></a>
                        <a href="#"><FaLinkedin/></a>
                        <a href="#"><FaDiscord/></a>
                        <a href="#"><FaInstagram/></a>
                    </div>
                </div>
            </div>

            <div className='bottom_part'>
                <p>© 2021 Team Abhyuday IIT Madras. All Rights Reserved.</p>
                <p>For any issues related to the website, contact Rishabh +91 9256548660</p>
            </div>
        </div>
    
  )
}
