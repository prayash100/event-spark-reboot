
import React from 'react';
import { CalendarDays, Clock, LayoutDashboard, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto feature-section">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Offer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureTile 
          title="Easy Bookings" 
          description="Manage guests, venues, and services with a click."
          icon={<CalendarDays className="h-8 w-8 text-primary" />}
          imagePath="/public/lovable-uploads/04b16eb9-a8bd-4a7f-ac9c-55d6ac40a1e9.png"
        />
        
        <FeatureTile 
          title="Real-time Updates" 
          description="Get instant notifications and live guest tracking."
          icon={<Clock className="h-8 w-8 text-primary" />} 
          imagePath="/public/lovable-uploads/983259fb-c36b-4fd3-b4d8-cfbaf269869b.png"
        />
        
        <FeatureTile 
          title="Organiser Dashboard" 
          description="Create and manage your own events effortlessly."
          icon={<LayoutDashboard className="h-8 w-8 text-primary" />}
          imagePath="/public/lovable-uploads/dc1cb3b7-0a7e-4d77-bad5-8fbd285afaa7.png"
        />
        
        <FeatureTile 
          title="Team Management" 
          description="Collaborate with your team in real time."
          icon={<Users className="h-8 w-8 text-primary" />}
          imagePath="/public/lovable-uploads/dc1cb3b7-0a7e-4d77-bad5-8fbd285afaa7.png"
        />
      </div>
      
      <div className="text-center mt-12">
        <Button className="bg-muted hover:bg-muted/80 text-foreground font-medium">
          See More Features
        </Button>
      </div>
    </section>
  );
};

interface FeatureTileProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imagePath: string;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ title, description, icon, imagePath }) => {
  return (
    <div className="tile-card rounded-lg">
      <div className="tile-image-container">
        <img src={imagePath} alt={title} className="tile-image" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      <div className="tile-content">
        <div className="bg-muted p-3 rounded-full w-fit mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Features;
