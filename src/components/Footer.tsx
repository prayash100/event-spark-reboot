
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-gray-900">EventEase</Link>
          <p className="mt-2 text-gray-600">Making event management simple and stress-free.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
            <li><Link to="/events" className="text-gray-600 hover:text-primary">Events</Link></li>
            <li><Link to="/login" className="text-gray-600 hover:text-primary">Login</Link></li>
            <li><Link to="/signup" className="text-gray-600 hover:text-primary">Signup</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-600 hover:text-primary">Easy Bookings</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-primary">Real-time Updates</Link></li>
            <li><Link to="/" className="text-gray-600 hover:text-primary">Organiser Dashboard</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">support@eventease.com</li>
            <li className="text-gray-600">+1 (123) 456-7890</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200">
        <p className="text-gray-500 text-center">© {new Date().getFullYear()} EventEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
