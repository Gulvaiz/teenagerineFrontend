"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import SaleCarousel from '@/components/SaleCarousel';
import QuickViewModal from '@/components/QuickViewModal';
import ProductCard from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

// Products with Unsplash images
const PRODUCTS = [
  { 
    id: '1', 
    name: 'Womens Gold Tone Cat Eye Sunglasses', 
    brand: 'Dolce & Gabbana', 
    price: 15490, 
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80'
    ],
    category: 'sunglasses',
    tags: ['New With Tags']
  },
  { 
    id: '2', 
    name: 'Black Quilted Leather Bag', 
    brand: 'Chanel', 
    price: 450000, 
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
  { 
    id: '3', 
    name: 'Monogram Canvas Speedy', 
    brand: 'Louis Vuitton', 
    price: 125000, 
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
  { 
    id: '4', 
    name: 'Red Leather Crossbody', 
    brand: 'Gucci', 
    price: 98000, 
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
  { 
    id: '5', 
    name: 'Designer Handbag Collection', 
    brand: 'Prada', 
    price: 185000, 
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
  { 
    id: '6', 
    name: 'Luxury Leather Tote', 
    brand: 'Hermès', 
    price: 320000, 
    image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
  { 
    id: '7', 
    name: 'Classic Designer Bag', 
    brand: 'Fendi', 
    price: 145000, 
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
  { 
    id: '8', 
    name: 'Premium Leather Accessories', 
    brand: 'Bottega Veneta', 
    price: 210000, 
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags']
  },
];

// Sale products with pricing details
const SALE_PRODUCTS = [
  {
    id: '9',
    name: 'GUCCI CANVAS HOBO BAG',
    brand: 'GUCCI',
    originalPrice: 75000,
    salePrice: 19000,
    price: 19000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&q=80',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags', 'SALE']
  },
  {
    id: '10',
    name: 'GUCCI MONOGRAM METALIC SHIMMER BAG',
    brand: 'GUCCI',
    originalPrice: 110000,
    salePrice: 25000,
    price: 25000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags', 'SALE']
  },
  {
    id: '11',
    name: 'MICHAEL KORS PARKER THONG FLATS',
    brand: 'MICHAEL KORS',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&q=80'
    ],
    category: 'footwear',
    tags: ['New With Tags'],
    soldOut: true
  },
  {
    id: '12',
    name: 'SAINT LAURENT YSL OPYUM DOUBLE TOUR',
    brand: 'SAINT LAURENT',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&h=500&fit=crop&q=80'
    ],
    category: 'accessories',
    tags: ['New With Tags'],
    soldOut: true
  },
  {
    id: '13',
    name: 'YVES SAINT LAURENT WOMENS SUNGLASSES',
    brand: 'SAINT LAURENT',
    originalPrice: 35500,
    salePrice: 18000,
    price: 18000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80'
    ],
    category: 'sunglasses',
    tags: ['New With Tags', 'SALE']
  },
  {
    id: '14',
    name: 'Designer Leather Handbag',
    brand: 'PRADA',
    originalPrice: 95000,
    salePrice: 28000,
    price: 28000,
    discount: 15,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&q=80'
    ],
    category: 'bags',
    tags: ['New With Tags', 'SALE']
  },
  {
    id: '15',
    name: 'Luxury Designer Wallet',
    brand: 'HERMÈS',
    originalPrice: 45000,
    salePrice: 15000,
    price: 15000,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=500&fit=crop&q=80'
    ],
    category: 'accessories',
    tags: ['New With Tags', 'SALE']
  },
  {
    id: '16',
    name: 'Designer Sunglasses Collection',
    brand: 'CELINE',
    originalPrice: 32000,
    salePrice: 12000,
    price: 12000,
    discount: 12,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&q=80'
    ],
    category: 'sunglasses',
    tags: ['New With Tags', 'SALE']
  }
];

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: any) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleCloseQuickView = () => {
    setIsQuickViewOpen(false);
    setTimeout(() => setQuickViewProduct(null), 300);
  };

  const handleAddToWishlist = (productId: string) => {
    // Add to wishlist logic here
    console.log('Added to wishlist:', productId);
  };

  return (
    <>
      <Header />

      <main>
        {/* HERO CAROUSEL */}
        <HeroCarousel />

        {/* FEATURED SECTION */}
        <section className={styles.featuredSection}>
          <div className="container">
            <h2 className="section-title">SALE IS LIVE</h2>
            <div className={styles.productsGrid}>
              {PRODUCTS.slice(0, 4).map(p => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
            <div className={styles.viewAllContainer}>
              <Link href="/new-arrivals" className="btn btn-outline">
                View All <ArrowRight size={16} style={{ marginLeft: 8 }} />
              </Link>
            </div>
          </div>
        </section>

        {/* CATEGORIES BANNER */}
        <section className={styles.categoriesSection}>
          <div className="container">
            <div className={styles.categoriesGrid}>
              <Link href="/women" className={styles.categoryCard}>
                <div className={styles.categoryImage} style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=600&fit=crop&q=80")'
                }}>
                  <div className={styles.categoryOverlay}>
                    <h3 className={styles.categoryTitle}>Shop Women</h3>
                    <p className={styles.categorySubtitle}>Explore Collection</p>
                  </div>
                </div>
              </Link>
              <Link href="/men" className={styles.categoryCard}>
                <div className={styles.categoryImage} style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&h=600&fit=crop&q=80")'
                }}>
                  <div className={styles.categoryOverlay}>
                    <h3 className={styles.categoryTitle}>Shop Men</h3>
                    <p className={styles.categorySubtitle}>Explore Collection</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* SALE IS LIVE SECTION */}
        <SaleCarousel 
          products={SALE_PRODUCTS} 
          onQuickView={handleQuickView}
        />

        {/* BESTSELLERS SECTION */}
        <section className={styles.bestsellersSection}>
          <div className="container">
            <h2 className="section-title">Bestsellers</h2>
            <div className={styles.productsGrid}>
              {PRODUCTS.slice(4, 8).map(p => (
                <ProductCard 
                  key={p.id} 
                  {...p} 
                  onQuickView={handleQuickView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className={styles.newsletterSection}>
          <div className="container">
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Stay in the Loop</h2>
              <p className={styles.newsletterSubtitle}>
                Subscribe to get updates on new arrivals and exclusive offers
              </p>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className={styles.newsletterInput}
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={handleCloseQuickView}
        onAddToWishlist={handleAddToWishlist}
      />
    </>
  );
}
