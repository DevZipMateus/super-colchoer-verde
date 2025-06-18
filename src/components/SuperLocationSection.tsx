
const SuperLocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold mb-6">
            Nossa Localização
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Venha nos visitar em nossa loja no centro de Santa Maria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-gray-700">
                    Esquina com a - Rua Riachuelo<br/>
                    R. Tuiuti, 224 - Centro<br/>
                    Santa Maria - RS, 97050-010
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">Telefone</h3>
                  <p className="text-gray-700">
                    <a href="tel:055-3221-8035" className="hover:text-primary transition-colors">
                      (55) 3221-8035
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">WhatsApp</h3>
                  <p className="text-gray-700">
                    <a 
                      href="https://wa.me/5555991630055" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      (55) 99163-0055
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">E-mail</h3>
                  <p className="text-gray-700">
                    <a 
                      href="mailto:supercolchoes@yahoo.com.br" 
                      className="hover:text-primary transition-colors"
                    >
                      supercolchoes@yahoo.com.br
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/5555991630055" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Fale conosco agora
              </a>
            </div>
          </div>

          <div className="relative h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-53.8067!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              className="w-full h-full rounded-xl shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Super Colchões - Santa Maria RS"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperLocationSection;
