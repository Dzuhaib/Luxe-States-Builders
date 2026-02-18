'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Apartments', href: '/apartments' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
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
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                scrolled ? 'glass py-3' : 'bg-transparent'
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
                <div className="hidden md:flex items-center space-x-8">
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

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col space-y-6 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    'text-2xl font-semibold transition-colors',
                                    pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/923063213951?text=I%20am%20interested%20in%20your%20apartment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-xl"
                            onClick={() => setIsOpen(false)}
                        >
                            <Phone className="w-5 h-5" />
                            <span>Book Now on WhatsApp</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
