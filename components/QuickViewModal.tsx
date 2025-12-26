"use client";

import { useState } from 'react';
import { X, Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import styles from './QuickViewModal.module.css';

interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    salePrice?: number;
    discount?: number;
    category: string;
    sku: string;
    images: string[];
    tags?: string[];
}

interface QuickViewModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
    onAddToWishlist: (productId: string) => void;
    currency?: string;
}

export default function QuickViewModal({ 
    product, 
    isOpen, 
    onClose, 
    onAddToWishlist,
    currency = 'INR' 
}: QuickViewModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !product) return null;

    const formatPrice = (price: number) => {
        const symbol = currency === 'INR' ? '₹' : '$';
        return `${symbol} ${price.toLocaleString()}`;
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const handleAddToBag = () => {
        // Navigate to cart/checkout
        window.location.href = '/cart';
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                    <X size={24} />
                </button>
                
                <div className={styles.modalContent}>
                    <div className={styles.imageSection}>
                        <div className={styles.mainImageContainer}>
                            <img 
                                src={product.images[currentImageIndex]} 
                                alt={product.name}
                                className={styles.mainImage}
                            />
                            {product.images.length > 1 && (
                                <>
                                    <button 
                                        className={styles.navButton} 
                                        onClick={prevImage}
                                        style={{ left: 10 }}
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button 
                                        className={styles.navButton} 
                                        onClick={nextImage}
                                        style={{ right: 10 }}
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                            <div className={styles.imageCounter}>
                                {currentImageIndex + 1} / {product.images.length}
                            </div>
                        </div>
                        {product.images.length > 1 && (
                            <div className={styles.thumbnails}>
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.thumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    >
                                        <img src={img} alt={`${product.name} view ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.tags}>
                            {product.tags?.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className={tag === 'SALE' ? styles.saleTag : styles.tag}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <h2 className={styles.productName}>{product.name}</h2>
                        
                        <div className={styles.pricing}>
                            {product.originalPrice && (
                                <div className={styles.estRetail}>
                                    Est. Retail: {formatPrice(product.originalPrice)}
                                </div>
                            )}
                            <div className={styles.ourPrice}>
                                Our Price: {formatPrice(product.salePrice || product.price)}
                            </div>
                            {product.originalPrice && product.salePrice && (
                                <>
                                    <div className={styles.originalPrice}>
                                        {formatPrice(product.originalPrice)}
                                    </div>
                                    {product.discount && (
                                        <div className={styles.discount}>
                                            {product.discount}% off
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Category:</span>
                                <span className={styles.detailValue}>{product.category}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>Brand:</span>
                                <span className={styles.detailValue}>{product.brand}</span>
                            </div>
                            <div className={styles.detailItem}>
                                <span className={styles.detailLabel}>SKU:</span>
                                <span className={styles.detailValue}>{product.sku}</span>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button 
                                className={styles.saveButton}
                                onClick={() => onAddToWishlist(product.id)}
                            >
                                <Heart size={18} />
                                Save
                            </button>
                            <Link 
                                href={`/product/${product.id}`}
                                className={styles.viewDetailsButton}
                            >
                                View Details
                            </Link>
                            <button 
                                className={styles.addToBagButton}
                                onClick={handleAddToBag}
                            >
                                <ShoppingBag size={18} />
                                Add to Bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


