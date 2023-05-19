import React from 'react'
import Image3 from "../Images/Image3.jpeg";

export default function About() {
  return (
    <div className='container-fuid'>
        <div className="">
          <img className='about-home w-100' src={Image3} alt="" />
        </div>
        <div className="container">
          <h1>About Us</h1>
        </div>
    </div>
  )
}
