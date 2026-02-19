'use client';

import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { motion } from 'framer-motion';
import { apartments } from '@/lib/data';
import { Card, Button } from '@/components/ui';
import { BedDouble, ArrowRight } from 'lucide-react';

export const FeaturedApartments = () => {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden" id="apartments">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Our Residences
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
                            FEATURED <span className="text-gold">TIERS</span>
                        </h2>
                    </div>
                    <Link href="/apartments">
                        <Button variant="outline" className="group">
                            View All Properties
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {apartments.map((apt, index) => (
                        <motion.div
                            key={apt.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full flex flex-col group">
                                {/* Image Section */}
                                <div className="relative h-64 bg-secondary overflow-hidden">
                                    <NextImage
                                        src={apt.imageUrl}
                                        alt={apt.name}
                                        fill
                                        className="object-cover lg:group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100 transform-gpu will-change-transform"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 pointer-events-none" />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {apt.tier}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow relative z-20 bg-card">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {apt.name}
                                    </h3>
                                    <div className="flex items-center text-muted-foreground text-sm mb-6 pb-6 border-b border-white/5">
                                        <BedDouble className="w-4 h-4 mr-2" />
                                        <span>{apt.bedrooms} Bedrooms</span>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">Down Payment</span>
                                            <span className="text-foreground font-bold">{apt.paymentPlan.downPayment}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-muted-foreground text-xs uppercase tracking-widest font-medium">Monthly</span>
                                            <span className="text-primary font-black text-xl">{apt.paymentPlan.monthlyInstallment}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex gap-4 items-center relative z-30">
                                        <Button
                                            as={Link}
                                            href={`/apartments/${apt.slug}`}
                                            variant="glass"
                                            className="flex-1 h-12 no-underline"
                                        >
                                            Details
                                        </Button>
                                        <a
                                            href={`https://wa.me/923063213951?text=I%20am%20interested%20in%20${apt.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all transform-gpu will-change-transform active:scale-90 shadow-lg shadow-primary/20 shrink-0"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
