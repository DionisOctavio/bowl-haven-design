import { useState, useEffect } from 'react';

export type Language = 'es' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return { language, setLanguage, toggleLanguage };
};

export const translations = {
  es: {
    nav: {
      home: 'Home',
      products: 'Productos',
      collections: 'Colecciones',
      cta: 'Comprar Ahora'
    },
    hero: {
      title: 'Bowl Collection',
      subtitle: 'Explora nuestra colección de bowls que combina estilo y practicidad, perfectos para cualquier mesa.',
      cta: 'Explorar Colección'
    },
    products: {
      title: 'Productos',
      viewDetails: 'Ver Detalles',
      startFrom: 'Desde',
      specialOffer: 'Oferta especial fin de semana',
      discount: '15% de descuento'
    },
    collections: {
      title: 'Colecciones',
      minimalist: {
        title: 'Minimalistas',
        description: 'Diseños limpios y elegantes que complementan cualquier espacio moderno.'
      },
      colorful: {
        title: 'Coloridos',
        description: 'Bowls vibrantes que añaden personalidad y alegría a tu mesa.'
      },
      classic: {
        title: 'Clásicos',
        description: 'Diseños atemporales con acabados tradicionales y elegantes.'
      }
    },
    footer: {
      contact: 'Contacto',
      email: 'info@bowlcollection.com',
      phone: '+34 123 456 789',
      social: 'Síguenos'
    },
    badges: {
      foodGrade: 'Food Grade',
      microwaveSafe: 'Microwave Safe',
      ovenSafe: 'Oven Safe',
      dishwasherSafe: 'Dishwasher Safe'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      collections: 'Collections',
      cta: 'Buy Now'
    },
    hero: {
      title: 'Bowl Collection',
      subtitle: 'Explore our bowl collection that combines style and practicality, perfect for any table.',
      cta: 'Explore Collection'
    },
    products: {
      title: 'Products',
      viewDetails: 'View Details',
      startFrom: 'Starting from',
      specialOffer: 'Special weekend offer',
      discount: '15% off'
    },
    collections: {
      title: 'Collections',
      minimalist: {
        title: 'Minimalist',
        description: 'Clean and elegant designs that complement any modern space.'
      },
      colorful: {
        title: 'Colorful',
        description: 'Vibrant bowls that add personality and joy to your table.'
      },
      classic: {
        title: 'Classic',
        description: 'Timeless designs with traditional and elegant finishes.'
      }
    },
    footer: {
      contact: 'Contact',
      email: 'info@bowlcollection.com',
      phone: '+34 123 456 789',
      social: 'Follow Us'
    },
    badges: {
      foodGrade: 'Food Grade',
      microwaveSafe: 'Microwave Safe',
      ovenSafe: 'Oven Safe',
      dishwasherSafe: 'Dishwasher Safe'
    }
  }
};