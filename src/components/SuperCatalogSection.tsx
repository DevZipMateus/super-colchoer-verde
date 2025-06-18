import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuperCatalogSection = () => {
  const catalogImages = [
    {
      src: "/lovable-uploads/53cadf85-5d35-4b20-8531-754e8ab30871.png",
      alt: "Colchão com padrão geométrico em quarto moderno"
    },
    {
      src: "/lovable-uploads/82fe4f40-4fa7-4fc1-95c5-b18165a1c462.png",
      alt: "Colchão de molas ensacadas individuais em ambiente luxuoso"
    },
    {
      src: "/lovable-uploads/1cf9f83d-67a9-43e4-8e7f-e49dcd8dd5fb.png",
      alt: "Colchão de molas ensacadas individuais branco em ambiente clean"
    },
    {
      src: "/lovable-uploads/e2e1fcaa-6955-4c7c-950c-dbf0b2e7122a.png",
      alt: "Conjunto box com cama auxiliar em quarto elegante"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === catalogImages.length - 1 ? 0 : prevIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [catalogImages.length, isAutoPlaying]);
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? catalogImages.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === catalogImages.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold mb-6 text-4xl md:text-5xl lg:text-6xl">
            Catálogo
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa variedade de produtos de alta qualidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-12">
          {/* Carousel Container */}
          <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] max-h-[700px] overflow-hidden rounded-xl shadow-xl bg-white">
            {/* Image with optimized loading */}
            <div className="relative w-full h-full">
              <img 
                src={catalogImages[currentIndex].src} 
                alt={catalogImages[currentIndex].alt} 
                className="w-full h-full object-contain transition-opacity duration-700 ease-in-out" 
                loading="lazy" 
                decoding="async" 
                style={{
                  aspectRatio: 'auto',
                  objectPosition: 'center'
                }} 
              />
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Navigation buttons with improved accessibility */}
            <button 
              onClick={goToPrevious} 
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 z-10 touch-manipulation" 
              aria-label="Imagem anterior" 
              type="button"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button 
              onClick={goToNext} 
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 z-10 touch-manipulation" 
              aria-label="Próxima imagem" 
              type="button"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Slide counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {catalogImages.length}
            </div>
          </div>

          {/* Improved indicators with horizontal scroll */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide max-w-full px-4">
              
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-md">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-primary h-1 rounded-full transition-all duration-300" 
                style={{
                  width: `${((currentIndex + 1) / catalogImages.length) * 100}%`
                }} 
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/catalogo">
            <Button className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform duration-200">
              Venha conferir nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperCatalogSection;
