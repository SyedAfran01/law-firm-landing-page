import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Home from './components/Home/Home.jsx';
import PracticeArea from './components/PracticeArea/PracticeArea.jsx';
import AboutUs from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Attorney from './components/Attorney/Attorney.jsx'; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.module.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attorney" element={<Attorney />} />
        <Route path="/practice-area" element={<PracticeArea />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
