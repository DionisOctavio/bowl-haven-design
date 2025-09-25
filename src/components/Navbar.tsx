import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, translations } from '@/hooks/useLanguage';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-light tracking-wide text-primary">
            Bowl Collection
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-smooth">
              {t.nav.home}
            </a>
            <a href="#products" className="text-foreground hover:text-accent transition-smooth">
              {t.nav.products}
            </a>
            <a href="#collections" className="text-foreground hover:text-accent transition-smooth">
              {t.nav.collections}
            </a>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Language selector */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="p-2"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>

            {/* CTA Button */}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t.nav.cta}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;