
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface MobileMenuPanelProps {
  isMenuOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const MobileMenuPanel = ({ isMenuOpen, onClose, menuItems }: MobileMenuPanelProps) => {
  return (
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
          onClick={onClose}
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
                onClick={onClose}
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
  );
};

export default MobileMenuPanel;
