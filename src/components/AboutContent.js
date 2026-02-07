import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <h1>ABOUT ME</h1>
        <p>I'm an Electrical Engineer but grown interest in Computer science and programming. Published   
a research paper in esteemed journals, demonstrating a strong foundation in analytical thinking 
and problem-solving. Proficient in Matlab, Java, Python and Front-end Development with a 
knack for system-level design and efficient implementation. </p>



        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
         </div>
  )
}

export default AboutContent