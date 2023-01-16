import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/Searchnav/Searchnav';
import Footer from '../Home/Footer/Footer';
import Picture from './Pictures/Picture';

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Hero3>Gallery</Hero3>
      <Picture />
      <Footer />
    </div>
  );
}
