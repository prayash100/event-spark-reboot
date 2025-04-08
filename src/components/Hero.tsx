
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero-gradient py-20 md:py-32 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-text">
        Plan. Manage. Celebrate.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 hero-subtext">
        Your all-in-one event management solution for private & public events.
      </p>
      <Link to="/signup">
        <Button size="lg" className="bg-white text-primary hover:bg-secondary/80 hover:text-primary-foreground font-semibold text-lg px-8 hero-button">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
