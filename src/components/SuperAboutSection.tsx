const SuperAboutSection = () => {
  return <section id="sobre" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold mb-6 text-6xl">
            Sobre
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-4xl">
                Há 39 anos cuidando do bem-estar e qualidade de vida de nossos clientes. 
                A Super Colchões investe em produtos de alta qualidade, requinte e conforto. 
                Pioneira no ramo de colchões em Santa Maria-RS, dispomos de produtos multimarcas, 
                atendimento diferenciado e exclusivo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              
              
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl"></div>
            <img alt="Loja Super Colchões em Santa Maria - Ambiente familiar e acolhedor" className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover" src="/lovable-uploads/f69098ac-0794-4151-85d7-25a5b99c7302.png" />
          </div>
        </div>
      </div>
    </section>;
};
export default SuperAboutSection;