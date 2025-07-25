
const SuperHeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-secondary/30 to-white overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-secondary rounded-full filter blur-2xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-heading font-black leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                Super Colchões <br />
                <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-[#000200] font-normal">
                  especialistas em colchões há mais de 20 anos
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/5555991630055" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center justify-center gap-2 text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 touch-manipulation"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                Fale no WhatsApp
              </a>
              
              <button 
                onClick={() => document.querySelector('#localizacao')?.scrollIntoView({ behavior: 'smooth' })} 
                className="btn-primary text-[#0da456] bg-[#e0f4ea] text-sm sm:text-base px-4 sm:px-6 lg:px-8 py-3 sm:py-4 touch-manipulation"
              >
                Como Chegar
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">12x</div>
                <div className="text-xs sm:text-sm text-gray-600">sem juros</div>
              </div>
              <div className="hidden sm:block h-8 lg:h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">20%</div>
                <div className="text-xs sm:text-sm text-gray-600">de desconto à vista</div>
              </div>
              <div className="hidden sm:block h-8 lg:h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold text-primary">15%</div>
                <div className="text-xs sm:text-sm text-gray-600">de desconto a prazo em até 5x</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block animate-fade-in-up mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-primary/20 rounded-full filter blur-2xl"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 lg:-bottom-4 lg:-right-4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-secondary rounded-full filter blur-xl"></div>
              <div className="relative z-10 bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-1 transform transition-all duration-500 hover:scale-105">
                <img 
                  src="/lovable-uploads/8bc0200e-2c73-4b31-918d-54eba6d54b4f.png" 
                  alt="Colchões de alta qualidade Super Colchões Santa Maria" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperHeroSection;
