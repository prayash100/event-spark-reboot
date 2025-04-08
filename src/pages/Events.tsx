
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Filter, Search } from 'lucide-react';

const Events: React.FC = () => {
  // This is a placeholder for future event data
  const events = [
    {
      id: 1,
      title: 'Tech Conference 2023',
      date: 'June 15, 2023',
      location: 'San Francisco, CA',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Summer Music Festival',
      date: 'July 10, 2023',
      location: 'Austin, TX',
      category: 'Music'
    },
    {
      id: 3,
      title: 'Business Leadership Summit',
      date: 'August 5, 2023',
      location: 'New York, NY',
      category: 'Business'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-muted py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6">Discover Events</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-card text-foreground"
              />
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Filters</span>
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Date</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="tile-card rounded-lg">
              <div className="h-48 bg-muted"></div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-sm mb-2">{event.category}</span>
                <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                <div className="flex items-center text-muted-foreground mb-1">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <p className="text-muted-foreground mb-4">{event.location}</p>
                <Button className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Events;
