
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
    },
    {
      src: "/lovable-uploads/57138f2d-7f1d-412c-96f8-34f9cf7371e3.png",
      alt: "Colchão com padrão geométrico em tons neutros"
    },
    {
      src: "/lovable-uploads/94f17fc4-6e1d-4fef-b84c-89f998cb2ae3.png",
      alt: "Colchão de molas ensacadas individuais preto"
    },
    {
      src: "/lovable-uploads/36e57e4b-f996-41e6-a337-eb10831d2a46.png",
      alt: "Colchão de molas ensacadas individuais branco"
    },
    {
      src: "/lovable-uploads/54335c07-a84c-48e8-8ac5-e6468b5ee093.png",
      alt: "Conjunto box com cama auxiliar marrom"
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

        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {catalogImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {catalogImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link to="/catalogo">
            <Button className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform duration-200">
              Veja nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperCatalogSection;
