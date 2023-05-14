/* eslint-disable react/jsx-no-undef */
import React from 'react';
import About from "./Componant/form/About";
import Home from "./Componant/form/Home";
import Contact from './Componant/form/Contact';
import NavBar from "./Componant/navigation/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
