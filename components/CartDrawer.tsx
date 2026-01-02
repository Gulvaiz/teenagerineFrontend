"use client";

import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CartDrawer.module.css';
import { useEffect, useRef } from 'react';

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, items, removeFromCart, updateQuantity, cartTotal } = useCart();
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isCartOpen) {
                setIsCartOpen(false);
            }
        };

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
            // console.log("CartDrawer unmounting or closing, restoring overflow");
        };
    }, [isCartOpen, setIsCartOpen]);

    if (!isCartOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer} ref={drawerRef}>
                <div className={styles.header}>
                    <h2>Your Cart ({items.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} className={styles.closeBtn}>
                        <X size={24} />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className={styles.emptyState}>
                        <div className={styles.emptyIconWrapper}>
                            <ShoppingBag size={40} color="#ccc" />
                        </div>
                        <h3>Your cart is empty</h3>
                        <p>Looks like you haven't added any items to your cart yet</p>
                        <button
                            className={styles.startShoppingBtn}
                            onClick={() => setIsCartOpen(false)}
                        >
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.itemsList}>
                            {items.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <div className={styles.itemImage}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={80}
                                            height={100}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <div className={styles.itemHeader}>
                                            <span className={styles.itemBrand}>{item.brand}</span>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className={styles.removeBtn}
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <Link href={`/product/${item.id}`} onClick={() => setIsCartOpen(false)} className={styles.itemName}>
                                            {item.name}
                                        </Link>
                                        <div className={styles.itemPrice}>₹ {item.price.toLocaleString()}</div>

                                        <div className={styles.quantityControls}>
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                                <Minus size={14} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.totalRow}>
                                <span>Subtotal</span>
                                <span>₹ {cartTotal.toLocaleString()}</span>
                            </div>
                            <p className={styles.shippingNote}>Shipping & taxes calculated at checkout</p>
                            <Link href="/cart" onClick={() => setIsCartOpen(false)}>
                                <button className={styles.viewCartBtn}>
                                    View Cart
                                </button>
                            </Link>
                            <button className={styles.checkoutBtn}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
