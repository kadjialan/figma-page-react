import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../Home/Footer/Footer';
import Hero2 from './Hero2/Hero2';
import Safarri from './Safarri/Safarri';

export default function About() {
  return (
    <div>
      <Navbar />
      <Hero2 />
      <Safarri />
      <Footer />
    </div>
  );
}
