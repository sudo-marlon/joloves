import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  
  return (
    <nav className={`nav-scroll fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                {/* Placeholder for logo */}
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-rose-500" />
                </div>
                <span className="ml-3 text-xl font-serif text-gray-900">Jolo & Love</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`${
                  location.pathname === '/'
                    ? 'text-rose-500 border-b-2 border-rose-500'
                    : 'text-gray-600 hover:text-rose-500'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/our-story"
                className={`${
                  location.pathname === '/our-story'
                    ? 'text-rose-500 border-b-2 border-rose-500'
                    : 'text-gray-600 hover:text-rose-500'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                Our Story
              </Link>
              <Link
                to="/rsvp"
                className={`${
                  location.pathname === '/rsvp'
                    ? 'bg-rose-500 bg-opacity-90 backdrop-blur-sm text-white'
                    : 'glass-effect text-rose-500 hover:bg-rose-50'
                } px-4 py-2 rounded-full text-sm font-medium transition-colors`}
              >
                RSVP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
