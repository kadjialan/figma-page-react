import React from 'react';
import Hero3 from '../../components/AboutHeroText/AboutHeroText';
import Navbar from '../../components/Navbar/Navbar';
import StickyBar from '../../components/StickyBar/StickyBar';
import Footer from '../Home/Footer/Footer';
import Address from './Address/Address';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <StickyBar />
      <Hero3 title="Contact Us" text="Contact us" />
      <Address />
      <Footer />
    </div>
  );
}
