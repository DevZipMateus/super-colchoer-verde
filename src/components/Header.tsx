
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

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
    <header 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center z-10 relative">
          <div className={cn(
            "text-2xl font-bold transition-colors duration-300",
            scrolled ? "text-primary" : "text-primary"
          )}>
            Contabilify
          </div>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'text-sm font-medium relative inline-flex items-center transition-colors duration-200',
                    'hover:text-primary focus:text-primary',
                    scrolled ? 'text-gray-800' : 'text-gray-800',
                    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0',
                    'after:bg-primary after:transition-all after:duration-300',
                    'hover:after:w-full focus:after:w-full'
                  )}
                >
                  {item.name}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={cn(
            "md:hidden flex items-center justify-center rounded-full p-2 z-50",
            "focus:outline-none transition-colors duration-200",
            scrolled 
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "bg-white/20 backdrop-blur-sm text-primary hover:bg-white/30"
          )}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          'fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div 
        className={cn(
          'fixed top-0 right-0 bottom-0 z-40 w-full max-w-xs bg-white shadow-xl',
          'transform transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="text-xl font-bold text-primary">Contabilify</div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-4 pt-6 pb-8 overflow-y-auto h-[calc(100%-70px)]">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-lg font-medium text-gray-800 hover:text-primary transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">Entre em contato conosco</p>
            <a 
              href="tel:+5500999999999" 
              className="text-primary hover:text-primary/80 font-medium block py-2"
            >
              (00) 99999-9999
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
