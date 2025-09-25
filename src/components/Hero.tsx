import { Button } from '@/components/ui/button';
import { useLanguage, translations } from '@/hooks/useLanguage';
import heroBowl from '@/assets/hero-bowl.jpg';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="display-title text-primary">
              {t.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            >
              {t.hero.cta}
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-card rounded-3xl p-8 shadow-lg">
              <img
                src={heroBowl}
                alt="Elegant ceramic bowl"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-sage text-sage-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Premium Quality
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Food Grade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;