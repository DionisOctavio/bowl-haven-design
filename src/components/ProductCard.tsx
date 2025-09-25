import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage, translations } from '@/hooks/useLanguage';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges: string[];
  description: string;
}

const ProductCard = ({ name, price, originalPrice, image, badges, description }: ProductCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-smooth">
      {/* Image */}
      <div className="aspect-square bg-warm-beige rounded-xl mb-6 p-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-smooth"
        />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="product-title text-primary">{name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <Badge key={badge} variant="secondary" className="text-xs">
              {t.badges[badge as keyof typeof t.badges] || badge}
            </Badge>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                €{originalPrice.toFixed(2)}
              </span>
            )}
            <span className="product-price text-primary">
              €{price.toFixed(2)}
            </span>
          </div>

          <Button size="sm" variant="outline" className="hover:bg-accent hover:text-accent-foreground">
            {t.products.viewDetails}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;