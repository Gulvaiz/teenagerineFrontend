"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart2, Package, User, MapPin, Clock, Lock, Settings, LogOut } from 'lucide-react';
import styles from './DashboardSidebar.module.css';
import { useAuth } from '@/context/AuthContext';

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();

    const menuItems = [
        { name: 'Overview', icon: BarChart2, href: '/dashboard' },
        { name: 'Order Tracking', icon: Package, href: '/dashboard/orders' },
        { name: 'Profile', icon: User, href: '/dashboard/profile' },
        { name: 'Addresses', icon: MapPin, href: '/dashboard/addresses' },
        { name: 'Purchase History', icon: Clock, href: '/dashboard/history' },
        { name: 'Change Password', icon: Lock, href: '/dashboard/password' },
    ];

    const settingsItems = [
        { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
        { name: 'Log out', icon: LogOut, href: '/logout', isDanger: true },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sectionHeader}>Dashboard</div>
            <nav className={styles.nav}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}

                <div className={styles.divider}>Settings</div>

                {settingsItems.map((item) => {
                    const isActive = pathname === item.href;
                    if (item.href === '/logout') {
                        return (
                            <button
                                key={item.href}
                                onClick={logout}
                                className={`${styles.navItem} ${isActive ? styles.active : ''} ${styles.danger}`}
                                style={{ border: 'none', background: 'transparent', width: '100%', cursor: 'pointer', textAlign: 'left' }}
                            >
                                <item.icon size={20} />
                                <span>{item.name}</span>
                            </button>
                        );
                    }
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                        >
                            <item.icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
