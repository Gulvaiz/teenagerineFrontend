"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './HeroCarousel.module.css';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    button1Text: string;
    button1Link: string;
    button2Text: string;
    button2Link: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Luxury Reimagined — For Less",
        subtitle: "Preloved - Reloved",
        description: "Discover authenticated luxury products at unbeatable prices",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&q=80",
        button1Text: "SHOP NOW",
        button1Link: "/new-arrivals",
        button2Text: "SELL WITH US",
        button2Link: "/sell-with-us"
    },
    {
        id: 2,
        title: "Authenticated Luxury",
        subtitle: "100% Verified",
        description: "Every product is carefully authenticated by our experts",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1920&h=1080&fit=crop&q=80",
        button1Text: "SHOP NOW",
        button1Link: "/new-arrivals",
        button2Text: "LEARN MORE",
        button2Link: "/about"
    },
    {
        id: 3,
        title: "New Arrivals Weekly",
        subtitle: "Sale Up to 70% Off",
        description: "Fresh luxury items added every week",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&h=1080&fit=crop&q=80",
        button1Text: "SHOP NOW",
        button1Link: "/new-arrivals",
        button2Text: "VIEW COLLECTION",
        button2Link: "/women"
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 300);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 300);
    };

    const goToSlide = (index: number) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide(index);
            setIsTransitioning(false);
        }, 300);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <section 
            className={styles.heroSection}
            style={{ backgroundImage: `url(${currentSlideData.image})` }}
        >
            <div className={styles.overlay} />
            
            <button 
                className={`${styles.navButton} ${styles.left}`} 
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <div className={`${styles.heroContent} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
                <h2 className={styles.heroSubtitle}>{currentSlideData.subtitle}</h2>
                <h1 className={styles.heroTitle}>{currentSlideData.title}</h1>
                <p className={styles.heroDescription}>{currentSlideData.description}</p>
                <div className={styles.heroButtons}>
                    <Link href={currentSlideData.button1Link} className="btn btn-white">
                        {currentSlideData.button1Text}
                    </Link>
                    <Link href={currentSlideData.button2Link} className="btn btn-white">
                        {currentSlideData.button2Text}
                    </Link>
                </div>
            </div>

            <button 
                className={`${styles.navButton} ${styles.navNext}`}
                onClick={nextSlide}
                style={{ right: 20 }}
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            <div className={styles.dots}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}


