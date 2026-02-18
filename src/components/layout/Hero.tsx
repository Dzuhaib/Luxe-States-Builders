'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scene } from '../3d/Scene';
import { Button } from '@/components/ui';
import { ArrowRight, Phone } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Scene />
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[110vh] px-6 text-center max-w-7xl mx-auto pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full flex flex-col items-center"
                >
                    <span className="inline-block px-4 py-1.5 glass rounded-full text-primary text-xs font-bold tracking-[0.2em] uppercase mb-8 mx-auto w-fit">
                        Welcome to the Pinnacle of Luxury
                    </span>

                    <h1 className="text-5xl md:text-9xl font-black text-foreground mb-8 leading-[0.9] tracking-tighter">
                        ELEVATING YOUR <br />
                        <span className="text-gold">LIFESTYLE</span>
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
                        Discover architectural masterpieces starting from just 20,000 PKR per month.
                        Flexible installment plans tailored for your vision.
                    </p>

                    {/* Statistics row - Now centrally placed and clearly visible */}
                    <div className="w-full flex flex-wrap justify-center gap-6 md:gap-16 mb-16">
                        <div className="flex flex-col items-center p-6 glass rounded-2xl min-w-[140px]">
                            <span className="text-primary text-3xl md:text-4xl font-black mb-1">2 Lac</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-foreground/70">Down Payment</span>
                        </div>
                        <div className="flex flex-col items-center p-6 glass rounded-2xl min-w-[140px]">
                            <span className="text-primary text-3xl md:text-4xl font-black mb-1">0%</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-foreground/70">Interest</span>
                        </div>
                        <div className="flex flex-col items-center p-6 glass rounded-2xl min-w-[140px]">
                            <span className="text-primary text-3xl md:text-4xl font-black mb-1">5+</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-foreground/70">Active Projects</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-2xl px-4">
                        <Button size="lg" className="h-18 px-12 rounded-2xl text-xl font-bold w-full md:flex-1 shadow-2xl">
                            View Apartments
                        </Button>
                        <a
                            href="https://wa.me/923063213951?text=I%20am%20interested%20in%20your%20apartment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 w-full"
                        >
                            <Button variant="glass" className="h-18 px-12 rounded-2xl text-xl font-bold w-full text-foreground border-white/10 flex items-center justify-center gap-3">
                                <Phone className="w-6 h-6 text-primary" />
                                Book Now
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
            {/* Hero Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        </section>
    );
};
