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
    src: '/gallery/5356223c433c799f8756c587b3f336fc.jpg',
    alt: 'Workshop session with participants',
    category: 'Workshops'
  },
  {
    id: 2,
    src: '/gallery/ed2756_0d67570d424c48cca887915952af2c87~mv2.jpg',
    alt: 'Professional counselling session',
    category: 'Counselling'
  },
  {
    id: 3,
    src: '/gallery/ed2756_5a8811d8e902486590176d6d122c3958~mv2 (1).jpg',
    alt: 'Group therapy session',
    category: 'Workshops'
  },
  {
    id: 4,
    src: '/gallery/ed2756_62a3298776704744a6d197d6be980579~mv2 (1).jpg',
    alt: 'Mental health awareness event',
    category: 'Events'
  },
  {
    id: 5,
    src: '/gallery/ed2756_9af1164d5a4b4ac7ae3c52131e15596f~mv2.jpeg',
    alt: 'Conference speaking engagement',
    category: 'Speaking'
  },
  {
    id: 6,
    src: '/gallery/ed2756_a197b7f3e33c417b818e6eed7196d692~mv2 (1).jpeg',
    alt: 'Team building workshop',
    category: 'Workshops'
  },
  {
    id: 7,
    src: '/gallery/ed2756_adfd170448e94c00b7ea6a02f7867470~mv2.png',
    alt: 'School wellbeing program',
    category: 'Schools'
  },
  {
    id: 8,
    src: '/gallery/ed2756_c5b72f78e82d4312bfeb8c3a5c283904~mv2.jpeg',
    alt: 'Professional training session',
    category: 'Training'
  },
  {
    id: 9,
    src: '/gallery/ed2756_d5933c7562c44369baf38a6a2c447fb1~mv2 (1).jpeg',
    alt: 'Parent coaching workshop',
    category: 'Workshops'
  },
  {
    id: 10,
    src: '/gallery/ed2756_e94c3e3222e64f07b77c02744407b09b~mv2.jpeg',
    alt: 'Keynote presentation',
    category: 'Speaking'
  },
  {
    id: 11,
    src: '/gallery/ed2756_eab466291c704e63aeb20388f30a4ee6~mv2.png',
    alt: 'Workplace wellbeing session',
    category: 'Corporate'
  },
  {
    id: 12,
    src: '/gallery/ed2756_ead8852d00d949c2ac38dd851393e6a9~mv2.jpeg',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
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
