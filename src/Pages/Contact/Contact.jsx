import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/Searchnav/Searchnav';
import Footer from '../Home/Footer/Footer';
import Address from './Address/Address';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Hero3>Contact Us</Hero3>
      <Address />
      <Footer />
    </div>
  );
}
