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
  Mic,
  GraduationCap,
  CheckCircle2,
  Calendar,
  Clock,
  X,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights?: string[];
  bgColor: string;
  iconColor: string;
  hoverColor: string;
}

const services: Service[] = [
  {
    id: '1',
    icon: <Heart className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'Individual Counselling & Therapy Sessions',
    shortDescription: 'A safe space to heal, grow, and be heard',
    fullDescription: 'I offer one-on-one counselling in a safe, confidential, and non-judgmental space where individuals can explore their emotions and experiences with support and clarity. Whether you\'re navigating a difficult season or seeking clarity and inner strength, I support you in moving from overwhelm to resilience, and from survival to flourishing.',
    highlights: ['Anxiety & stress management', 'Depression support', 'Personal growth & clarity'],
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverColor: 'group-hover:bg-emerald-100'
  },
  {
    id: '2',
    icon: <Users className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'Parent Coaching and Workshops',
    shortDescription: 'Support for raising confident, kind, and emotionally strong children',
    fullDescription: 'Parenting in today\'s world isn\'t easy — and none of us are formally trained for one of the most important and challenging roles we will ever take on. Every parent wants to raise confident, kind, and emotionally strong children, but the journey often comes with doubts, stress, and moments of overwhelm. Through coaching and workshops, we create a space where you can ask questions, share concerns, and learn practical, gentle ways to support your child. From handling anxiety and behaviour to building emotional resilience.',
    highlights: ['Managing child anxiety', 'Behavior management', 'Communication strategies'],
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    hoverColor: 'group-hover:bg-teal-100'
  },
  {
    id: '3',
    icon: <Home className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'Family & Marriage Counselling',
    shortDescription: 'Rebuild connection and restore harmony in relationships',
    fullDescription: 'Every family and relationship goes through seasons of stress, misunderstanding, or emotional distance. Family and marriage counselling offers a safe and supportive space to rebuild connection, improve communication, and address conflicts with sensitivity and care. Whether you\'re navigating marital challenges, parenting stress, generational gaps, or emotional strain within the family, the goal is to restore understanding, strengthen relationships, and create a healthier, more harmonious home environment.',
    highlights: ['Relationship challenges', 'Communication improvement', 'Conflict resolution'],
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverColor: 'group-hover:bg-emerald-100'
  },
  {
    id: '4',
    icon: <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'Workplace Wellbeing & Staff Development',
    shortDescription: 'Promote emotional health and prevent burnout in organizations',
    fullDescription: 'These trainings focus on strengthening emotional health, reducing burnout, and promoting psychological safety among staff. Through interactive workshops, reflection-based activities, and practical strategies, individuals and teams gain skills to navigate stress, improve relationships, and enhance productivity and morale.',
    highlights: ['Stress management', 'Emotional intelligence', 'Psychological safety'],
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    hoverColor: 'group-hover:bg-teal-100'
  },
  {
    id: '5',
    icon: <Award className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'Supervision for Mental Health Practitioners',
    shortDescription: 'A reflective space for counsellors and psychologists to grow professionally',
    fullDescription: 'Supervision offers a supportive space for counsellors, psychologists, school wellbeing staff, and trainees to reflect, grow, and stay grounded in their work. I help practitioners with: Case reflection and ethical clarity, Strengthening skills and boundaries, Managing stress and emotional load, Building confidence and professional identity. Whether you\'re experienced or just starting out, supervision ensures you stay effective, supported, and aligned with best practices.',
    highlights: ['Ethical clarity & reflection', 'Managing emotional load', 'Strengthening skills'],
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverColor: 'group-hover:bg-emerald-100'
  },
  {
    id: '6',
    icon: <Mic className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'Keynotes & Conference Speaking',
    shortDescription: 'Inspiring, research-based talks on wellbeing and resilience',
    fullDescription: 'I deliver keynote sessions and conference talks on wellbeing, mental health, resilience, school systems, and organizational culture. My speaking style blends research, real-world experience, and practical strategies that inspire action and reflection. I have presented at national and international platforms including IPPA, ISCA, LBSNAA, Rotary International, SPAN Symposium, and the Restorative Justice Council UK. Whether addressing educators, leaders, parents, or mental health professionals, my sessions are engaging, evidence-based, and transformative.',
    highlights: ['IPPA & ISCA conferences', 'Rotary International', 'LBSNAA & symposiums'],
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
    hoverColor: 'group-hover:bg-teal-100'
  },
  {
    id: '7',
    icon: <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7" />,
    title: 'School Wellbeing Consultancy & Training',
    shortDescription: 'Evidence-based frameworks to nurture students and staff',
    fullDescription: 'I work with schools to strengthen their wellbeing ecosystems through evidence-based frameworks, staff capacity building, and student-focused interventions. Support can include policy development, SEL integration, counselling systems, crisis response planning, and whole-school mental health programs.',
    highlights: ['Policy development & implementation', 'SEL integration', 'Crisis response planning', 'Whole-school wellbeing programs'],
    bgColor: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverColor: 'group-hover:bg-emerald-100'
  }
];

export function ServicesSection() {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const [bookingModal, setBookingModal] = useState<{open: boolean, service: Service | null}>({
    open: false,
    service: null
  });
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: 'online',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const toggleService = (id: string) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const openBookingModal = (service: Service) => {
    setBookingModal({ open: true, service });
    setBookingStep(1);
    setSubmitSuccess(false);
  };

  const closeBookingModal = () => {
    setBookingModal({ open: false, service: null });
    setBookingStep(1);
    setBookingData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      sessionType: 'online',
      message: ''
    });
    setSubmitSuccess(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleNextStep = () => {
    setBookingStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setBookingStep(prev => prev - 1);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Booking submitted:', {
      service: bookingModal.service?.title,
      ...bookingData
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);
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
          {services.map((service, index) => {
            const isExpanded = expandedServices.has(service.id);
            
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 border-gray-200 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className={`${service.bgColor} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${service.hoverColor} transition-colors`}>
                    <div className={service.iconColor}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 font-semibold italic">
                    {service.shortDescription}
                  </p>

                  <p className={`text-sm sm:text-base text-gray-600 leading-relaxed mb-4 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {service.fullDescription}
                  </p>

                  {service.highlights && (
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600 mb-4">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`h-4 w-4 ${service.iconColor} flex-shrink-0`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleService(service.id)}
                      className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-2 h-auto font-medium"
                    >
                      {isExpanded ? 'Show less' : 'Show more'}
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => openBookingModal(service)}
                      className="ml-auto bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      <Calendar className="h-4 w-4 mr-1" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={bookingModal.open} onOpenChange={(open) => !open && closeBookingModal()}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          {!submitSuccess ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Book {bookingModal.service?.title}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Step {bookingStep} of 3 - Fill in your details to schedule a session
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmitBooking} className="space-y-6 mt-4">
                {/* Step 1: Personal Information */}
                {bookingStep === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={bookingData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Schedule Preferences */}
                {bookingStep === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        required
                        value={bookingData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={bookingData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sessionType" className="block text-sm font-semibold text-gray-900 mb-2">
                        Session Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="sessionType"
                        name="sessionType"
                        required
                        value={bookingData.sessionType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="online">Online Session</option>
                        <option value="in-person">In-Person Session</option>
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNextStep}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        Next Step <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Information & Confirmation */}
                {bookingStep === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Tell us what brings you here (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={bookingData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                        placeholder="Share any specific concerns or questions you'd like to address..."
                      />
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Booking Summary</h4>
                      <div className="text-sm space-y-2 text-gray-600">
                        <p><strong>Service:</strong> {bookingModal.service?.title}</p>
                        <p><strong>Name:</strong> {bookingData.name}</p>
                        <p><strong>Email:</strong> {bookingData.email}</p>
                        <p><strong>Phone:</strong> {bookingData.phone}</p>
                        <p><strong>Date:</strong> {bookingData.preferredDate}</p>
                        <p><strong>Time:</strong> {bookingData.preferredTime}</p>
                        <p><strong>Type:</strong> {bookingData.sessionType === 'online' ? 'Online Session' : 'In-Person Session'}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="mr-2 h-4 w-4" />
                            Confirm Booking
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </>
          ) : (
            <div className="text-center py-8 animate-fade-in">
              <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for booking with us. We&apos;ll send a confirmation email to <strong>{bookingData.email}</strong> shortly.
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Dr. Binu Thomas will reach out to you within 24 hours to confirm your appointment.
              </p>
              <Button
                onClick={closeBookingModal}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Close
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
