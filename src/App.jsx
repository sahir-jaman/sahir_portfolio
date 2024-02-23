// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header/Header";
import backgroundImage from "./assets/images/newBackground.jpg"; 
import HomeHero from "./components/heros/HomeHero";
import Achievements from "./components/Achievements"; 
import Experience from "./components/Experience";
import Projects from './components/Projects'; 
import ContactMe from "./components/ContactMe"; 

function App() {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <Router>
      <div style={containerStyle}>
        <div className="">
          <Header />
        </div>
        <div className="md:ml-[172px] ml-[20px]">
          <Routes>
            <Route path="/" element={<HomeHero/>} />
            <Route path="/achievements" element={<Achievements/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contactme" element={<ContactMe/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
