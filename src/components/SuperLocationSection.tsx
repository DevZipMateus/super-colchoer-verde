
const SuperLocationSection = () => {
  return (
    <section id="localizacao" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Nossa Localização
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Venha nos visitar em nossa loja no centro de Santa Maria
          </p>
        </div>

        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-53.8067!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
            className="w-full h-full border-0" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Localização Super Colchões - Santa Maria RS"
          />
        </div>

        {/* Informações de contato centralizadas abaixo do mapa */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          
        </div>
      </div>
    </section>
  );
};

export default SuperLocationSection;
