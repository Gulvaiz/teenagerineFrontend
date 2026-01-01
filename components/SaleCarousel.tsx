"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import styles from "./SaleCarousel.module.css";

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
  showMore?: boolean;
}

const AUTO_SLIDE_INTERVAL = 2000; // 2 seconds per shift
const TITLE_TOGGLE_DELAY = 2500;

export default function SaleCarousel({
  products,
  onQuickView,
  currency = "INR",
  showMore = false,
}: SaleCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outlineTitle, setOutlineTitle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Show 4 items at a time
  const itemsPerView = 4;
  const totalItems = products.length;

  /* ---------- AUTO SLIDE ---------- */
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered, totalItems]);

  /* ---------- TITLE TOGGLE ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setOutlineTitle((prev) => !prev);
    }, TITLE_TOGGLE_DELAY);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      // Loop back to 0 if we reach the end (considering itemsPerView)
      if (prev >= totalItems - itemsPerView) {
        return 0; // Check if we want strictly 1-by-1 endless or jump back
        // If we want infinite seamless, we need cloning.
        // For simple carousel, jumping back to 0 is standard.
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return Math.max(0, totalItems - itemsPerView);
      }
      return prev - 1;
    });
  };

  return (
    <section className={styles.carouselContainer}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2
          className={`${styles.title} ${outlineTitle ? styles.outline : styles.solid
            }`}
        >
          SALE IS LIVE
        </h2>
      </div>

      {/* CAROUSEL */}
      <div
        className={styles.carousel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* LEFT ARROW */}
        <button
          className={`${styles.carouselArrow} ${styles.left}`}
          onClick={prevSlide}
          aria-label="Previous product"
        >
          <ChevronLeft size={22} />
        </button>

        {/* PRODUCTS VIEWPORT */}
        <div className={styles.viewport}>
          <div
            className={styles.productsWrapper}
            style={{
              // Shift by 1 item width percentage (100% / itemsPerView)
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`${styles.productItem} ${product.soldOut ? styles.soldOutCard : ""
                  }`}
              >
                <ProductCard
                  {...product}
                  onQuickView={onQuickView}
                  currency={currency}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          className={`${styles.carouselArrow} ${styles.right}`}
          onClick={nextSlide}
          aria-label="Next product"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* SHOW MORE */}
      {showMore && (
        <div className={styles.showMoreContainer}>
          <Link href="/sale" className={styles.showMoreButton}>
            Show more <span className={styles.showMoreArrow}>→</span>
          </Link>
        </div>
      )}
    </section>
  );
}
