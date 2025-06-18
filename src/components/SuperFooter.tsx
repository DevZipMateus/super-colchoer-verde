const SuperFooter = () => {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-primary">
              Super Colchões
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Há 39 anos cuidando do bem-estar e qualidade de vida de nossos clientes em Santa Maria-RS.
            </p>
            <p className="text-primary font-medium">
              Super colchões, uma escolha inteligente
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-gray-50">Contato</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-medium text-slate-50">Telefone:</span><br />
                <a href="tel:055-3221-8035" className="hover:text-primary transition-colors">
                  (55) 3221-8035
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-gray-50">WhatsApp:</span><br />
                <a href="https://wa.me/5555991630055" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (55) 99163-0055
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-slate-50">E-mail:</span><br />
                <a href="mailto:supercolchoes@yahoo.com.br" className="hover:text-primary transition-colors">
                  supercolchoes@yahoo.com.br
                </a>
              </p>
            </div>
          </div>

          {/* Localização */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg text-gray-50">Localização</h4>
            <div className="text-gray-300">
              <p className="text-gray-50">Esquina com a - Rua Riachuelo</p>
              <p className="text-gray-50">R. Tuiuti, 224 - Centro</p>
              <p className="text-gray-50">Santa Maria - RS</p>
              <p className="text-gray-50">CEP: 97050-010</p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/supercolchoesumaescolhainteligente" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/super_colchoes/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.291C3.85 14.437 3.025 12.759 3.025 10.892c0-1.867.825-3.546 2.101-4.805.875-.801 2.026-1.291 3.323-1.291 1.297 0 2.448.49 3.323 1.291 1.276 1.259 2.101 2.938 2.101 4.805 0 1.867-.825 3.546-2.101 4.805-.875.801-2.026 1.291-3.323 1.291zm7.265-9.209c-.553 0-1.001-.448-1.001-1.001s.448-1.001 1.001-1.001 1.001.448 1.001 1.001-.448 1.001-1.001 1.001z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCtNbeMmIUFsQ8jSULkOYIcQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Super Colchões. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              39 anos de tradição em Santa Maria-RS
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default SuperFooter;