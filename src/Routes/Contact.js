import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Heroimg2 from '../Components/Heroimg2';
import Form from '../Components/Form';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="HIRE ME" text="Feel free to send an e-mail"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact