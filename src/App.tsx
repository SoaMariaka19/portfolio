import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';


const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </div>
  );
};

export default App;
