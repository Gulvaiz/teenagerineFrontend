"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

export default function Cart() {
    const { items, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <>
            <Header />
            <main className="container" style={{ padding: '40px 20px', minHeight: '60vh' }}>
                <h1 className="section-title">Shopping Bag</h1>

                {items.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                        <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>Your bag is currently empty.</p>
                        <Link href="/new-arrivals">
                            <button className="btn btn-primary">Continue Shopping</button>
                        </Link>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
                        {/* Cart Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {items.map((item) => (
                                <div key={item.id} style={{ display: 'flex', gap: '20px', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
                                    <div style={{ width: '100px', height: '120px', position: 'relative', flexShrink: 0 }}>
                                        <Image
                                            src={item.image || 'https://via.placeholder.com/100x120'}
                                            alt={item.name}
                                            fill
                                            style={{ objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                                <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.brand}</h3>
                                                <button onClick={() => removeFromCart(item.id)} style={{ color: '#999', background: 'none', border: 'none', cursor: 'pointer' }}>
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                            <Link href={`/product/${item.id}`} style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'block' }}>{item.name}</Link>
                                            <div style={{ fontSize: '1rem', fontWeight: 700 }}>₹ {item.price.toLocaleString()}</div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    style={{ padding: '5px 10px', background: 'none', border: 'none', cursor: 'pointer' }}
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span style={{ padding: '0 10px', fontSize: '0.9rem' }}>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    style={{ padding: '5px 10px', background: 'none', border: 'none', cursor: 'pointer' }}
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div style={{ border: '1px solid #eee', padding: '30px', borderRadius: '8px', height: 'fit-content' }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>Order Summary</h3>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#666' }}>
                                <span>Subtotal</span>
                                <span>₹ {cartTotal.toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#666' }}>
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <span>Total</span>
                                <span>₹ {cartTotal.toLocaleString()}</span>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '30px', padding: '15px' }}>
                                Proceed to Checkout
                            </button>

                            <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#888', textAlign: 'center' }}>
                                Safe & Secure Checkout with encrypted payment.
                            </p>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
