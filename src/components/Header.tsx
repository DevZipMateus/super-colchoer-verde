
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300 ease-in-out py-4',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="text-2xl font-bold text-primary">Contabilify</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Início', 'Sobre Nós', 'Serviços', 'Planos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative',
                scrolled ? 'text-gray-900' : 'text-gray-800'
              )}
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu - Updated with glass-morphism */}
      <div 
        className={cn(
          'fixed inset-0 backdrop-blur-md bg-slate-900/50 z-40 transform transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        
        <nav className="flex flex-col items-center space-y-6 p-6 mt-4">
          {['Início', 'Sobre Nós', 'Serviços', 'Planos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xl font-medium text-white hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
