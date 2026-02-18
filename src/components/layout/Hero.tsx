'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scene } from '../3d/Scene';
import { Button } from '@/components/ui';
import { ArrowRight, Phone } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[150vh] bg-background">
            {/* 3D Background - Covers the entire expanded section */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <Scene />
            </div>

            {/* Overlay Content - Centered in the massive hero */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[150vh] px-6 text-center max-w-7xl mx-auto pt-40 pb-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="w-full flex flex-col items-center"
                >
                    <span className="inline-block px-6 py-2 glass rounded-full text-primary text-sm font-bold tracking-[0.3em] uppercase mb-12 mx-auto w-fit border border-primary/20">
                        Welcome to the Pinnacle of Luxury
                    </span>

                    <h1 className="text-6xl md:text-[12rem] font-black text-foreground mb-12 leading-[0.85] tracking-tighter">
                        ELEVATING YOUR <br />
                        <span className="text-gold">LIFESTYLE</span>
                    </h1>

                    <p className="text-xl md:text-3xl mb-24 max-w-4xl mx-auto leading-relaxed text-foreground/80">
                        Discover architectural masterpieces starting from just <span className="text-primary font-bold">20,000 PKR</span> per month.
                        Flexible installment plans tailored for your vision.
                    </p>

                    {/* Statistics row - Centered and prominently visible */}
                    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-12 mb-24">
                        {[
                            { value: '2 Lac', label: 'Down Payment' },
                            { value: '0%', label: 'Interest' },
                            { value: '5+', label: 'Active Projects' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center p-8 glass rounded-[2.5rem] min-w-[180px] border-white/5 hover:border-primary/20 transition-colors">
                                <span className="text-primary text-4xl md:text-6xl font-black mb-2 italic tracking-tighter">{stat.value}</span>
                                <span className="text-xs md:text-sm uppercase tracking-widest font-bold text-foreground/50">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl px-4">
                        <Button size="lg" className="h-20 px-16 rounded-[2rem] text-2xl font-black w-full md:flex-1 shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform">
                            View Apartments
                        </Button>
                        <a
                            href="https://wa.me/923063213951?text=I%20am%20interested%20in%20your%20apartment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 w-full"
                        >
                            <Button variant="glass" className="h-20 px-16 rounded-[2rem] text-2xl font-black w-full text-foreground border-white/10 flex items-center justify-center gap-4 hover:bg-white/10 transition-colors">
                                <Phone className="w-8 h-8 text-primary" />
                                Book Now
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Hero Vignette - Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none bg-gradient-to-t from-background to-transparent z-1" />
        </section>
    );
};
