import { fetchProducts } from '@/lib/api';
import HomeClient from './HomeClient';

export const revalidate = 60; // Revalidate every minute

export default async function Home() {
  // Fetch Data Server Side
  // Assuming 'newest' sort exists or backend returns newest by default
  const newArrivalsData = await fetchProducts({ limit: '12', sort: 'newest' });
  const saleProductsData = await fetchProducts({ limit: '10', category: 'sale' });

  // Fallback if API fails or returns empty
  const newArrivals = Array.isArray(newArrivalsData) ? newArrivalsData : [];
  let saleProducts = Array.isArray(saleProductsData) ? saleProductsData : [];

  // MOCK DATA FOR SALE SECTION VISIBILITY (If backend has no sale items)
  if (saleProducts.length === 0) {
    saleProducts = [
      {
        id: 'mock-1',
        name: 'GUCCI CANVAS HOBO BAG',
        brand: 'GUCCI',
        price: 18000,
        originalPrice: 24000,
        salePrice: 18000,
        discount: 25,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80',
        images: ['https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80', 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7'],
        tags: ['SALE', 'NEW WITH TAGS'],
        category: 'Bags',
        sku: 'TL-GU-001'
      },
      {
        id: 'mock-2',
        name: 'SAINT LAURENT WOMENS SUNGLASSES',
        brand: 'SAINT LAURENT',
        price: 12000,
        originalPrice: 15000,
        salePrice: 12000,
        discount: 20,
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80',
        images: ['https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80'],
        tags: ['SALE'],
        category: 'Accessories',
        sku: 'TL-SL-002'
      },
      {
        id: 'mock-3',
        name: 'DIOR CLUB 2 DARK HAVANA',
        brand: 'DIOR',
        price: 25000,
        originalPrice: 32000,
        salePrice: 25000,
        discount: 22,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
        images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80'],
        tags: ['SALE', 'GENTLY USED'],
        category: 'Accessories',
        sku: 'TL-DR-003'
      },
      {
        id: 'mock-4',
        name: 'LOUIS VUITTON SPEEDY 30',
        brand: 'LOUIS VUITTON',
        price: 45000,
        originalPrice: 55000,
        salePrice: 45000,
        discount: 18,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
        images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'],
        tags: ['SALE'],
        category: 'Bags',
        sku: 'TL-LV-004'
      }
    ];
  }

  return (
    <HomeClient
      newArrivals={newArrivals}
      saleProducts={saleProducts}
    />
  );
}

