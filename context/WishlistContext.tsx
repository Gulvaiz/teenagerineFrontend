"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface WishlistItem {
    id: string;
    name: string;
    price: number;
    image: string;
    brand: string;
    sku?: string;
    originalPrice?: number;
    salePrice?: number;
    discount?: number;
    tags?: string[];
    soldOut?: boolean;
    category?: string;
    images?: string[];
}

interface WishlistContextType {
    items: WishlistItem[];
    addToWishlist: (item: WishlistItem) => void;
    removeFromWishlist: (itemId: string) => void;
    isInWishlist: (itemId: string) => boolean;
    wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<WishlistItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            try {
                setItems(JSON.parse(savedWishlist));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('wishlist', JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addToWishlist = (newItem: WishlistItem) => {
        setItems(prev => {
            if (prev.some(item => item.id === newItem.id)) {
                return prev;
            }
            return [...prev, newItem];
        });
    };

    const removeFromWishlist = (itemId: string) => {
        setItems(prev => prev.filter(item => item.id !== itemId));
    };

    const isInWishlist = (itemId: string) => {
        return items.some(item => item.id === itemId);
    };

    const wishlistCount = items.length;

    return (
        <WishlistContext.Provider value={{
            items,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
            wishlistCount
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
}
