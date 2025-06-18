
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const catalogImages = [
    {
      src: "/lovable-uploads/b852ea04-4205-475a-b72e-0c2d752bb988.png",
      alt: "Colchão Castor com almofadas vermelhas",
      title: "Conjunto Castor Deluxe",
      description: "Colchão premium com almofadas decorativas, ideal para um sono reparador."
    },
    {
      src: "/lovable-uploads/a4ac202f-3425-408b-bfe9-33453ed3aa12.png",
      alt: "Colchão branco com estrutura",
      title: "Colchão Estruturado",
      description: "Colchão com tecnologia avançada de suporte e conforto."
    },
    {
      src: "/lovable-uploads/ef67d67d-14b5-4803-aa43-0589463059bb.png",
      alt: "Colchão com padrão floral",
      title: "Colchão Floral Premium",
      description: "Design elegante com padrão floral, combinando beleza e conforto."
    },
    {
      src: "/lovable-uploads/8d41b138-9898-4424-9c7b-4771e7f7c3ec.png",
      alt: "Detalhe do colchão com padrão em relevo",
      title: "Colchão Textured",
      description: "Superfície texturizada para melhor ventilação e conforto."
    },
    {
      src: "/lovable-uploads/d2fac790-b255-48ae-b8b7-8a463adf8e76.png",
      alt: "Travesseiro com embalagem",
      title: "Travesseiro Premium",
      description: "Travesseiros de alta qualidade para complementar seu sono."
    },
    {
      src: "/lovable-uploads/883f4f60-86ff-4325-bee6-f8f80b650049.png",
      alt: "Colchão com base estruturada",
      title: "Sistema Completo",
      description: "Colchão com base estruturada para máximo suporte."
    },
    {
      src: "/lovable-uploads/86b9e010-23d7-4fe3-b932-32c6f4708c89.png",
      alt: "Colchão Castor com padrão decorativo",
      title: "Castor Decorativo",
      description: "Colchão Castor com padrão decorativo exclusivo."
    },
    {
      src: "/lovable-uploads/029608f7-9f0d-46a6-be16-6c0c9e348205.png",
      alt: "Ambiente da loja com sofás",
      title: "Móveis para Sala",
      description: "Ambiente completo para sua sala de estar."
    },
    {
      src: "/lovable-uploads/7ac72a69-664e-4ed9-af48-5567bf7b7d97.png",
      alt: "Colchões embalados na loja",
      title: "Variedade de Colchões",
      description: "Grande variedade de colchões disponíveis em nossa loja."
    },
    {
      src: "/lovable-uploads/823e60a2-a086-486d-a82b-36ade0884272.png",
      alt: "Colchão moderno em exposição",
      title: "Linha Moderna",
      description: "Design moderno e contemporâneo para ambientes atuais."
    }
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? catalogImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === catalogImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Voltar para o início</span>
            </Link>
            <h1 className="font-heading font-bold text-3xl text-center">Catálogo Super Colchões</h1>
            <div className="w-32"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Catalog Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore nossa coleção completa de colchões e produtos para o seu bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="font-heading font-bold text-2xl mb-4">Interessado em algum produto?</h2>
          <p className="text-gray-700 mb-6">Entre em contato conosco para mais informações e preços</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:055-3221-8035">
              <Button className="btn-primary">
                Ligar agora: (55) 3221-8035
              </Button>
            </a>
            <a href="https://wa.me/5555991630055" target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary">
                WhatsApp: (55) 99163-0055
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              ✕
            </button>
            
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={catalogImages[selectedImage].src}
              alt={catalogImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="font-bold text-lg">{catalogImages[selectedImage].title}</h3>
              <p className="text-sm">{catalogImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
