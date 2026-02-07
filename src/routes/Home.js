import React from 'react'
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import AboutContent from '../components/AboutContent';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default Home