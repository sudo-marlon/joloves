import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-rose-500" />
            <span className="text-gray-600">Jolo & Love</span>
            <Heart className="h-4 w-4 text-rose-500" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            We can't wait to celebrate with you!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;