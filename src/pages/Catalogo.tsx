
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const products = [
    {
      id: 1,
      name: "Colchão Premium",
      image: "/lovable-uploads/53cadf85-5d35-4b20-8531-754e8ab30871.png",
      description: "Colchão com padrão geométrico, ideal para quarto moderno",
      features: ["Tecnologia avançada", "Máximo conforto", "Design moderno"]
    },
    {
      id: 2,
      name: "Colchão Molas Ensacadas",
      image: "/lovable-uploads/82fe4f40-4fa7-4fc1-95c5-b18165a1c462.png",
      description: "Colchão de molas ensacadas individuais para melhor distribuição de peso",
      features: ["Molas independentes", "Suporte personalizado", "Durabilidade superior"]
    },
    {
      id: 3,
      name: "Colchão Luxo Branco",
      image: "/lovable-uploads/1cf9f83d-67a9-43e4-8e7f-e49dcd8dd5fb.png",
      description: "Colchão branco de alta qualidade para ambientes clean e modernos",
      features: ["Design elegante", "Materiais premium", "Conforto excepcional"]
    },
    {
      id: 4,
      name: "Conjunto Box com Cama Auxiliar",
      image: "/lovable-uploads/e2e1fcaa-6955-4c7c-950c-dbf0b2e7122a.png",
      description: "Conjunto completo com box e cama auxiliar para máxima praticidade",
      features: ["Espaço extra", "Versatilidade", "Qualidade garantida"]
    }
  ];

  const handleWhatsAppContact = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para o ${productName}.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Início
          </Link>
          <img 
            src="/lovable-uploads/bca5d742-c756-4a30-b248-b54e13f5badd.png" 
            alt="Super Colchões" 
            className="h-10 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosso Catálogo</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Descubra nossa linha completa de produtos de qualidade
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => handleWhatsAppContact(product.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco! Temos uma variedade ainda maior de produtos 
            em nossa loja física e podemos ajudar você a encontrar exatamente o que precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
            >
              Falar no WhatsApp
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('tel:+5511999999999', '_blank')}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalogo;
