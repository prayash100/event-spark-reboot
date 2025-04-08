
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="py-4 px-6 flex items-center justify-between bg-background">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-foreground">EventEase</Link>
      </div>
      
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-foreground hover:text-primary font-medium">
          Home
        </Link>
        <Link to="/events" className="text-foreground hover:text-primary font-medium">
          Events
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
            Login
          </Button>
        </Link>
        <Link to="/signup">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Signup
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
