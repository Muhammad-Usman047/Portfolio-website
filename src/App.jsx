import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './Components/navbar';
import './App.css';

import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <>
      <Navbar />
      <div className={`container ${theme}`}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='About' element={<About />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
