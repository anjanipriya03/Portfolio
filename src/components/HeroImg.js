import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/pexels-bich-tran-669996.jpg"
import ProfileImg from "../assets/passportpic.jpeg"; 
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
     <img className="into-img"
     src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>Hi, This is Anjanipriya</p>
        <img src={ProfileImg} alt="profile" className="profile-img" />
        <h1>I'm a Frontend Developer</h1>
        <div>
            <Link to="/project"
            className="btn">Projects
              </Link>
              <Link to="/about"
            className="btn btn-light">About
              </Link>
        </div>
    </div>
  </div>
}

export default HeroImg