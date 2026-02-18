'use client';

import React from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const CompanyIntro = () => {
    return (
        <section className="pt-24 pb-32 px-6 relative bg-background" id="about">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square glass rounded-3xl overflow-hidden relative">
                            <NextImage
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                alt="Realistic Luxury Building"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-background/40 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white/30 text-8xl md:text-[120px] font-black uppercase select-none">LUXE</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 p-6 md:p-8 glass rounded-2xl z-20">
                            <span className="text-4xl md:text-5xl font-black text-primary block mb-1">30+</span>
                            <span className="text-[10px] md:text-xs text-muted-foreground uppercase font-bold tracking-widest">Years of Excellence</span>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 leading-tight tracking-tighter">
                        BUILDING DREAMS <br /> <span className="text-gold">SINCE 1995</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                        At Luxe Estates, we believe that luxury should be accessible. For over three decades, we've been crafting architectural marvels that redefine urban living in Pakistan. Our commitment to quality and flexible financing makes us the preferred choice for modern homeowners.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            'Premium Materials',
                            'Timely Delivery',
                            'Legal Transparency',
                            'Modern Architecture',
                            'Prime Locations',
                            'Interest-Free Plans'
                        ].map((text) => (
                            <div key={text} className="flex items-center space-x-2 text-foreground/80">
                                <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                <span className="font-medium">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
