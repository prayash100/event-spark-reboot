
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Link to="/" className="text-2xl font-bold text-foreground">EventEase</Link>
          <p className="mt-2 text-muted-foreground">Making event management simple and stress-free.</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
            <li><Link to="/login" className="text-muted-foreground hover:text-primary">Login</Link></li>
            <li><Link to="/signup" className="text-muted-foreground hover:text-primary">Signup</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-3">Features</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Easy Bookings</Link></li>
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Real-time Updates</Link></li>
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Organiser Dashboard</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground mb-3">Contact</h3>
          <ul className="space-y-2">
            <li className="text-muted-foreground">support@eventease.com</li>
            <li className="text-muted-foreground">+1 (123) 456-7890</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border">
        <p className="text-muted-foreground text-center">© {new Date().getFullYear()} EventEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
