import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ErrorFallback from './Pages/ErrorFallback/ErrorFallback';

import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import Package from './Pages/Package/Package';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourpackage" element={<Package />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorFallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
