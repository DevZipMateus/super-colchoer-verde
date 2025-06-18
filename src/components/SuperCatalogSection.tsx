
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SuperCatalogSection = () => {
  const catalogImages = [
    {
      src: "/lovable-uploads/b852ea04-4205-475a-b72e-0c2d752bb988.png",
      alt: "Colchão Castor com almofadas vermelhas"
    },
    {
      src: "/lovable-uploads/a4ac202f-3425-408b-bfe9-33453ed3aa12.png",
      alt: "Colchão branco com estrutura"
    },
    {
      src: "/lovable-uploads/ef67d67d-14b5-4803-aa43-0589463059bb.png",
      alt: "Colchão com padrão floral"
    },
    {
      src: "/lovable-uploads/8d41b138-9898-4424-9c7b-4771e7f7c3ec.png",
      alt: "Detalhe do colchão com padrão em relevo"
    },
    {
      src: "/lovable-uploads/d2fac790-b255-48ae-b8b7-8a463adf8e76.png",
      alt: "Travesseiro com embalagem"
    },
    {
      src: "/lovable-uploads/883f4f60-86ff-4325-bee6-f8f80b650049.png",
      alt: "Colchão com base estruturada"
    },
    {
      src: "/lovable-uploads/86b9e010-23d7-4fe3-b932-32c6f4708c89.png",
      alt: "Colchão Castor com padrão decorativo"
    },
    {
      src: "/lovable-uploads/029608f7-9f0d-46a6-be16-6c0c9e348205.png",
      alt: "Ambiente da loja com sofás"
    },
    {
      src: "/lovable-uploads/7ac72a69-664e-4ed9-af48-5567bf7b7d97.png",
      alt: "Colchões embalados na loja"
    },
    {
      src: "/lovable-uploads/823e60a2-a086-486d-a82b-36ade0884272.png",
      alt: "Colchão moderno em exposição"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === catalogImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [catalogImages.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? catalogImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === catalogImages.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold mb-6 text-6xl">
            Catálogo
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa variedade de produtos de alta qualidade
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-xl">
            <img
              src={catalogImages[currentIndex].src}
              alt={catalogImages[currentIndex].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {catalogImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/catalogo">
            <Button className="btn-primary text-lg px-8 py-4">
              Venha conferir nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperCatalogSection;
