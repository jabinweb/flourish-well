'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Gallery images from public/gallery folder
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop',
    alt: 'Workshop session with participants',
    category: 'Workshops'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&h=600&fit=crop',
    alt: 'Professional counselling session',
    category: 'Counselling'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop',
    alt: 'Group therapy session',
    category: 'Workshops'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=600&fit=crop',
    alt: 'Mental health awareness event',
    category: 'Events'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=600&fit=crop',
    alt: 'Conference speaking engagement',
    category: 'Speaking'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop',
    alt: 'Team building workshop',
    category: 'Workshops'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop',
    alt: 'School wellbeing program',
    category: 'Schools'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop',
    alt: 'Professional training session',
    category: 'Training'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=600&fit=crop',
    alt: 'Parent coaching workshop',
    category: 'Workshops'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=600&fit=crop',
    alt: 'Keynote presentation',
    category: 'Speaking'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=600&fit=crop',
    alt: 'Workplace wellbeing session',
    category: 'Corporate'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop',
    alt: 'Community event',
    category: 'Events'
  }
];

const categories = ['All', 'Workshops', 'Counselling', 'Events', 'Speaking', 'Schools', 'Training', 'Corporate'];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const currentImage = filteredImages.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs">Gallery</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Our Journey in Pictures
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Moments from workshops, events, and sessions that inspire growth and wellbeing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

  {/* Gallery Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group relative overflow-hidden cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className="bg-white/90 text-gray-900 text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full">
                      <ZoomIn className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show count */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Showing {filteredImages.length} of {galleryImages.length} images
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-h-[80vh]">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {currentImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
