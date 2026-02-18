'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';
import { apartments } from '@/lib/data';
import { Card, Button } from '@/components/ui';
import { BedDouble, Phone, LayoutGrid, Info } from 'lucide-react';
import Link from 'next/link';

export default function ListingPage() {
    return (
        <div className="min-h-screen bg-background py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Investment Opportunities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter mb-8 italic">
                            SELECT YOUR <span className="text-gold">TIER</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose from our six prestigious apartment tiers, each offering a unique blend of luxury, comfort, and affordability through our interest-free installment plans.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {apartments.map((apt, index) => (
                        <motion.div
                            key={apt.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group flex flex-col h-full hover:border-primary/40">
                                {/* Visual / Image */}
                                <div className="relative h-64 bg-secondary/50 overflow-hidden">
                                    <NextImage
                                        src={apt.imageUrl}
                                        alt={apt.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 z-10" />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="text-[10px] font-black bg-primary px-2 py-1 rounded-md uppercase tracking-tight text-primary-foreground">
                                            {apt.tier}
                                        </span>
                                    </div>
                                    {/* Price Badge */}
                                    <div className="absolute bottom-4 right-4 z-20 glass px-3 py-1 rounded-lg">
                                        <span className="text-[10px] font-bold text-primary block uppercase tracking-tighter">Starts at</span>
                                        <span className="text-lg font-black">{apt.paymentPlan.monthlyInstallment}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold">{apt.name}</h3>
                                        <span className="text-[10px] font-black bg-white/5 border border-white/10 px-2 py-1 rounded-md uppercase tracking-tight text-foreground/50">
                                            {apt.tier}
                                        </span>
                                    </div>

                                    <div className="flex items-center text-muted-foreground text-sm mb-6 pb-6 border-b border-white/5 gap-6">
                                        <div className="flex items-center">
                                            <BedDouble className="w-4 h-4 mr-2 text-primary/70" />
                                            <span>{apt.bedrooms} Bedrooms</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-2" />
                                            <span>Down: 2 Lac</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-8 line-clamp-2 leading-relaxed">
                                        {apt.description}
                                    </p>

                                    <div className="space-y-4 mb-10 text-sm">
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-muted-foreground italic">Total Price</span>
                                            <span className="font-bold text-foreground">{apt.totalPrice}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-muted-foreground italic">Installment Period</span>
                                            <span className="font-bold text-foreground text-primary">{apt.paymentPlan.durationMonths} Months</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto grid grid-cols-2 gap-4">
                                        <Link href={`/apartments/${apt.slug}`} className="w-full">
                                            <Button variant="outline" className="w-full h-12 flex items-center justify-center gap-2 rounded-xl">
                                                <Info size={16} />
                                                Details
                                            </Button>
                                        </Link>
                                        <a
                                            href={`https://wa.me/923063213951?text=I%20am%20interested%20in%20${apt.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <Button className="w-full h-12 bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center gap-2 rounded-xl group">
                                                <Phone size={16} />
                                                Book
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
