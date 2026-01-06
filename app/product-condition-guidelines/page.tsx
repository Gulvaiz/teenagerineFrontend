import Image from "next/image";
import { Tag, CheckCircle, Star, Diamond, ShieldCheck, Heart } from "lucide-react";
import styles from "./page.module.css";

export default function ProductConditionGuidelinesPage() {
    const conditions = [
        {
            title: "New With Tags",
            description: "Products under the Condition New, have never been used. They come with tags, packaging and dustbags.",
            icon: <Tag size={20} strokeWidth={2} />,
            image: "/terms1.jpg", // Placeholder - using high quality bag img
        },
        {
            title: "New Without Tags",
            description: "Products under this category are new, have never been used or worn. They are in mint condition. Tags might be missing.",
            icon: <CheckCircle size={20} strokeWidth={2} />,
            image: "/terms2.jpg",
        },
        {
            title: "Pristine",
            description: "Products are as good as new with insignificant sign of usage or no visible sign of usage. They are in pristine condition.",
            icon: <Star size={20} strokeWidth={2} />,
            image: "/terms3.jpg",
        },
        {
            title: "Good Condition",
            description: "Products under this condition are previously worn with minor or no visible flaws and/or no significant wear & tear.",
            icon: <Diamond size={20} strokeWidth={2} />,
            image: "/terms4.jpg",
        },
        {
            title: "Gently Used",
            description: "Products under this condition are previously worn with minor visible flaws and little wear & tear.",
            icon: <ShieldCheck size={20} strokeWidth={2} />,
            image: "/terms5.jpg",
        },
        {
            title: "Used Fairly Well",
            description: "Products under this category are fairly used and have some signs of usage. Some fading or cracks on the products are visible.",
            icon: <Heart size={20} strokeWidth={2} />,
            image: "/terms6.jpg",
        },
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h1 className={styles.heroTitle}>Product Condition Guidelines</h1>
            </section>

            {/* Grid Section */}
            <div className={styles.gridContainer}>
                {conditions.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.badge}>
                            {item.icon}
                        </div>

                        <div className={styles.imageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={300}
                                height={220}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>

                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <div className={styles.divider}></div>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
