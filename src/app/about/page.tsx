'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Building2, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui';
import Link from 'next/link';

import { ScrollVelocity } from '@/components/ui/ScrollVelocity';

const stats = [
    { label: 'Managed Projects', value: '50+', icon: Building2 },
    { label: 'Happy Families', value: '2,500+', icon: Users },
    { label: 'Years of Excellence', value: '30+', icon: Award },
    { label: 'Premium Locations', value: '12', icon: ShieldCheck },
];

const values = [
    {
        title: 'Integrity',
        desc: 'We uphold the highest standards of integrity in all of our actions.',
        icon: ShieldCheck,
    },
    {
        title: 'Innovation',
        desc: 'Constant innovation in construction and architectural design.',
        icon: TrendingUp,
    },
    {
        title: 'Commitment',
        desc: 'Dedicated to delivering projects on time and within budget.',
        icon: Heart,
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern Architecture"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                </div>

                <div className="container relative z-10 px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Our Legacy
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase"
                    >
                        BUILDING DREAMS <br /> <span className="text-primary font-light">SINCE 1994</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed"
                    >
                        Luxe Estates is a premier real estate development firm in Karachi, dedicated to creating exceptional living spaces that combine luxury, innovation, and trust.
                    </motion.p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-20 px-6 relative z-10 -mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-3xl text-center flex flex-col items-center group hover:bg-primary/5 border-primary/10"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <stat.icon className="text-primary" size={24} />
                                </div>
                                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                                <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ScrollVelocity
                texts={['ETERNAL TRUST', 'UNCOMPROMISED QUALITY']}
                velocity={40}
                className="text-white italic font-black uppercase tracking-tighter opacity-50 mb-12"
            />

            {/* Content Section */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8">
                            WHO WE ARE <br />
                            <span className="text-primary font-light text-2xl uppercase tracking-[0.2em] block mt-2">Crafting Karachi's Future</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Founded three decades ago, Luxe Estates has grown from a boutique construction firm to one of Karachi's most trusted names in luxury real estate. Our journey is defined by a relentless pursuit of perfection and a commitment to transforming urban landscapes.
                            </p>
                            <p>
                                Every project we undertake is a masterpiece of architectural design and engineering excellence. We believe that a home is more than just a structure; it's a testament to your success and a sanctuary for your family.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                            {values.map((v) => (
                                <div key={v.title} className="space-y-3">
                                    <v.icon className="text-primary" size={24} />
                                    <h4 className="text-white font-bold uppercase tracking-wider">{v.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-snug">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-[40px] overflow-hidden border border-primary/20">
                            <img
                                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1984&auto=format&fit=crop"
                                alt="Luxury Architectural Development"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl border-primary/20 hidden md:block">
                            <div className="text-5xl font-black text-primary mb-1 italic">30+</div>
                            <div className="text-sm font-bold text-white uppercase tracking-widest leading-none">Years of <br /> Trust</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ScrollVelocity
                texts={['ARCHITECTURAL MASTERPIECES', 'KARACHI\'S FINEST LIVING']}
                velocity={50}
                className="text-white font-black uppercase tracking-widest opacity-50 mt-12 mb-24"
            />

            {/* CTA */}
            <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
                        READY TO DISCOVER YOUR <br />
                        <span className="text-primary italic">DREAM RESIDENCE?</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/apartments">
                            <Button size="lg" className="h-16 px-10 text-lg font-black rounded-xl shadow-xl shadow-primary/20">
                                VIEW PROJECTS
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-black rounded-xl">
                                CONTACT US
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
