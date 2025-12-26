"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
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
    onQuickView?: (product: any) => void;
    currency?: string;
}

export default function ProductCard({ 
    id, 
    name, 
    brand, 
    price, 
    originalPrice,
    salePrice,
    discount,
    image, 
    images,
    soldOut = false,
    tags = [],
    category = '',
    sku = '',
    onQuickView,
    currency = 'INR'
}: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const formatPrice = (price: number) => {
        const symbol = currency === 'INR' ? '₹' : '$';
        return `${symbol} ${price.toLocaleString()}`;
    };

    const handleQuickView = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onQuickView) {
            onQuickView({
                id,
                name,
                brand,
                price,
                originalPrice,
                salePrice,
                discount,
                images: images || [image],
                category,
                sku: sku || `TL-${id}`,
                tags
            });
        }
    };

    return (
        <div 
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageContainer}>
                <img src={image} alt={name} className={styles.image} style={soldOut ? { opacity: 0.6 } : {}} />

                {tags.length > 0 && (
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className={tag === 'SALE' ? styles.saleTag : styles.tag}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {soldOut && (
                    <div className={styles.soldOut}>
                        SOLD OUT
                    </div>
                )}

                {isHovered && !soldOut && onQuickView && (
                    <button 
                        className={styles.quickViewBtn}
                        onClick={handleQuickView}
                    >
                        Quick View
                    </button>
                )}

                <button className={styles.wishlistBtn}>
                    <Heart size={18} />
                </button>
            </div>
            <Link href={`/product/${id}`} className={styles.info}>
                <div className={styles.brand}>{brand}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.pricing}>
                    {originalPrice && salePrice && (
                        <>
                            <div className={styles.estRetail}>
                                Est. Retail: {formatPrice(originalPrice)}
                            </div>
                            <div className={styles.ourPrice}>
                                Our Price: {formatPrice(salePrice)}
                            </div>
                            <div className={styles.originalPrice}>
                                {formatPrice(originalPrice)}
                            </div>
                            {discount && (
                                <div className={styles.discountPrice}>
                                    {formatPrice(salePrice)}
                                </div>
                            )}
                        </>
                    )}
                    {!originalPrice && (
                        <div className={styles.price}>{formatPrice(price)}</div>
                    )}
                </div>
            </Link>
        </div>
    );
}
