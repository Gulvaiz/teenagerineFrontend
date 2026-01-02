"use client";

import React from 'react';
import Link from "next/link";
import Image from "next/image";

const WhatsAppButton = () => {
    const phoneNumber = "919876543210"; // Replace with actual number if provided, or leave generic
    const message = "Hello, I am interested in your luxury collection.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 9999,
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
            }}
        >
            <Image
                src="/icons8-whatsapp-48.png"
                alt="WhatsApp"
                width={35}
                height={35}
            />
        </a>
    );
};

export default WhatsAppButton;
