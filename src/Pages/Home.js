import React from 'react'
import {BsRocket} from 'react-icons/bs'

export default function Home() {
  document.title = "Abhyuday | Home"
  return (
    <>
        <section className='landing_section'>
            <div className="left_part">
              <span className='club_name'>ABHY</span>
              <span className='club_rocketry'>ROCKETRY</span>
              <div className="rocket">
                <BsRocket/>
              </div>
            </div>
            <div className="right_part">
              <span className='club_name'>UDAY</span>
              <span className='club_rocketry'>CLUB</span>
            <div className="iitm_text">IIT-MADRAS</div>
            </div>
        </section>
    </>
  )
}
