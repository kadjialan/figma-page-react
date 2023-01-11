import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Searchnav from '../../components/Searchnav/Searchnav';
import Bg from './Bg';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Searchnav />
      <Bg />
    </div>
  );
}
