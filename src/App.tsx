import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </>

  );
};

export default App;
