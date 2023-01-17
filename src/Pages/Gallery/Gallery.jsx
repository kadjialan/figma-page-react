import React from 'react';
import Hero3 from '../../components/AboutHeroText/AboutHeroText';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/StickyBar/StickyBar';
import Footer from '../Home/Footer/Footer';
import Picture from './Pictures/Picture';

export default function Gallery() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Hero3 title="Gallery" text="Gallery" />
      <Picture />
      <Footer />
    </div>
  );
}
