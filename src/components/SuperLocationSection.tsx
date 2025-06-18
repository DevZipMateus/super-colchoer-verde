
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl mb-4 text-gray-800">Endereço</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Esquina com a Rua Riachuelo</strong><br />
                R. Tuiuti, 224 - Centro<br />
                Santa Maria - RS<br />
                CEP: 97050-010
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl mb-4 text-gray-800">Horário de Funcionamento</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>Segunda a Sexta:</strong> 8h30 às 18h30</p>
                <p><strong>Sábados:</strong> 8h30 às 17h</p>
                <p><strong>Atendimento sem fechar ao meio-dia</strong></p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-heading font-bold text-xl mb-4 text-gray-800">Contato</h3>
              <div className="text-gray-700 space-y-2">
                <p><strong>Telefone:</strong> (55) 3221-8035</p>
                <p><strong>WhatsApp:</strong> (55) 99163-0055</p>
                <p><strong>E-mail:</strong> supercolchoes@yahoo.com.br</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 relative h-96 lg:h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-53.8067!3d-29.6842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQxJzAzLjEiUyA1M8KwNDgnMjQuMSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
              className="w-full h-full rounded-xl shadow-lg" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Localização Super Colchões - Santa Maria RS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperLocationSection;
