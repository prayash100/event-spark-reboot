
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="hero-gradient py-20 md:py-32 text-center text-white relative">
      <div className="absolute inset-0 bg-[url('/public/lovable-uploads/87eeb328-86c1-4978-9a0b-5ee5e529cef6.png')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-text">
          Plan. Manage. Celebrate.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90 hero-subtext">
          Your all-in-one event management solution for private & public events.
        </p>
        <Link to="/signup">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 hero-button">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
