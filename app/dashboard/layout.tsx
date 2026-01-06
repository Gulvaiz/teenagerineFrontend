"use client";


import DashboardSidebar from '@/components/DashboardSidebar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) return null; // Or a loading spinner
    if (!isAuthenticated) return null;

    return (
        <>

            <main className="container" style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', minHeight: '80vh' }}>
                <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                    <div style={{ flexShrink: 0 }}>
                        <DashboardSidebar />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        {children}
                    </div>
                </div>
            </main>

        </>
    );
}
