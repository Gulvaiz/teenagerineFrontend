"use client";

import React, { useEffect, useState } from 'react';
import styles from './InitialLoader.module.css';

const InitialLoader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const text = "TangerineLuxury...";

    useEffect(() => {
        // Hide loader after animation completes (approx 3 seconds)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={styles.loaderContainer}>
            <div className={styles.wavyText}>
                {text.split('').map((char, index) => (
                    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default InitialLoader;
