"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Heart, Maximize2 } from 'lucide-react';
import styles from './ProductCard.module.css';
import { useWishlist } from '@/context/WishlistContext';

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
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const isWishlisted = isInWishlist(id);

    const formatPrice = (price: number) => {
        const symbol = currency === 'INR' ? '₹' : '$';
        return `${symbol} ${price.toLocaleString()}`;
    };

    const handleQuickView = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
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

    // Determine effective tags to show
    const displayTags = [...tags];
    if (salePrice && !displayTags.includes('SALE')) {
        // displayTags.push('SALE'); // Logic might be redundant if data already has it, but safe to leave to data
    }

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageContainer}>
                <Link href={`/product/${id}`}>
                    <img src={image} alt={name} className={styles.image} style={soldOut ? { opacity: 0.6 } : {}} />
                </Link>

                <div className={styles.tags}>
                    {displayTags.map((tag, index) => (
                        <span
                            key={index}
                            className={tag === 'SALE' ? styles.saleTag : styles.tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {soldOut && (
                    <div className={styles.soldOut}>
                        SOLD OUT
                    </div>
                )}

                {/* Quick View Button - Only visible on hover and if enabled */}
                <div className={`${styles.quickViewOverlay} ${isHovered && !soldOut && onQuickView ? styles.visible : ''}`}>
                    {onQuickView && (
                        <button
                            className={styles.quickViewBtn}
                            onClick={handleQuickView}
                        >
                            Quick View
                        </button>
                    )}
                </div>

                {/* Wishlist Button - Always visible or enhanced on hover */}
                <button
                    className={styles.wishlistBtn}
                    onClick={(e) => {
                        e.preventDefault();
                        if (isWishlisted) {
                            removeFromWishlist(id);
                        } else {
                            addToWishlist({ id, name, brand, price, originalPrice, salePrice, discount, image, images, category, sku, tags });
                        }
                    }}
                >
                    <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} color={isWishlisted ? "#ff4d4f" : "currentColor"} />
                </button>
            </div>

            <Link href={`/product/${id}`} className={styles.info}>
                <div className={styles.brand}>{brand}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.pricing}>
                    {originalPrice && salePrice ? (
                        <>
                            <div className={styles.priceRow}>
                                <span className={styles.estRetailLabel}>Est. Retail:</span>
                                <span className={styles.estRetailValue}>{formatPrice(originalPrice)}</span>
                            </div>
                            <div className={styles.priceRow}>
                                <span className={styles.ourPriceLabel}>Our Price:</span>
                                <span className={styles.ourPriceValue}>{formatPrice(salePrice)}</span>
                                <span className={styles.originalPriceStruck}>{formatPrice(originalPrice)}</span>
                            </div>
                            {discount && (
                                <div className={styles.priceRow}>
                                    <span className={styles.discountHighlight}>{formatPrice(salePrice)}</span>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className={styles.price}>{formatPrice(price)}</div>
                    )}
                </div>
            </Link>
        </div>
    );
}
