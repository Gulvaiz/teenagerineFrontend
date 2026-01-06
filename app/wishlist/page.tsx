"use client";


import Link from 'next/link';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/ProductCard';
import { Heart } from 'lucide-react';
import styles from './page.module.css';

export default function WishlistPage() {
    const { items } = useWishlist();

    return (
        <>

            <main className={styles.main}>
                <div className={styles.headerSection}>
                    <h1 className={styles.title}>My Wishlist</h1>
                    <p className={styles.subtitle}>Items you've saved for later</p>
                </div>

                {items.length === 0 ? (
                    <div className={styles.emptyContainer}>
                        <div className={styles.heartIconWrapper}>
                            <Heart size={60} color="#e0e0e0" className={styles.emptyHeartIcon} />
                            <div className={styles.starIcon}>★</div>
                        </div>
                        <h2 className={styles.emptyTitle}>Your wishlist is empty</h2>
                        <p className={styles.emptyText}>
                            You haven't saved any items to your wishlist yet.<br />
                            Explore our collections and discover something you'll love.
                        </p>
                        <Link href="/new-arrivals">
                            <button className={styles.startShoppingBtn}>Start Shopping</button>
                        </Link>

                        <div className={styles.quickLinks}>
                            <span className={styles.linkItem}>✨ Trending Items</span>
                            <span className={styles.linkItem}>🔥 New Arrivals</span>
                            <span className={styles.linkItem}>💫 Best Sellers</span>
                        </div>
                    </div>
                ) : (
                    <div className="container" style={{ padding: '0 20px 60px' }}>
                        <div className={styles.grid}>
                            {items.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </main>

        </>
    );
}
