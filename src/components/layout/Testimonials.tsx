'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Ahmed Khan',
        role: 'Home Owner',
        text: "The installment plan made my dream of owning a home in Karachi a reality. The quality is far beyond what I expected for this price.",
        rating: 5
    },
    {
        name: 'Sarah Malik',
        role: 'Investor',
        text: "Professionalism at its best. Transparent documentation and timely updates on the construction progress. Highly recommended!",
        rating: 5
    },
    {
        name: 'Umar Farooq',
        role: 'Business Man',
        text: "Luxe Estates truly understands luxury. The architectural design of Platinum Towers is simply world-class.",
        rating: 5
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Hear From Our Clients
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-6">
                        TRUSTED BY <span className="text-gold">FAMILIES</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 glass rounded-3xl relative"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/10 w-16 h-16" />
                            <div className="flex space-x-1 mb-6">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={14} className="fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-foreground/80 leading-relaxed mb-8 italic">
                                "{t.text}"
                            </p>
                            <div>
                                <span className="font-bold text-lg block">{t.name}</span>
                                <span className="text-xs text-primary font-bold uppercase tracking-widest">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
