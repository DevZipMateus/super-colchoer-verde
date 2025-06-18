import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Catalogo = () => {
  const catalogImages = [{
    src: "/lovable-uploads/b852ea04-4205-475a-b72e-0c2d752bb988.png",
    alt: "Colchão Castor com almofadas vermelhas",
    description: "Colchão premium com almofadas decorativas, ideal para um sono reparador."
  }, {
    src: "/lovable-uploads/a4ac202f-3425-408b-bfe9-33453ed3aa12.png",
    alt: "Colchão branco com estrutura",
    description: "Colchão com tecnologia avançada de suporte e conforto."
  }, {
    src: "/lovable-uploads/ef67d67d-14b5-4803-aa43-0589463059bb.png",
    alt: "Colchão com padrão floral",
    description: "Design elegante com padrão floral, combinando beleza e conforto."
  }, {
    src: "/lovable-uploads/8d41b138-9898-4424-9c7b-4771e7f7c3ec.png",
    alt: "Detalhe do colchão com padrão em relevo",
    description: "Superfície texturizada para melhor ventilação e conforto."
  }, {
    src: "/lovable-uploads/d2fac790-b255-48ae-b8b7-8a463adf8e76.png",
    alt: "Travesseiro com embalagem",
    description: "Travesseiros de alta qualidade para complementar seu sono."
  }, {
    src: "/lovable-uploads/883f4f60-86ff-4325-bee6-f8f80b650049.png",
    alt: "Colchão com base estruturada",
    description: "Colchão com base estruturada para máximo suporte."
  }, {
    src: "/lovable-uploads/86b9e010-23d7-4fe3-b932-32c6f4708c89.png",
    alt: "Colchão Castor com padrão decorativo",
    description: "Colchão Castor com padrão decorativo exclusivo."
  }, {
    src: "/lovable-uploads/029608f7-9f0d-46a6-be16-6c0c9e348205.png",
    alt: "Ambiente da loja com sofás",
    description: "Ambiente completo para sua sala de estar."
  }, {
    src: "/lovable-uploads/7ac72a69-664e-4ed9-af48-5567bf7b7d97.png",
    alt: "Colchões embalados na loja",
    description: "Grande variedade de colchões disponíveis em nossa loja."
  }, {
    src: "/lovable-uploads/823e60a2-a086-486d-a82b-36ade0884272.png",
    alt: "Colchão moderno em exposição",
    description: "Design moderno e contemporâneo para ambientes atuais."
  }, {
    src: "/lovable-uploads/bee8ffa0-04a7-4648-b422-392fae393b45.png",
    alt: "Colchão Hauzestern em exposição",
    description: "Colchão Hauzestern de alta qualidade em ambiente de exposição."
  }, {
    src: "/lovable-uploads/b127118b-f790-4fbf-914e-0cff22ecf09f.png",
    alt: "Detalhe das camadas do colchão",
    description: "Visualize a tecnologia avançada em camadas dos nossos colchões."
  }, {
    src: "/lovable-uploads/736ea669-8477-485f-9d71-39ac76a1206a.png",
    alt: "Colchão Zuhaus Stern",
    description: "Colchão Zuhaus Stern com tecnologia alemã de ponta."
  }, {
    src: "/lovable-uploads/e1a9a8bc-a884-4863-be76-c6213f6ab821.png",
    alt: "Colchão com padrão decorativo na loja",
    description: "Colchões com padrões decorativos elegantes em exposição."
  }, {
    src: "/lovable-uploads/71924c36-bc75-49a5-a9dc-fc66e35b8aaa.png",
    alt: "Travesseiro de látex",
    description: "Travesseiro de látex natural para máximo conforto."
  }, {
    src: "/lovable-uploads/919e0308-62cb-4473-95cf-ee41c1053714.png",
    alt: "Colchão branco com detalhes em relevo",
    description: "Colchão com detalhes em relevo para melhor ergonomia."
  }, {
    src: "/lovable-uploads/4cb4bd30-9d00-4f71-b4f8-39fc40632fd4.png",
    alt: "Poltrona reclinável marrom",
    description: "Poltrona reclinável em couro para máximo relaxamento."
  }, {
    src: "/lovable-uploads/087d8c88-4489-4144-8a18-71898a5e157f.png",
    alt: "Colchão de molas ensacadas individuais - ambiente",
    description: "Colchão de molas ensacadas individuais em ambiente sofisticado."
  }, {
    src: "/lovable-uploads/8000ddc0-4cee-46ea-85c1-a3524f847b64.png",
    alt: "Colchão de molas ensacadas individuais - quarto moderno",
    description: "Conjunto completo com colchão de molas ensacadas para quarto moderno."
  }, {
    src: "/lovable-uploads/dbcaf81b-956a-46e3-b0d7-ab32cf30af11.png",
    alt: "Colchão de molas ensacadas individuais - ambiente luxo",
    description: "Colchão de molas ensacadas individuais em ambiente de luxo."
  }, {
    src: "/lovable-uploads/586c1b99-c4ec-4f62-b516-4888bd781d0a.png",
    alt: "Colchão de molas ensacadas individuais - branco",
    description: "Colchão de molas ensacadas individuais com acabamento branco elegante."
  }, {
    src: "/lovable-uploads/43488edc-462a-4fc6-bbbd-7dfd8e1120be.png",
    alt: "Poltrona reclinável bege",
    description: "Poltrona reclinável em couro bege para momentos de relaxamento."
  }, {
    src: "/lovable-uploads/f2fa3dde-4033-4955-a30c-f190eb2364b4.png",
    alt: "Box baú marrom com abertura",
    description: "Box com sistema baú para otimizar o espaço do seu quarto."
  }, {
    src: "/lovable-uploads/939809b3-4ff6-4e4e-bb46-0aca85a7646c.png",
    alt: "Box baú branco aberto",
    description: "Box baú em acabamento branco com amplo espaço de armazenamento."
  }, {
    src: "/lovable-uploads/41cabb28-8bb8-4261-a505-0c9f91bc7f2e.png",
    alt: "Sofá-cama com colchão estendido",
    description: "Sofá-cama com colchão de alta qualidade para visitas."
  }, {
    src: "/lovable-uploads/28259c71-17b8-429c-9761-47596305758e.png",
    alt: "Conjunto box com cama auxiliar",
    description: "Conjunto box com cama auxiliar, perfeito para otimizar espaço."
  }, {
    src: "/lovable-uploads/9017e817-369c-4f48-aa8b-a5436e8fdac5.png",
    alt: "Colchão de espuma com padrão decorativo",
    description: "Colchão de espuma de alta densidade com padrão decorativo elegante."
  }];
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
  const getProductTitle = (index: number) => {
    const titles = ["Conjunto Castor Deluxe", "Colchão Estruturado", "Colchão Floral Premium", "Colchão Textured", "Travesseiro Premium", "Sistema Completo", "Castor Decorativo", "Móveis para Sala", "Variedade de Colchões", "Linha Moderna", "Hauzestern Premium", "Tecnologia Multicamadas", "Zuhaus Stern", "Linha Decorativa", "Travesseiro Real Látex", "Linha Relief", "Poltrona Reclinável", "Molas Ensacadas Premium", "Quarto Moderno", "Linha Luxo", "Molas Ensacadas Branco", "Poltrona Relax Bege", "Box Baú Premium", "Box Baú Branco", "Sofá-Cama Premium", "Box com Cama Auxiliar", "Colchão de Espuma Premium"];
    return titles[index] || "Produto";
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="font-medium text-sm md:text-base">Voltar para o início</span>
            </Link>
            <h1 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-center">Catálogo Super Colchões</h1>
            <div className="w-20 md:w-32"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </header>

      {/* Catalog Grid */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore nossa coleção completa de colchões e produtos para o seu bem-estar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(0)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/b852ea04-4205-475a-b72e-0c2d752bb988.png" alt="Colchão Castor com almofadas vermelhas" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Conjunto Castor Deluxe</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(1)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/a4ac202f-3425-408b-bfe9-33453ed3aa12.png" alt="Colchão branco com estrutura" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Pillow Top</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(2)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/ef67d67d-14b5-4803-aa43-0589463059bb.png" alt="Colchão com padrão floral" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Sofa cama</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(3)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/8d41b138-9898-4424-9c7b-4771e7f7c3ec.png" alt="Detalhe do colchão com padrão em relevo" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Colchão Textured</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(4)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/d2fac790-b255-48ae-b8b7-8a463adf8e76.png" alt="Travesseiro com embalagem" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Travesseiro NASA Cervical</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(5)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/883f4f60-86ff-4325-bee6-f8f80b650049.png" alt="Colchão com base estruturada" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Conjunto Box Maxspring</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(6)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/86b9e010-23d7-4fe3-b932-32c6f4708c89.png" alt="Colchão Castor com padrão decorativo" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Linha Exclusiva Castor</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(7)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/029608f7-9f0d-46a6-be16-6c0c9e348205.png" alt="Ambiente da loja com sofás" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Móveis para Sala</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(8)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/7ac72a69-664e-4ed9-af48-5567bf7b7d97.png" alt="Colchões embalados na loja" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Variedade de Colchões</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(9)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/823e60a2-a086-486d-a82b-36ade0884272.png" alt="Colchão moderno em exposição" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Linha Moderna</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(10)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/bee8ffa0-04a7-4648-b422-392fae393b45.png" alt="Colchão Hauzestern em exposição" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Hauzestern Premium</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(11)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/b127118b-f790-4fbf-914e-0cff22ecf09f.png" alt="Detalhe das camadas do colchão" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Tecnologia Multicamadas</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(12)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/736ea669-8477-485f-9d71-39ac76a1206a.png" alt="Colchão Zuhaus Stern" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Zuhause Premium</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(13)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/e1a9a8bc-a884-4863-be76-c6213f6ab821.png" alt="Colchão com padrão decorativo na loja" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Molas individuias</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(14)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/71924c36-bc75-49a5-a9dc-fc66e35b8aaa.png" alt="Travesseiro de látex" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Travesseiro Real Látex</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(15)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/919e0308-62cb-4473-95cf-ee41c1053714.png" alt="Colchão branco com detalhes em relevo" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Pillow Top</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(16)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/4cb4bd30-9d00-4f71-b4f8-39fc40632fd4.png" alt="Poltrona reclinável marrom" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Poltrona Reclinável</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(17)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/087d8c88-4489-4144-8a18-71898a5e157f.png" alt="Colchão de molas ensacadas individuais - ambiente" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Molas Ensacadas Premium</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(18)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/8000ddc0-4cee-46ea-85c1-a3524f847b64.png" alt="Colchão de molas ensacadas individuais - quarto moderno" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Molas Ensacadas Individuais Premium</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(19)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/dbcaf81b-956a-46e3-b0d7-ab32cf30af11.png" alt="Colchão de molas ensacadas individuais - ambiente luxo" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Linha Luxo</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(20)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/586c1b99-c4ec-4f62-b516-4888bd781d0a.png" alt="Colchão de molas ensacadas individuais - branco" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Molas Ensacadas Branco</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(21)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/43488edc-462a-4fc6-bbbd-7dfd8e1120be.png" alt="Poltrona reclinável bege" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Poltrona Relax Bege</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(22)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/f2fa3dde-4033-4955-a30c-f190eb2364b4.png" alt="Box baú marrom com abertura" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Box Baú Premium</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(23)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/939809b3-4ff6-4e4e-bb46-0aca85a7646c.png" alt="Box baú branco aberto" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Box Baú Branco</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(24)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/41cabb28-8bb8-4261-a505-0c9f91bc7f2e.png" alt="Sofá-cama com colchão estendido" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Sofá-Cama Premium</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(25)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/28259c71-17b8-429c-9761-47596305758e.png" alt="Conjunto box com cama auxiliar" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Box com Cama Auxiliar</p>
              
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => openModal(26)}>
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img src="/lovable-uploads/9017e817-369c-4f48-aa8b-a5436e8fdac5.png" alt="Colchão de espuma com padrão decorativo" className="w-full h-full object-contain group-hover:object-cover group-hover:scale-105 transition-all duration-300" />
            </div>
            <div className="p-4 md:p-6">
              <p className="font-heading font-bold text-lg md:text-xl mb-2 line-clamp-2">Colchão de Espuma Ortopédico</p>
              
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 md:mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="font-heading font-bold text-xl md:text-2xl mb-4">Interessado em algum produto?</h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base">Entre em contato conosco para mais informações e preços</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:055-3221-8035">
              <Button className="btn-primary w-full sm:w-auto text-sm md:text-base">
                Ligar agora: (55) 3221-8035
              </Button>
            </a>
            <a href="https://wa.me/5555991630055" target="_blank" rel="noopener noreferrer">
              <Button className="btn-secondary w-full sm:w-auto text-sm md:text-base">
                WhatsApp: (55) 99163-0055
              </Button>
            </a>
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedImage !== null && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex items-center justify-center">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 md:p-3">
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 md:p-3">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 md:p-3">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="w-full h-full flex items-center justify-center p-4 md:p-8">
              <img src={catalogImages[selectedImage].src} alt={catalogImages[selectedImage].alt} className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 md:p-6">
              <h3 className="font-bold text-lg md:text-xl mb-2">{getProductTitle(selectedImage)}</h3>
              <p className="text-sm md:text-base opacity-90">{catalogImages[selectedImage].description}</p>
            </div>
          </div>
        </div>}
    </div>;
};
export default Catalogo;