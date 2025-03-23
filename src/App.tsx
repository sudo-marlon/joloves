import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import RSVP from './pages/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/rsvp" element={<RSVP />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App