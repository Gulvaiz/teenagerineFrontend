"use client";

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import styles from './page.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Simulating login - in a real app this would hit an API
        login(email);
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Login</h1>
                    <p className={styles.subtitle}>Please enter your e-mail and password:</p>

                    {error && <div className={styles.error}>{error}</div>}

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            LOGIN
                        </button>

                        <div className={styles.links}>
                            <p>Don't have an account? <Link href="/register">Create one</Link></p>
                            <Link href="/forgot-password" className={styles.forgotLink}>Forgot Password?</Link>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
