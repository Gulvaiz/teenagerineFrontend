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

interface HomeClientProps {
    newArrivals: any[];
    saleProducts: any[];
}

export default function HomeClient({ newArrivals, saleProducts }: HomeClientProps) {
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
                        <h2 className="section-title">New Arrivals</h2>
                        <div className={styles.productsGrid}>
                            {newArrivals.slice(0, 4).map(p => (
                                <ProductCard
                                    key={p.id}
                                    {...p}
                                    onQuickView={handleQuickView}
                                />
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
                {saleProducts.length > 0 && (
                    <SaleCarousel
                        products={saleProducts}
                        onQuickView={handleQuickView}
                    />
                )}

                {/* BESTSELLERS SECTION - reusing newArrivals for now as fallback if no dedicated list */}
                <section className={styles.bestsellersSection}>
                    <div className="container">
                        <h2 className="section-title">Bestsellers</h2>
                        <div className={styles.productsGrid}>
                            {newArrivals.slice(4, 8).map(p => (
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
