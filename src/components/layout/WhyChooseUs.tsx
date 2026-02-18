'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Hammer, Handshake, Landmark } from 'lucide-react';

const reasons = [
    {
        icon: Ruler,
        title: 'Precise Planning',
        desc: 'Each square foot is optimized for maximum utility and aesthetic appeal.'
    },
    {
        icon: Hammer,
        title: 'Quality Build',
        desc: 'Using only Grade-A materials and state-of-the-art construction techniques.'
    },
    {
        icon: Handshake,
        title: 'Trust & Integrity',
        desc: 'Over 5,000 satisfied families across our various development projects.'
    },
    {
        icon: Landmark,
        title: 'Legal Clearance',
        desc: 'All projects are fully approved by relevant development authorities.'
    }
];

export const WhyChooseUs = () => {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/3 text-left">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        The Luxe Edge
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter">
                        WHY <span className="text-gold">CHOOSE US?</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        We don't just build apartments; we craft lifestyles. Our commitment to excellence ensures your investment grows as you live.
                    </p>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 glass rounded-[2.5rem] group hover:border-primary/50 transition-all border border-transparent"
                        >
                            <reason.icon className="w-10 h-10 text-primary mb-6" />
                            <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">
                                "{reason.desc}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
