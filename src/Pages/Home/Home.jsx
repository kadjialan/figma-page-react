import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/Searchnav/Searchnav';
import Destination from './Destinations/Destination';
import Hero from './Hero/Hero';
import Subsearch from './Subsearch/Subsearch';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Hero />
      <Subsearch />
      <Destination />
    </div>
  );
}
