"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingBag, User, ChevronDown, Facebook, Instagram, Youtube } from 'lucide-react';
import styles from './Header.module.css';
import { useCart } from '@/context/CartContext';

export default function Header() {
    const messages = [
        "100% AUTHENTICATED LUXURY PRODUCTS",
        "Subscribe for latest arrivals",
        "USE CODE MYFIRST TO GET RS.2000 OFF ON YOUR FIRST ORDER ABOVE RS.15,000",
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currency, setCurrency] = useState('INR');
    const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Scroll State
    const [showTopBar, setShowTopBar] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [messages.length]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(`.${styles.currencySelector}`)) {
                setShowCurrencyDropdown(false);
            }
        };
        if (showCurrencyDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCurrencyDropdown]);

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 10);

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowTopBar(false);
            } else {
                setShowTopBar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleCurrencyChange = (newCurrency: string) => {
        setCurrency(newCurrency);
        setShowCurrencyDropdown(false);
    };

    const { cartCount } = useCart();

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${!showTopBar ? styles.hideTop : ''}`}>

            <div className={styles.topBarWrapper}>
                <div className={styles.topBar}>
                    <div className={styles.topBarLeft}>
                        <div className={styles.currencySelector}>
                            <button
                                className={styles.currencyButton}
                                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                            >
                                {currency === 'INR' ? '₹ INR' : '$ USD'}
                                <ChevronDown size={14} />
                            </button>
                            {showCurrencyDropdown && (
                                <div className={styles.currencyDropdown}>
                                    <button
                                        onClick={() => handleCurrencyChange('INR')}
                                        className={currency === 'INR' ? styles.active : ''}
                                    >
                                        ₹ INR
                                    </button>
                                    <button
                                        onClick={() => handleCurrencyChange('USD')}
                                        className={currency === 'USD' ? styles.active : ''}
                                    >
                                        $ USD
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={styles.topBarCenter}>
                        {messages[currentMessageIndex]}
                    </div>

                    <div className={styles.topBarRight}>
                        <a href="https://www.facebook.com/tangerineluxury" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
                            <Facebook size={16} className={styles.socialIcon} />
                        </a>
                        <a href="https://www.instagram.com/tangerineluxury" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
                            <Instagram size={16} className={styles.socialIcon} />
                        </a>
                        <a href="https://www.youtube.com/@tangerineluxury" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
                            <Youtube size={16} className={styles.socialIcon} />
                        </a>
                    </div>
                </div>
            </div>


            <div className={styles.mainBar}>
                <div className={styles.logoSection}>

                    <Link href="/" className={styles.logo}>
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, marginLeft: '10px' }}>
                            <span style={{ fontSize: '1.2rem', letterSpacing: '1px', fontWeight: 'bold' }}>TANGERINE</span>
                            <span style={{ fontSize: '0.8rem', letterSpacing: '3px', fontWeight: 'bold' }}>LUXURY</span>
                        </div>
                    </Link>
                </div>

                <form onSubmit={handleSearch} className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search luxury items..."
                        className={styles.searchParams}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer' }} className={styles.searchIcon}>
                        <Search size={18} />
                    </button>
                </form>

                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/new-arrivals" className={styles.navLink}>Just In</Link>
                    </div>

                    {/* Women Mega Menu */}
                    <div className={styles.navItem}>
                        <Link href="/women" className={styles.navLink}>Women</Link>
                        <div className={styles.megaMenu}>
                            <div>
                                <Image src="https://via.placeholder.com/300x400" alt="Women New Collection" className={styles.menuImage} width={300} height={400} />
                                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Link href="/women/new" style={{ textDecoration: 'underline' }}>Shop New Arrivals</Link>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Bags</h4>
                                <ul>
                                    <li><Link href="/women/bags/tote">Tote Bags</Link></li>
                                    <li><Link href="/women/bags/shoulder">Shoulder Bags</Link></li>
                                    <li><Link href="/women/bags/clutch">Clutch</Link></li>
                                    <li><Link href="/women/bags/sling">Sling Bags</Link></li>
                                    <li><Link href="/women/bags/mini">Mini Bags</Link></li>
                                    <li><Link href="/women/bags/satchel">Satchel Bags</Link></li>
                                    <li><Link href="/women/bags/handbags">Handbags</Link></li>
                                    <li><Link href="/women/bags/belt">Beltbag</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Clothing</h4>
                                <ul>
                                    <li><Link href="/women/clothing/dresses">Dresses & Gowns</Link></li>
                                    <li><Link href="/women/clothing/skirts">Skirts & Shorts</Link></li>
                                    <li><Link href="/women/clothing/tshirts">T Shirts & Shirts</Link></li>
                                    <li><Link href="/women/clothing/trousers">Trousers & Denims</Link></li>
                                    <li><Link href="/women/clothing/jackets">Jackets & Outerwear</Link></li>
                                    <li><Link href="/women/clothing/jumpsuits">Jumpsuits</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Footwear</h4>
                                <ul>
                                    <li><Link href="/women/footwear/boots">Boots</Link></li>
                                    <li><Link href="/women/footwear/espadrilles">Espadrilles</Link></li>
                                    <li><Link href="/women/footwear/flats">Flats & Slippers</Link></li>
                                    <li><Link href="/women/footwear/heels">Heels & Wedges</Link></li>
                                    <li><Link href="/women/footwear/sneakers">Sneakers</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Accessories</h4>
                                <ul>
                                    <li><Link href="/women/accessories/belts">Belts</Link></li>
                                    <li><Link href="/women/accessories/watches">Watches</Link></li>
                                    <li><Link href="/women/accessories/scarves">Shawls & Scarves</Link></li>
                                    <li><Link href="/women/accessories/sunglasses">Sunglasses</Link></li>
                                    <li><Link href="/women/accessories/jewelry">Jewelry</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.navItem}>
                        <Link href="/men" className={styles.navLink}>Men</Link>
                        <div className={styles.megaMenu}>
                            <div>
                                <Image src="https://via.placeholder.com/300x400" alt="Men New Collection" className={styles.menuImage} width={300} height={400} />
                                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Link href="/men/new" style={{ textDecoration: 'underline' }}>Shop New Arrivals</Link>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Bags & Accessories</h4>
                                <ul>
                                    <li><Link href="/men/bags/messenger">Messenger Bags</Link></li>
                                    <li><Link href="/men/bags/backpacks">Backpacks</Link></li>
                                    <li><Link href="/men/bags/wallets">Wallets</Link></li>
                                    <li><Link href="/men/accessories/belts">Belts</Link></li>
                                    <li><Link href="/men/accessories/sunglasses">Sunglasses</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Clothing</h4>
                                <ul>
                                    <li><Link href="/men/clothing/shirts">Shirts</Link></li>
                                    <li><Link href="/men/clothing/tshirts">T-Shirts</Link></li>
                                    <li><Link href="/men/clothing/jackets">Jackets</Link></li>
                                    <li><Link href="/men/clothing/trousers">Trousers</Link></li>
                                    <li><Link href="/men/clothing/suits">Suits</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Footwear</h4>
                                <ul>
                                    <li><Link href="/men/footwear/sneakers">Sneakers</Link></li>
                                    <li><Link href="/men/footwear/loafers">Loafers</Link></li>
                                    <li><Link href="/men/footwear/boots">Boots</Link></li>
                                    <li><Link href="/men/footwear/formal">Formal Shoes</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/kids" className={styles.navLink}>Kids</Link>
                        <div className={styles.megaMenu}>
                            <div>
                                <Image src="https://via.placeholder.com/300x400" alt="Kids New Collection" className={styles.menuImage} width={300} height={400} />
                                <div style={{ marginTop: '10px', textAlign: 'center' }}>
                                    <Link href="/kids/new" style={{ textDecoration: 'underline' }}>Shop New Arrivals</Link>
                                </div>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Girls</h4>
                                <ul>
                                    <li><Link href="/kids/girls/dresses">Dresses</Link></li>
                                    <li><Link href="/kids/girls/clothing">Clothing Sets</Link></li>
                                    <li><Link href="/kids/girls/shoes">Shoes</Link></li>
                                    <li><Link href="/kids/girls/accessories">Accessories</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Boys</h4>
                                <ul>
                                    <li><Link href="/kids/boys/clothing">Clothing Sets</Link></li>
                                    <li><Link href="/kids/boys/shirts">Shirts & T-Shirts</Link></li>
                                    <li><Link href="/kids/boys/pants">Pants & Shorts</Link></li>
                                    <li><Link href="/kids/boys/shoes">Shoes</Link></li>
                                </ul>
                            </div>
                            <div className={styles.menuColumn}>
                                <h4>Baby</h4>
                                <ul>
                                    <li><Link href="/kids/baby/clothing">Clothing</Link></li>
                                    <li><Link href="/kids/baby/shoes">Shoes</Link></li>
                                    <li><Link href="/kids/baby/accessories">Accessories</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/services" className={styles.navLink}>Services</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/sale" className={`${styles.navLink} ${styles.navLinkRed}`}>Sale</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/sell-with-us" className={styles.navLink}>Sell With Us</Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link href="/blog" className={styles.navLink}>Blog</Link>
                    </div>
                </nav>

                <div className={styles.actions}>
                    <Link href="/wishlist"><Heart size={20} className={styles.actionIcon} /></Link>
                    <Link href="/cart" style={{ position: 'relative' }}>
                        <ShoppingBag size={20} className={styles.actionIcon} />
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                background: 'black',
                                color: 'white',
                                borderRadius: '50%',
                                fontSize: '0.6rem',
                                width: '15px',
                                height: '15px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Link href="/account"><User size={20} className={styles.actionIcon} /></Link>
                </div>
            </div>
        </header>
    );
}
