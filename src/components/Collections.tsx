import { useLanguage, translations } from '@/hooks/useLanguage';
import bowlMinimal from '@/assets/bowl-minimal.jpg';
import bowlSetColorful from '@/assets/bowl-set-colorful.jpg';
import bowlClassic from '@/assets/bowl-classic.jpg';

const Collections = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const collections = [
    {
      id: 'minimalist',
      title: t.collections.minimalist.title,
      description: t.collections.minimalist.description,
      image: bowlMinimal,
      gradient: 'from-warm-beige to-cool-gray'
    },
    {
      id: 'colorful',
      title: t.collections.colorful.title,
      description: t.collections.colorful.description,
      image: bowlSetColorful,
      gradient: 'from-accent/20 to-sage/20'
    },
    {
      id: 'classic',
      title: t.collections.classic.title,
      description: t.collections.classic.description,
      image: bowlClassic,
      gradient: 'from-muted to-secondary'
    }
  ];

  return (
    <section id="collections" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-primary">
            {t.collections.title}
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-smooth"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-80 z-10`} />
              
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <div className="space-y-4">
                  <h3 className="text-2xl font-light tracking-wide">
                    {collection.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth z-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;