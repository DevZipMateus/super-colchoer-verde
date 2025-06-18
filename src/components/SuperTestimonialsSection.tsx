
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const SuperTestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const testimonials = [
    {
      name: "Hemely Cassol",
      text: "Minha experiência com a compra do meu novo colchão foi muito boa. Sai da loja exatamente com aquilo que procurava, além de receber no mesmo dia 😁. Realmente indico a super colchões, o ambiente é familiar, o vendedor tem conhecimento do seu produto e te indica exatamente o que tu precisa, além disso a qualidade é garantida. 🙌🏼",
      rating: 5,
      date: "2 meses atrás"
    },
    {
      name: "Valeria Etges Rodrigues de Souza", 
      text: "Quando somos bem atendidos, com gentileza, simpatia, tem muitas risadas junto haha. A gente se torna fiel a loja. Somos clientes a um tempo, e sempre foi assim, lugar onde somos bem tratados, a gente volta, nem que for para dar um oizinho. Como é bom ter esse atendimento de valor hoje em dia.",
      rating: 5,
      date: "4 meses atrás"
    },
    {
      name: "Valério V. Soares Leal",
      text: "Excelente, mesmo comprando à distância, pois estava em férias, fui muito bem atendido, comprei e recebi o que realmente havia solicitado, preço, condições de pagamento e recebimento tudo conforme o combinado. Com certeza recomendo esse estabelecimento.",
      rating: 5,
      date: "2 meses atrás"
    },
    {
      name: "Giovani Souza",
      text: "Excelente como sempre. Adquiri um Colchão King com baú. Baú espaçoso e materiais de primeira linha. Colchão muito Confortável. Recomendo 100%. A durabilidade dos produtos são incríveis. Produtos da Super Colchões são de extrema qualidade. Vale muito a pena.",
      rating: 5,
      date: "2 meses atrás"
    },
    {
      name: "Catiucia Vareli",
      text: "Foi maravilhosa. Atendimento de qualidade, com a atenção que cada cliente merece. Super recomendados. Tanto o atendimento quanto o colchão que adquiri. Meu Castor Gold Star.",
      rating: 5,
      date: "3 meses atrás"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="depoimentos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <StarRating rating={testimonial.rating} />
                          <span className="text-sm text-gray-500">{testimonial.date}</span>
                        </div>
                        
                        <div className="mb-6">
                          <p className="text-gray-700 leading-relaxed italic">
                            "{expandedCards.has(index) 
                              ? testimonial.text 
                              : truncateText(testimonial.text)}"
                          </p>
                          {testimonial.text.length > 150 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleExpanded(index)}
                              className="mt-2 text-primary hover:text-primary/80 p-0 h-auto"
                            >
                              {expandedCards.has(index) ? (
                                <>
                                  <ChevronUp className="w-4 h-4 mr-1" />
                                  Ler menos
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-1" />
                                  Ler mais
                                </>
                              )}
                            </Button>
                          )}
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                            <span className="text-primary font-heading font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                            <p className="text-sm text-gray-500">Cliente verificado</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10" />
              <div className="flex space-x-2">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index + 1 === current ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
              <CarouselNext className="relative inset-0 translate-y-0 translate-x-0 h-10 w-10" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Quer ver mais depoimentos dos nossos clientes?
          </p>
          <a 
            href="https://www.google.com/search?q=super+colch%C3%B5es&oq=super+colch%C3%B5es&aqs=chrome..69i57j35i39j0i22i30l3j69i60j69i61l2.4320j1j4&sourceid=chrome&ie=UTF-8#lrd=0x9503cb6afb0b59b3:0x5e1f0cbaa2dfe89,1,,," 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Veja mais comentários
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuperTestimonialsSection;
