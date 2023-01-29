import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Aboutcontent from '../Components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT ME" text="I am a Front-End Web Developer." />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default About