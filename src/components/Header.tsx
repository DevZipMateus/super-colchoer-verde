
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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
    
    // Close menu when resizing from mobile to desktop
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen, isMobile]);

  const menuItems = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre Nós', href: '#sobre-nós' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Planos', href: '#planos' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className={cn(
      'fixed w-full z-50 transition-all duration-300 ease-in-out py-4',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center z-50 relative">
          <div className="text-2xl font-bold text-primary">Contabilify</div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative group',
                scrolled ? 'text-gray-900' : 'text-gray-800'
              )}
            >
              {item.name}
              <span className="absolute left-0 bottom--1 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 z-50"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu - Glass-morphism style */}
      <div 
        className={cn(
          'fixed inset-0 z-40 transform transition-all duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div 
          className="h-full flex flex-col"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 py-20">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-2xl font-medium text-white hover:text-primary transition-all transform hover:scale-105',
                  'px-6 py-2 relative group'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="absolute left-0 bottom-0 h-0.5 bg-primary w-0 group-hover:w-full transition-all duration-300"></span>
                {item.name}
              </a>
            ))}
          </div>

          {/* Bottom section with contact or additional links */}
          <div className="mt-auto mb-10 text-center">
            <p className="text-white/80 text-sm">Entre em contato conosco</p>
            <a href="tel:+5500999999999" className="text-white hover:text-primary text-lg transition-colors">
              (00) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
