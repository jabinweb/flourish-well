'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Heart,
  Users,
  Home,
  Briefcase,
  Award,
  Mic,
  GraduationCap,
  Calendar,
  Menu,
  X,
  Leaf,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Star,
  TrendingUp,
  Globe,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { EventsSection } from '@/components/events-section';
import { ServicesSection } from '@/components/services-section';
import { GallerySection } from '@/components/gallery-section';

export default function FlourishWellPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-emerald-600" />
              <span className="text-xl font-semibold text-gray-900">Flourish Well</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-emerald-600 transition-colors text-sm font-medium">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-emerald-600 hover:bg-emerald-700 shadow-sm">
                Book Session
              </Button>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">Services</button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">Contact</button>
              <Button onClick={() => scrollToSection('contact')} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Book Session
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section className="relative py-20 sm:py-28 md:py-36 lg:py-44 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Gradient Orbs */}
          <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-300/10 to-teal-300/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
          
          {/* Decorative Circles */}
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-500/40 rounded-full"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-teal-500/40 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-emerald-500/40 rounded-full"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-teal-500/40 rounded-full"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight animate-fade-in-up">
              Flourish Well
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-4 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              Professional Counselling & Mental Health Services
            </p>
            
            <p className="text-base sm:text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Dr. Binu Thomas · Ph.D. in Counselling Psychology · 20+ Years Experience
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-base px-8 py-6"
              >
                Book Consultation
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-base px-8 py-6"
              >
                View Services
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-200 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <p className="text-sm text-gray-500 italic">
                &quot;When the mind thrives, life flourishes.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-in-left">
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs">About</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Dr. Binu Thomas
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
                Counselling Psychologist, Wellbeing Leader, and passionate advocate for mental health with <strong>over 20 years of professional experience</strong> across India and abroad.
              </p>
              <blockquote className="border-l-4 border-emerald-600 pl-4 sm:pl-6 py-3 mb-6 italic text-gray-700 bg-white rounded-r-lg text-sm sm:text-base">
                &quot;For me, wellbeing is not an add-on; it is the very core of every individual&apos;s journey to happiness and fulfilment.&quot;
              </blockquote>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Brain className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600">
                    <strong>Ph.D. in Counselling Psychology</strong>, two Master&apos;s degrees, and Postgraduate Diploma in Family Therapy
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600">
                    Trained in Positive Psychology, Restorative Practices, Youth Mental Health First Aid, Trauma-Informed Care, and CBT
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base text-gray-600">
                    Experience with <strong>CAMH Toronto</strong>, <strong>LBSNAA</strong>, International Schools, and global conferences (IPPA, ISCA, Rotary International)
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-slide-in-right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/Generated Image October 18, 2025 - 2_55PM.png"
                  alt="Dr. Binu Thomas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <TrendingUp className="h-10 w-10 text-white mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-sm text-emerald-50">Years of Experience</div>
              </div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <Users className="h-10 w-10 text-white mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">2000+</div>
                <div className="text-sm text-emerald-50">Individuals Supported</div>
              </div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <Globe className="h-10 w-10 text-white mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-emerald-50">Workshops Delivered</div>
              </div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <Award className="h-10 w-10 text-white mx-auto mb-4" />
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-emerald-50">Global Conferences</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              What Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Real stories from individuals and organizations we&apos;ve supported
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed italic">
                  &quot;Dr. Binu&apos;s compassionate approach helped me navigate through my anxiety. Her guidance was transformative and life-changing.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-semibold text-sm">S.M.</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Sarah M.</div>
                    <div className="text-xs text-gray-500">Individual Client</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed italic">
                  &quot;The parent coaching sessions equipped us with practical tools to support our child&apos;s emotional development. Highly recommend!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-700 font-semibold text-sm">R.K.</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Rahul K.</div>
                    <div className="text-xs text-gray-500">Parent</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6 sm:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed italic">
                  &quot;Dr. Binu&apos;s workplace wellbeing program dramatically improved our team&apos;s mental health awareness and productivity.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-700 font-semibold text-sm">A.P.</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Anjali P.</div>
                    <div className="text-xs text-gray-500">HR Director</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ServicesSection />

      <EventsSection />

      <GallerySection />

      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs">FAQ</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Everything you need to know about our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">
                  How long is a typical counselling session?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                  A standard session is 50-60 minutes. The frequency and duration of therapy are tailored to your individual needs and goals.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">
                  Do you offer online sessions?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                  Yes! We offer both in-person and secure online sessions via video conferencing, making support accessible wherever you are.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">
                  Is everything I share confidential?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                  Absolutely. Confidentiality is a cornerstone of counselling. Information is only shared with your explicit consent, except in rare situations involving safety concerns as mandated by professional ethics.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">
                  What is your cancellation policy?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                  We request at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to another client in need.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6 bg-white">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">
                  How do I prepare for my first session?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
                  Simply come as you are. Think about what you&apos;d like to focus on, but don&apos;t worry—we&apos;ll guide you through the process and create a safe space for exploration.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your Journey to Flourishing
          </h2>
          <p className="text-base sm:text-lg mb-8 text-emerald-50">
            Take the first step towards emotional wellbeing and personal growth today.
          </p>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Appointment
          </Button>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-4 bg-gray-100 text-gray-800 hover:bg-gray-100 text-xs">Contact</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book a Session
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              We offer both online and in-person sessions tailored to your needs
            </p>
          </div>

          <Card className="shadow-xl border-gray-200">
            <CardContent className="p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Last name"
                    />
                  </div>
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
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="your.email@example.com"
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+91"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="individual">Individual Counselling & Therapy</option>
                    <option value="parent">Parent Coaching & Workshops</option>
                    <option value="family">Family & Marriage Counselling</option>
                    <option value="workplace">Workplace Wellbeing & Staff Development</option>
                    <option value="supervision">Supervision for Mental Health Practitioners</option>
                    <option value="keynotes">Keynotes & Conference Speaking</option>
                    <option value="school">School Wellbeing Consultancy & Training</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us what brings you here..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm">Thank you! We&apos;ll be in touch within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    <p className="text-sm">Something went wrong. Please try again or contact us directly.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </Button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  <Shield className="h-4 w-4 inline mr-1" />
                  Your information is secure and confidential. We&apos;ll get back to you within 24 hours.
                </p>
              </form>

              <Separator className="my-8" />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Other Ways to Connect</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:contact@flourishwell.com"
                    className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500">Email Us</div>
                      <div className="text-sm font-medium text-gray-900">contact@flourishwell.com</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <MessageCircle className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="text-xs text-gray-500">WhatsApp</div>
                      <div className="text-sm font-medium text-gray-900">+91 98765 43210</div>
                    </div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-7 w-7 text-emerald-400" />
                <span className="text-xl font-semibold">Flourish Well</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Your partner in wellbeing and mental health. Helping individuals, families, and organizations thrive.
              </p>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <a href="mailto:contact@flourishwell.com" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Mail className="h-4 w-4" />
                  contact@flourishwell.com
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  India & International
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-emerald-400 transition-colors">
                    About Dr. Binu
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">
                    Our Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">
                    Book a Session
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Individual Therapy</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Family Counselling</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">Workplace Wellbeing</li>
                <li className="hover:text-emerald-400 transition-colors cursor-pointer">School Consultancy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-4">Professional Affiliations</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>IPPA (International)</li>
                <li>ISCA (Counselling Assoc.)</li>
                <li>Rotary International</li>
                <li>CAMH Toronto</li>
                <li>LBSNAA</li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Flourish Well. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
              <button className="hover:text-emerald-400 transition-colors">Terms of Service</button>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500 italic">When the mind thrives, life flourishes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
