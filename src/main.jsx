import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import AboutMe from './pages/AboutMe/AboutMe.jsx';
import Skills from './pages/Skills/Skills.jsx';
import PExperience from './pages/PExperience/PEx.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="PExperience" element={<PExperience />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
