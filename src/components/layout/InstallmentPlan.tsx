'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Calendar, ShieldCheck, BadgePercent } from 'lucide-react';

const steps = [
    {
        icon: Wallet,
        title: 'Low Down Payment',
        desc: 'Secure your unit with just 2 Lac PKR. A transparent and straightforward start.'
    },
    {
        icon: Calendar,
        title: 'Monthly Installments',
        desc: 'Pay as little as 20,000 PKR monthly. Plans designed around your budget.'
    },
    {
        icon: BadgePercent,
        title: 'Interest-Free',
        desc: 'Our construction-based plans are 100% interest-free. No hidden costs.'
    },
    {
        icon: ShieldCheck,
        title: 'Secure Possession',
        desc: 'Owned by a registered construction firm. Guaranteed legal safety.'
    }
];

export const InstallmentPlan = () => {
    return (
        <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Financing Made Easy
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-6">
                        OWN YOUR HOME <br /> <span className="text-gold uppercase tracking-widest text-3xl font-light">Step by Step</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 glass rounded-3xl group hover:bg-primary/5 transition-colors"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <step.icon className="text-primary w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
