'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

import { StaggeredMenu, StaggeredMenuItem, StaggeredMenuSocialItem } from '../ui/StaggeredMenu';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Apartments', href: '/apartments' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const mobileMenuItems: StaggeredMenuItem[] = [
    { label: 'Home', ariaLabel: 'Home', link: '/' },
    { label: 'Apartments', ariaLabel: 'Apartments', link: '/apartments' },
    { label: 'About', ariaLabel: 'About Us', link: '/about' },
    { label: 'Contact', ariaLabel: 'Contact Us', link: '/contact' },
];

const socialItems: StaggeredMenuSocialItem[] = [
    { label: 'WhatsApp', link: 'https://wa.me/923063213951' },
    { label: 'Instagram', link: '#' },
    { label: 'Facebook', link: '#' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 backdrop-blur-sm shadow-sm hidden md:block',
                    scrolled ? 'glass py-3 backdrop-blur-xl' : 'bg-background/20'
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Building2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold tracking-tight text-foreground">
                            LUXE<span className="text-primary">ESTATES</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    pathname === link.href ? 'text-primary' : 'text-foreground/80'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/923063213951?text=I%20am%20interested%20in%20your%20apartment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-semibold hover:bg-accent transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Book Now</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Staggered Menu */}
            <div className="md:hidden">
                <StaggeredMenu
                    position="right"
                    items={mobileMenuItems}
                    socialItems={socialItems}
                    isFixed={true}
                    colors={['#020817', '#d4af37']}
                    accentColor="#d4af37"
                    menuButtonColor={scrolled ? "#fff" : "#d4af37"}
                    openMenuButtonColor="#000"
                    logoUrl=""
                />
            </div>
        </>
    );
};
