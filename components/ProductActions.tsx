"use client";

import { useCart } from "@/context/CartContext";
import { Heart } from "lucide-react";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    image?: string;
    images?: string[];
    brand?: string | { name: string };
    sku?: string;
}

export default function ProductActions({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.salePrice && product.salePrice > 0 ? product.salePrice : product.price,
            image: (product.images && product.images[0]) || product.image || '',
            brand: typeof product.brand === 'object' ? product.brand.name : product.brand,
            sku: product.sku,
            quantity: 1
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
            <button
                className="btn btn-primary"
                style={{ flex: 1, padding: '15px' }}
                onClick={handleAddToCart}
            >
                {added ? "Added to Bag" : "Add to Bag"}
            </button>
            <button className="btn btn-outline" style={{ padding: '15px' }}>
                <Heart />
            </button>
        </div>
    );
}
