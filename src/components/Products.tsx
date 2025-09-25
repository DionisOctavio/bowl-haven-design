import ProductCard from './ProductCard';
import { useLanguage, translations } from '@/hooks/useLanguage';
import bowlSetColorful from '@/assets/bowl-set-colorful.jpg';
import bowlMinimal from '@/assets/bowl-minimal.jpg';
import bowlClassic from '@/assets/bowl-classic.jpg';
import heroBowl from '@/assets/hero-bowl.jpg';

const Products = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const products = [
    {
      id: '1',
      name: 'Sage Elegance Bowl',
      price: 24.99,
      originalPrice: 29.99,
      image: heroBowl,
      badges: ['foodGrade', 'microwaveSafe', 'ovenSafe'],
      description: 'Elegant ceramic bowl with soft sage interior finish.'
    },
    {
      id: '2',
      name: 'Colorful Trio Set',
      price: 45.99,
      image: bowlSetColorful,
      badges: ['foodGrade', 'dishwasherSafe'],
      description: 'Set of three vibrant bowls in blue, cream, and orange.'
    },
    {
      id: '3',
      name: 'Minimalist Collection',
      price: 32.99,
      image: bowlMinimal,
      badges: ['foodGrade', 'microwaveSafe'],
      description: 'Clean lines and neutral tones for modern kitchens.'
    },
    {
      id: '4',
      name: 'Classic Earthware',
      price: 28.99,
      image: bowlClassic,
      badges: ['foodGrade', 'ovenSafe'],
      description: 'Traditional design with warm earth tone finishes.'
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-primary mb-6">
            {t.products.title}
          </h2>
          
          {/* Special offer banner */}
          <div className="inline-flex items-center bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="mr-2">🎉</span>
            {t.products.specialOffer}: {t.products.discount}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Starting price info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {t.products.startFrom} <span className="font-semibold text-primary">€19.99</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;