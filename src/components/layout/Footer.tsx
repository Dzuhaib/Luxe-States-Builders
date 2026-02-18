import React from 'react';
import Link from 'next/link';
import { Building2, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/50 pt-16 pb-8 px-6" id="contact">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <Building2 className="w-8 h-8 text-primary" />
                        <span className="text-xl font-bold tracking-tight text-foreground uppercase">
                            Luxe<span className="text-primary font-light tracking-widest ml-1">Estates</span>
                        </span>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                        Crafting architectural masterpieces and luxury living spaces since 1995. Your dream home is just an installment plan away.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 glass rounded-full hover:text-primary transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="p-2 glass rounded-full hover:text-primary transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="p-2 glass rounded-full hover:text-primary transition-colors"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-foreground font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/apartments" className="hover:text-primary transition-colors">Apartments</Link></li>
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Investment Plans</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h4 className="text-foreground font-bold mb-6">Our Tiers</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li><Link href="/apartments/platinum-towers" className="hover:text-primary transition-colors">Platinum Collection</Link></li>
                        <li><Link href="/apartments/elite-residency" className="hover:text-primary transition-colors">Elite Series</Link></li>
                        <li><Link href="/apartments/skyline-view" className="hover:text-primary transition-colors">Skyline View</Link></li>
                        <li><Link href="/apartments" className="hover:text-primary transition-colors">View All Tiers</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-foreground font-bold">Contact Us</h4>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3 text-muted-foreground text-sm leading-tight">
                            <MapPin className="text-primary mt-1 shrink-0" size={18} />
                            <span>Plot 45, Luxury Sector, Phase 8, Karachi, Pakistan</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                            <Phone className="text-primary shrink-0" size={18} />
                            <span>+92 306 3213951</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                            <Mail className="text-primary shrink-0" size={18} />
                            <span>myselfzuhaib@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
                <p>© 2026 Luxe Estates. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-foreground">Privacy Policy</a>
                    <a href="#" className="hover:text-foreground">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
