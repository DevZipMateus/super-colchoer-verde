
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
    },
    {
      src: "/lovable-uploads/bee8ffa0-04a7-4648-b422-392fae393b45.png",
      alt: "Colchão Hauzestern em exposição"
    },
    {
      src: "/lovable-uploads/b127118b-f790-4fbf-914e-0cff22ecf09f.png",
      alt: "Detalhe das camadas do colchão"
    },
    {
      src: "/lovable-uploads/736ea669-8477-485f-9d71-39ac76a1206a.png",
      alt: "Colchão Zuhaus Stern"
    },
    {
      src: "/lovable-uploads/e1a9a8bc-a884-4863-be76-c6213f6ab821.png",
      alt: "Colchão com padrão decorativo na loja"
    },
    {
      src: "/lovable-uploads/71924c36-bc75-49a5-a9dc-fc66e35b8aaa.png",
      alt: "Travesseiro de látex"
    },
    {
      src: "/lovable-uploads/919e0308-62cb-4473-95cf-ee41c1053714.png",
      alt: "Colchão branco com detalhes em relevo"
    },
    {
      src: "/lovable-uploads/4cb4bd30-9d00-4f71-b4f8-39fc40632fd4.png",
      alt: "Poltrona reclinável marrom"
    },
    {
      src: "/lovable-uploads/087d8c88-4489-4144-8a18-71898a5e157f.png",
      alt: "Colchão de molas ensacadas individuais - ambiente"
    },
    {
      src: "/lovable-uploads/8000ddc0-4cee-46ea-85c1-a3524f847b64.png",
      alt: "Colchão de molas ensacadas individuais - quarto moderno"
    },
    {
      src: "/lovable-uploads/dbcaf81b-956a-46e3-b0d7-ab32cf30af11.png",
      alt: "Colchão de molas ensacadas individuais - ambiente luxo"
    },
    {
      src: "/lovable-uploads/586c1b99-c4ec-4f62-b516-4888bd781d0a.png",
      alt: "Colchão de molas ensacadas individuais - branco"
    },
    {
      src: "/lovable-uploads/43488edc-462a-4fc6-bbbd-7dfd8e1120be.png",
      alt: "Poltrona reclinável bege"
    },
    {
      src: "/lovable-uploads/f2fa3dde-4033-4955-a30c-f190eb2364b4.png",
      alt: "Box baú marrom com abertura"
    },
    {
      src: "/lovable-uploads/939809b3-4ff6-4e4e-bb46-0aca85a7646c.png",
      alt: "Box baú branco aberto"
    },
    {
      src: "/lovable-uploads/41cabb28-8bb8-4261-a505-0c9f91bc7f2e.png",
      alt: "Sofá-cama com colchão estendido"
    },
    {
      src: "/lovable-uploads/28259c71-17b8-429c-9761-47596305758e.png",
      alt: "Conjunto box com cama auxiliar"
    },
    {
      src: "/lovable-uploads/9017e817-369c-4f48-aa8b-a5436e8fdac5.png",
      alt: "Colchão de espuma com padrão decorativo"
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
          <h2 className="font-heading font-bold mb-6 text-4xl md:text-5xl lg:text-6xl">
            Catálogo
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa variedade de produtos de alta qualidade
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-xl shadow-xl">
            <img
              src={catalogImages[currentIndex].src}
              alt={catalogImages[currentIndex].alt}
              className="w-full h-full object-contain md:object-cover transition-opacity duration-500 bg-white"
            />
            
            {/* Navigation buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 z-10"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
            <div className="flex space-x-2 min-w-max px-4">
              {catalogImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 flex-shrink-0 ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/catalogo">
            <Button className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Venha conferir nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperCatalogSection;
