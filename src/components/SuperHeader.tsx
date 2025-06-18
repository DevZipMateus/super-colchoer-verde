
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const SuperHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Se for o catálogo, redirecionar para a página principal com scroll para a seção
    if (href === '#catalogo') {
      // Se já estiver na página principal, apenas fazer scroll
      if (window.location.pathname === '/' || window.location.pathname === '/super') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se estiver em outra página, redirecionar para a página principal
        window.location.href = '/' + href;
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3' 
          : 'bg-white/90 backdrop-blur-sm py-3 sm:py-4'
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/bca5d742-c756-4a30-b248-b54e13f5badd.png" 
            alt="Super Colchões - Uma escolha inteligente" 
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex xl:space-x-8 lg:space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.href)}
              className="text-sm xl:text-base font-medium text-gray-800 hover:text-primary transition-colors duration-200 relative group px-2 py-1"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-800 hover:text-primary transition-colors touch-manipulation"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'lg:hidden transition-all duration-300 overflow-hidden bg-white shadow-lg',
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <nav className="px-3 sm:px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.href)}
              className="block w-full text-left text-gray-800 hover:text-primary transition-colors duration-200 py-2 px-2 rounded-md hover:bg-gray-50 text-base sm:text-lg touch-manipulation"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SuperHeader;
