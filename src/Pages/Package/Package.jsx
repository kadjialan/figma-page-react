import React from 'react';
import Hero3 from '../../components/AboutHeroText/AboutHeroText';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/StickyBar/StickyBar';
import Visits from './Visits/Visits';

export default function Package() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Hero3 title="Tour Package" text="Tour Package" />
      <Visits />
    </div>
  );
}
