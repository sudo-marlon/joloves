import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const timelineEvents = [
  {
    date: 'May 2020',
    title: 'First Meeting',
    description: 'Jolo was born.',
    image: 'https://images.unsplash.com/photo-1442544213729-6a15f1611937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    date: 'August 2020',
    title: 'First Date',
    description: 'A romantic dinner followed by a walk in the park.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    date: 'December 2022',
    title: 'The Proposal',
    description: 'A surprise proposal during our vacation in Paris.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    date: 'December 2022',
    title: 'The Proposal',
    description: 'A surprise proposal during our vacation in Paris.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    date: 'December 2022',
    title: 'The Proposal',
    description: 'A surprise proposal during our vacation in Paris.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    date: 'December 2022',
    title: 'The Proposal',
    description: 'A surprise proposal during our vacation in Paris.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    date: 'December 2022',
    title: 'The Proposal',
    description: 'A surprise proposal during our vacation in Paris.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
];

const OurStory = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-16">Our Story</h1>
        
        <div className="space-y-24">
          {timelineEvents.map((event, index) => (
            <Parallax
              key={index}
              translateY={[20, -20]}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <span className="text-rose-500 font-medium">{event.date}</span>
                  <h3 className="text-2xl font-serif mt-2 mb-4">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;