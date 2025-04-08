
import React from 'react';
import FeatureCard from './FeatureCard';
import { CalendarDays, Clock, LayoutDashboard } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto feature-section">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          title="Easy Bookings" 
          description="Manage guests, venues, and services with a click."
          icon={CalendarDays}
        />
        
        <FeatureCard 
          title="Real-time Updates" 
          description="Get instant notifications and live guest tracking."
          icon={Clock}
        />
        
        <FeatureCard 
          title="Organiser Dashboard" 
          description="Create and manage your own events effortlessly."
          icon={LayoutDashboard}
        />
      </div>
    </section>
  );
};

export default Features;
