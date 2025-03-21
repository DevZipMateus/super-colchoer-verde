
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <div
        className={cn(
          "text-3xl font-bold transition-colors duration-300",
          scrolled ? "text-primary" : "text-primary"
        )}
      >
        Contabilify
      </div>
    </a>
  );
};

export default Logo;
