'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Scene } from '../3d/Scene';
import { Button } from '@/components/ui';
import { ArrowRight, Phone } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative w-full h-[100dvh] bg-background overflow-hidden flex items-center justify-center">
            {/* Version 1.1 - Viewport Fit Refinement */}
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
                <Scene />
            </div>

            {/* Overlay Content - Scaled to fit 100vh */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-6 text-center max-w-7xl mx-auto pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex flex-col items-center"
                >
                    <span className="inline-block px-4 py-1 glass rounded-full text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 border border-primary/20">
                        Welcome to the Pinnacle of Luxury
                    </span>

                    <h1 className="text-4xl md:text-[7vw] font-black text-foreground mb-4 leading-[0.9] tracking-tighter">
                        ELEVATING YOUR <br />
                        <span className="text-gold uppercase">Lifestyle</span>
                    </h1>

                    <p className="text-sm md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-foreground/70">
                        Discover architectural masterpieces starting from just <span className="text-primary font-bold">20,000 PKR</span> per month.
                        Flexible installment plans tailored for your vision.
                    </p>

                    {/* Statistics row - More compact to fit screen */}
                    <div className="w-full flex flex-wrap justify-center gap-3 md:gap-6 mb-8">
                        {[
                            { value: '2 Lac', label: 'Down Payment' },
                            { value: '0%', label: 'Interest' },
                            { value: '5+', label: 'Active Projects' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center p-4 md:p-6 glass rounded-2xl min-w-[120px] md:min-w-[150px] border-white/5">
                                <span className="text-primary text-2xl md:text-4xl font-black mb-0.5 italic tracking-tighter">{stat.value}</span>
                                <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-foreground/50">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-xl px-4">
                        <Link href="/apartments" className="flex-1 w-full">
                            <Button size="md" className="h-14 md:h-16 px-8 rounded-xl text-lg font-black w-full shadow-xl hover:scale-105 transition-transform">
                                View Apartments
                            </Button>
                        </Link>
                        <a
                            href="https://wa.me/923063213951?text=I%20am%20interested%20in%20your%20apartment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 w-full"
                        >
                            <Button variant="glass" className="h-14 md:h-16 px-8 rounded-xl text-lg font-black w-full text-foreground border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                                <Phone className="w-5 h-5 text-primary" />
                                Book Now
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Hero Vignette */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-background to-transparent z-1" />
        </section>
    );
};
