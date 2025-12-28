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
  const saleProducts = Array.isArray(saleProductsData) ? saleProductsData : [];

  return (
    <HomeClient
      newArrivals={newArrivals}
      saleProducts={saleProducts}
    />
  );
}
