"use client";

import { useState } from 'react';
import styles from './ProductGallery.module.css';

interface ProductGalleryProps {
    images: string[];
    name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className={styles.galleryContainer}>
            <div className={styles.thumbnails}>
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`${styles.thumbnail} ${selectedImage === img ? styles.active : ''}`}
                        onClick={() => setSelectedImage(img)}
                    >
                        <img src={img} alt={`${name} view ${i + 1}`} />
                    </div>
                ))}
            </div>
            <div className={styles.mainImage}>
                <img src={selectedImage} alt={name} />
            </div>
        </div>
    );
}
