
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Telefone */}
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="sm:ml-4">
                    <h4 className="text-lg font-medium">Telefone</h4>
                    <p className="text-gray-600 break-words">(11) 5555-5555</p>
                    <p className="text-gray-600 break-words">(11) 98765-4321</p>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="sm:ml-4">
                    <h4 className="text-lg font-medium">E-mail</h4>
                    <p className="text-gray-600 break-words">contato@contabilify.com.br</p>
                    <p className="text-gray-600 break-words">atendimento@contabilify.com.br</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="sm:ml-4">
                    <h4 className="text-lg font-medium">Endereço</h4>
                    <p className="text-gray-600 break-words">Av. Paulista, 1000 - Bela Vista</p>
                    <p className="text-gray-600 break-words">São Paulo - SP, 01310-000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Horário de Atendimento</h4>
                <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-600">Sábados: 9h às 13h</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
