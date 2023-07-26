import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import StickyBar from '../../components/StickyBar/StickyBar';
import Cards from './Cards/Cards';
import Destinations from './Destinations/Destinations';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Subsearch from './Subsearch/Subsearch';
import Testimonials from './Testimonials/Testimonials';

export default function Home() {
  return (
    <div>
      <Navbar />
      <StickyBar />
      <Hero />
      <Subsearch />
      <Cards />
      <Destinations />
      <Testimonials />
      <Footer />
    </div>
  );
}
