"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import styles from './SaleCarousel.module.css';

interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    salePrice?: number;
    discount?: number;
    image: string;
    images?: string[];
    soldOut?: boolean;
    tags?: string[];
    category?: string;
    sku?: string;
}

interface SaleCarouselProps {
    products: Product[];
    onQuickView: (product: Product) => void;
    currency?: string;
}

export default function SaleCarousel({ products, onQuickView, currency = 'INR' }: SaleCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;

    const nextSlide = () => {
        setCurrentIndex((prev) => 
            prev + itemsPerView >= products.length ? 0 : prev + itemsPerView
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => 
            prev - itemsPerView < 0 
                ? Math.max(0, products.length - itemsPerView) 
                : prev - itemsPerView
        );
    };

    return (
        <section className={styles.carouselContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>SALE IS LIVE</h2>
                <div className={styles.navigation}>
                    <button 
                        className={styles.navButton} 
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Previous products"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        className={styles.navButton} 
                        onClick={nextSlide}
                        disabled={currentIndex + itemsPerView >= products.length}
                        aria-label="Next products"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className={styles.carousel}>
                <div 
                    className={styles.productsWrapper}
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                    {products.map((product) => (
                        <div key={product.id} className={styles.productItem}>
                            <ProductCard
                                {...product}
                                onQuickView={onQuickView}
                                currency={currency}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.showMoreContainer}>
                <Link href="/sale" className={styles.showMoreButton}>
                    Show more <span className={styles.showMoreArrow}>→</span>
                </Link>
            </div>
        </section>
    );
}
