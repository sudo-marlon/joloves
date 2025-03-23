import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
  // Placeholder for carousel images - to be replaced with actual images
  const carouselImages = [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3',
    'https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1585020430145-2a6b034f7729?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Wedding banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        </div>
        
        <Parallax translateY={[-20, 70]}>
          <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4">Jolo & Love</h1>
            <p className="text-xl md:text-2xl mb-8">Are getting married!</p>
            <Link
              to="/rsvp"
              className="glass-effect text-white px-8 py-3 rounded-full hover:bg-white hover:bg-opacity-30 transition-colors text-lg border border-white border-opacity-20"
            >
              RSVP Now
            </Link>
          </div>
        </Parallax>
      </div>

      {/* Image Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">Our Moments</h2>
          <div className="relative">
            {/* Placeholder for carousel - you can add your images here */}
            <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-none w-80 h-64 snap-center rounded-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-12">Join Us in Celebration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Calendar className="h-8 w-8 text-rose-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">The Date</h3>
                <p className="text-gray-600">May 15, 2026</p>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-rose-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">The Ruins</h3>
                <p className="text-gray-600">Bacolod,</p>
                <p className="text-gray-600">Negros Occidental,</p>
                <p className="text-gray-600">Philippines</p>
              </div>
              
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-rose-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">The Time</h3>
                <p className="text-gray-600">TBA</p>
                <p className="text-gray-600">TBA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;