
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrolled: boolean;
}

const MobileMenuButton = ({ isMenuOpen, toggleMenu, scrolled }: MobileMenuButtonProps) => {
  return (
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
  );
};

export default MobileMenuButton;
