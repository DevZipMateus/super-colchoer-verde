
const SuperAboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold mb-6">
            Pioneiros em Santa Maria
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Há 39 anos cuidando do bem-estar e qualidade de vida de nossos clientes. 
            A Super Colchões investe em produtos de alta qualidade, requinte e conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-primary">
                Nossa História
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                Pioneira no ramo de colchões em Santa Maria-RS, dispomos de produtos multimarcas, 
                atendimento diferenciado e exclusivo. Nossa experiência de quase quatro décadas 
                nos permitiu entender exatamente o que nossos clientes precisam.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Investimos continuamente em produtos de alta qualidade, sempre priorizando 
                o requinte e conforto que você merece. Cada colchão é cuidadosamente selecionado 
                para garantir noites de sono perfeitas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-2xl font-heading font-bold text-primary mb-2">39+</div>
                <p className="text-gray-600">Anos de tradição</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="text-2xl font-heading font-bold text-primary mb-2">Multi</div>
                <p className="text-gray-600">Marcas disponíveis</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary/10 rounded-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Loja Super Colchões em Santa Maria - Ambiente familiar e acolhedor"
              className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperAboutSection;
