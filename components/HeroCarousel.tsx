"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroCarousel.module.css";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Luxury Reimagined — For Less.",
    image: "/m27dgtfwc74xlsrtzw6u.jpg",
    button1Text: "SHOP NOW",
    button1Link: "/new-arrivals",
    button2Text: "SELL WITH US",
    button2Link: "/sell-with-us",
  },
  {
    id: 2,
    subtitle: "Preloved – Reloved",
    title: "Luxury you Admire",
    image: "/ubfbrlytus86gotvb4vl.jpg",
    button1Text: "SHOP NOW",
    button1Link: "/new-arrivals",
    button2Text: "SELL WITH US",
    button2Link: "/sell-with-us",
  },
];

const AUTO_PLAY_DELAY = 5000;
const TRANSITION_DURATION = 300;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, AUTO_PLAY_DELAY);
    return clearTimers;
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className={styles.overlay} />

      {/* Prev */}
      <button
        className={`${styles.navButton} ${styles.navPrev}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Content */}
      <div
        className={`${styles.heroContent} ${
          isTransitioning ? styles.fadeOut : styles.fadeIn
        }`}
      >
        {slide.subtitle && (
          <h2 className={styles.heroSubtitle}>{slide.subtitle}</h2>
        )}

        <h1 className={styles.heroTitle}>{slide.title}</h1>

        <div className={styles.heroButtons}>
          <Link href={slide.button1Link} className="btn btn-white">
            {slide.button1Text}
          </Link>
          <Link href={slide.button2Link} className="btn btn-white">
            {slide.button2Text}
          </Link>
        </div>
      </div>

      {/* Next */}
      <button
        className={`${styles.navButton} ${styles.navNext}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentSlide ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
