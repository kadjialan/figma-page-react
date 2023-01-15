import React from 'react';
import Hero3 from '../../components/Hero3/Hero3';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/Searchnav/Searchnav';
import Visits from './Visits/Visits';

export default function Package() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Hero3>Tour Package</Hero3>
      <Visits />
    </div>
  );
}
