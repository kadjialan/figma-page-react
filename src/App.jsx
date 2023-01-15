import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Package from './Pages/Package/Package';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tourpackage" element={<Package />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
