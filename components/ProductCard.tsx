"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import styles from "./ProductCard.module.css";
import { useWishlist } from "@/context/WishlistContext";

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
  category = "",
  sku = "",
  onQuickView,
  currency = "INR",
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(id);

  const formatPrice = (value: number) => {
    const symbol = currency === "INR" ? "₹" : "$";
    return `${symbol}${value.toLocaleString()}`;
  };

  /** ---------- QUICK VIEW HANDLER ---------- */
  const openQuickView = () => {
    if (!onQuickView || soldOut) return;

    onQuickView({
      id,
      name,
      brand,
      price,
      originalPrice,
      salePrice,
      discount,
      images: images && images.length ? images : [image],
      category,
      sku: sku || `TL-${id}`,
      tags,
    });
  };

  /** ---------- CARD CLICK ---------- */
  const handleCardClick = (e: React.MouseEvent) => {
    if (onQuickView) {
      e.preventDefault();
      openQuickView();
    }
  };

  return (
    <div
      className={`${styles.card} ${soldOut ? styles.soldOutCard : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      role={onQuickView ? "button" : undefined}
    >
      {/* IMAGE */}
      <div className={styles.imageContainer}>
        <Link
          href={`/product/${id}`}
          onClick={(e) => onQuickView && e.preventDefault()}
        >
          <img
            src={image}
            alt={name}
            className={styles.image}
            style={soldOut ? { opacity: 0.6 } : undefined}
          />
        </Link>

        {/* TAGS */}
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={tag === "SALE" ? styles.saleTag : styles.tag}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* SOLD OUT */}
        {soldOut && <div className={styles.soldOut}>SOLD OUT</div>}

        {/* QUICK VIEW OVERLAY */}
        {onQuickView && !soldOut && (
          <div
            className={`${styles.quickViewOverlay} ${
              isHovered ? styles.visible : ""
            }`}
          >
            <button
              className={styles.quickViewBtn}
              onClick={(e) => {
                e.stopPropagation();
                openQuickView();
              }}
            >
              Quick view
            </button>
          </div>
        )}

        {/* WISHLIST */}
        <button
          className={styles.wishlistBtn}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            isWishlisted
              ? removeFromWishlist(id)
              : addToWishlist({
                  id,
                  name,
                  brand,
                  price,
                  originalPrice,
                  salePrice,
                  discount,
                  image,
                  images,
                  category,
                  sku,
                  tags,
                });
          }}
        >
          <Heart
            size={18}
            fill={isWishlisted ? "#ff4d4f" : "none"}
            color={isWishlisted ? "#ff4d4f" : "currentColor"}
          />
        </button>
      </div>

      {/* INFO */}
      <Link
        href={`/product/${id}`}
        className={styles.info}
        onClick={(e) => onQuickView && e.preventDefault()}
      >
        <div className={styles.brand}>{brand}</div>
        <div className={styles.name}>{name}</div>

        <div className={styles.pricing}>
          {originalPrice && salePrice ? (
            <>
              <div className={styles.priceRow}>
                <span className={styles.estRetailLabel}>Est. Retail:</span>
                <span className={styles.estRetailValue}>
                  {formatPrice(originalPrice)}
                </span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.ourPriceLabel}>Our Price:</span>
                <span className={styles.ourPriceValue}>
                  {formatPrice(salePrice)}
                </span>
                <span className={styles.originalPriceStruck}>
                  {formatPrice(originalPrice)}
                </span>
              </div>
            </>
          ) : (
            <div className={styles.price}>{formatPrice(price)}</div>
          )}
        </div>
      </Link>
    </div>
  );
}
