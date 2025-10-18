'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Event {
  id: string;
  date: string;
  shortDate: string;
  title: string;
  time: string;
  location: string;
  address: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: '1',
    date: 'Tue, 09 Jan',
    shortDate: '09 Jan 2035',
    title: 'Mindfulness & Mental Wellbeing Workshop',
    time: '11:30 am',
    location: 'Mountain View',
    address: '500 Terry Francine Street, San Francisco',
    description: 'Join us for an interactive session on mindfulness practices and techniques to enhance your mental wellbeing and reduce stress in daily life.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80'
  },
  {
    id: '2',
    date: 'Tue, 06 Feb',
    shortDate: '06 Feb 2035',
    title: 'Parent Coaching: Raising Resilient Children',
    time: '10:00 am',
    location: 'Flatiron District',
    address: '235 W 23rd St, New York',
    description: 'Discover effective strategies for nurturing emotional resilience in children and building stronger parent-child connections through evidence-based approaches.',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80'
  },
  {
    id: '3',
    date: 'Sat, 17 Mar',
    shortDate: '17 Mar 2035',
    title: 'Workplace Wellbeing Seminar',
    time: '5:00 pm',
    location: 'West Village',
    address: '235 W 23rd St, New York',
    description: 'An engaging seminar for HR professionals and team leaders on creating psychologically safe workplaces and preventing burnout in organizations.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
  }
];

export function EventsSection() {
  const [rsvpStatus, setRsvpStatus] = useState<{ [key: string]: 'idle' | 'loading' | 'success' }>({});

  const handleRSVP = async (eventId: string, eventTitle: string) => {
    setRsvpStatus(prev => ({ ...prev, [eventId]: 'loading' }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setRsvpStatus(prev => ({ ...prev, [eventId]: 'success' }));
    
    // Reset after 3 seconds
    setTimeout(() => {
      setRsvpStatus(prev => ({ ...prev, [eventId]: 'idle' }));
    }, 3000);
    
    console.log(`RSVP submitted for: ${eventTitle}`);
  };
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs">Upcoming Events</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Save Your Spot
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Join our workshops, seminars, and community events focused on mental health and wellbeing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event, index) => {
            const status = rsvpStatus[event.id] || 'idle';
            
            return (
              <Card 
                key={event.id} 
                className="border-gray-200 hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900 hover:bg-white backdrop-blur text-xs">
                      {event.date}
                    </Badge>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-600 transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{event.shortDate}</div>
                          <div className="text-gray-600">{event.time}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-gray-900">{event.location}</div>
                          <div className="text-gray-600">{event.address}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                      {event.description}
                    </p>

                    <Button 
                      onClick={() => handleRSVP(event.id, event.title)}
                      disabled={status === 'loading' || status === 'success'}
                      className={`w-full transition-all ${
                        status === 'success' 
                          ? 'bg-green-600 hover:bg-green-600' 
                          : 'bg-emerald-600 hover:bg-emerald-700'
                      } group-hover:shadow-lg`}
                      size="lg"
                    >
                      {status === 'loading' && (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      )}
                      {status === 'success' && (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2" />
                          RSVP Confirmed!
                        </>
                      )}
                      {status === 'idle' && 'RSVP Now'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600">
            Can&apos;t attend in person? Most events offer virtual participation options.
          </p>
        </div>
      </div>
    </section>
  );
}
