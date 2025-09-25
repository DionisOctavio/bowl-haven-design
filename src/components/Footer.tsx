import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage, translations } from '@/hooks/useLanguage';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-light tracking-wide">
              Bowl Collection
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {language === 'es' 
                ? 'Diseños elegantes que transforman cada comida en una experiencia especial.'
                : 'Elegant designs that transform every meal into a special experience.'
              }
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">{t.footer.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">{t.footer.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">{t.footer.phone}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium">{t.footer.social}</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' }
              ].map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Bowl Collection. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;