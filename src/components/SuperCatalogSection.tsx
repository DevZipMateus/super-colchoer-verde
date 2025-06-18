
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SuperCatalogSection = () => {
  const featuredImages = [
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
    }
  ];

  return (
    <section id="catalogo" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Catálogo
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Conheça nossa variedade de produtos de alta qualidade
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
          {/* Grid de imagens responsiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {featuredImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl shadow-lg bg-white group">
                <div className="aspect-[4/3] w-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Overlay sutil para melhor interação */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-4 sm:px-0">
          <Link to="/catalogo">
            <Button className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 md:py-4 hover:scale-105 transition-transform duration-200 touch-manipulation">
              Venha conferir nosso catálogo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuperCatalogSection;
