'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Heart,
  Users,
  Home,
  Briefcase,
  Award,
  GraduationCap,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Info
} from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  bgColor: string;
  iconColor: string;
}

const services: Service[] = [
  {
    id: '1',
    icon: <Heart className="h-6 w-6" />,
    title: 'Individual Counselling',
    shortDescription: 'A safe space to heal, grow, and be heard',
    fullDescription: 'One-on-one counselling in a safe, confidential, and non-judgmental space where individuals can explore their emotions and experiences with support and clarity. Whether you\'re navigating a difficult season or seeking clarity and inner strength, we support you in moving from overwhelm to resilience.',
    highlights: ['Anxiety & stress management', 'Depression support', 'Personal growth & clarity', 'Trauma-informed care'],
    bgColor: 'bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    id: '2',
    icon: <Users className="h-6 w-6" />,
    title: 'Parent Coaching',
    shortDescription: 'Raising confident, emotionally strong children',
    fullDescription: 'Parenting in today\'s world isn\'t easy. Through coaching and workshops, we create a space where you can ask questions, share concerns, and learn practical, gentle ways to support your child. From handling anxiety and behavior to building emotional resilience.',
    highlights: ['Managing child anxiety', 'Behavior management', 'Communication strategies', 'Building emotional resilience'],
    bgColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: '3',
    icon: <Home className="h-6 w-6" />,
    title: 'Family & Marriage Counselling',
    shortDescription: 'Rebuild connection and restore harmony',
    fullDescription: 'Family and marriage counselling offers a safe and supportive space to rebuild connection, improve communication, and address conflicts with sensitivity and care. The goal is to restore understanding, strengthen relationships, and create a healthier, more harmonious home environment.',
    highlights: ['Relationship challenges', 'Communication improvement', 'Conflict resolution', 'Pre-marital counselling'],
    bgColor: 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: '4',
    icon: <Briefcase className="h-6 w-6" />,
    title: 'Workplace Wellbeing',
    shortDescription: 'Promote emotional health and prevent burnout',
    fullDescription: 'Trainings focused on strengthening emotional health, reducing burnout, and promoting psychological safety among staff. Through interactive workshops and practical strategies, individuals and teams gain skills to navigate stress and enhance productivity.',
    highlights: ['Stress management', 'Emotional intelligence', 'Psychological safety', 'Team building'],
    bgColor: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    id: '5',
    icon: <Award className="h-6 w-6" />,
    title: 'Professional Supervision',
    shortDescription: 'Support for mental health practitioners',
    fullDescription: 'Supervision offers a supportive space for counsellors, psychologists, school wellbeing staff, and trainees to reflect, grow, and stay grounded in their work. Whether you\'re experienced or just starting out, supervision ensures you stay effective, supported, and aligned with best practices.',
    highlights: ['Ethical clarity & reflection', 'Managing emotional load', 'Strengthening skills', 'Professional development'],
    bgColor: 'bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: '6',
    icon: <GraduationCap className="h-6 w-6" />,
    title: 'School Wellbeing',
    shortDescription: 'Evidence-based frameworks for schools',
    fullDescription: 'Work with schools to strengthen their wellbeing ecosystems through evidence-based frameworks, staff capacity building, and student-focused interventions. Support can include policy development, SEL integration, counselling systems, and crisis response planning.',
    highlights: ['Policy development', 'SEL integration', 'Crisis response planning', 'Whole-school programs'],
    bgColor: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-teal-100',
    iconColor: 'text-teal-600',
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  const openDetailsDialog = (service: Service) => {
    setSelectedService(service);
    setDetailsDialogOpen(true);
  };

  const openBookingDialog = (service: Service) => {
    setSelectedService(service);
    setBookingDialogOpen(true);
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs">Services</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Tailored programs for individuals, families, schools, and organizations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`${service.bgColor} border border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group animate-fade-in-up overflow-hidden relative`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Decorative corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${service.iconColor} opacity-5 rounded-bl-full`}></div>
              
              <CardContent className="p-6 sm:p-7 relative">
                <div className="flex items-start justify-between mb-5">
                  <div className={`${service.iconColor} bg-white shadow-sm p-3.5 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openDetailsDialog(service)}
                    className="flex-1 text-gray-700 hover:bg-white/90 hover:text-gray-800 hover:scale-105 transition-all duration-300"
                  >
                    <Info className="h-4 w-4 mr-1" />
                    Learn More
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => openBookingDialog(service)}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="h-4 w-4 mr-1" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] animate-fade-in">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${selectedService.iconColor} ${selectedService.bgColor} p-3 rounded-xl shadow-sm animate-fade-in-up`}>
                    {selectedService.icon}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-gray-900 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    {selectedService.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-600 italic animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  {selectedService.shortDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 mt-4">
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <h4 className="font-semibold text-gray-900 mb-2">About This Service</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                  <h4 className="font-semibold text-gray-900 mb-3">What We Offer</h4>
                  <ul className="space-y-2">
                    {selectedService.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 animate-fade-in-up" style={{ animationDelay: `${300 + idx * 50}ms` }}>
                        <CheckCircle2 className={`h-5 w-5 ${selectedService.iconColor} flex-shrink-0 mt-0.5`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => {
                    setDetailsDialogOpen(false);
                    openBookingDialog(selectedService);
                  }}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 mt-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: '400ms' }}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book This Service
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-[500px] animate-fade-in">
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 animate-fade-in-up">
                  Book {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  Fill in your details and we&apos;ll get back to you within 24 hours
                </DialogDescription>
              </DialogHeader>

              <form className="space-y-4 mt-4">
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all"
                    placeholder="Tell us what brings you here..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: '350ms' }}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Submit Request
                </Button>

                <p className="text-xs text-gray-500 text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                  Our team will reach out to you within 24 hours to confirm your appointment.
                </p>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
