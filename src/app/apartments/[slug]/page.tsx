'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { apartments } from '@/lib/data';
import { Scene } from '@/components/3d/Scene';
import { Button, Card } from '@/components/ui';
import {
    BedDouble,
    MapPin,
    ShieldCheck,
    Wifi,
    Zap,
    Phone,
    ArrowLeft,
    Calendar,
    Wallet,
    Clock,
    Layout
} from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';

export default function ApartmentDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const apt = apartments.find((a) => a.slug === slug);

    if (!apt) {
        return (
            <div className="h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Apartment Not Found</h1>
                    <Button onClick={() => router.push('/apartments')}>Back to Listings</Button>
                </div>
            </div>
        );
    }

    // Filter related apartments (excluding current)
    const related = apartments.filter(a => a.id !== apt.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-background pt-32 pb-24 px-6 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Navigation / Back */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold uppercase tracking-widest text-xs">Back to all properties</span>
                </button>

                {/* Hero Section of Detail */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-square glass rounded-[3rem] overflow-hidden relative"
                    >
                        <div className="absolute inset-0 z-0">
                            <Scene />
                        </div>
                        <div className="absolute inset-0 z-1 pointer-events-none">
                            <NextImage
                                src={apt.imageUrl}
                                alt={apt.name}
                                fill
                                className="object-cover opacity-20 contrast-150 grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="absolute top-8 left-8 z-10 glass px-6 py-3 rounded-2xl">
                            <span className="text-primary font-black uppercase text-xs tracking-widest">3D / Reality Preview</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="mb-6">
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                                {apt.tier} Collection
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 tracking-tighter">
                                {apt.name}
                            </h1>
                            <div className="flex items-center text-muted-foreground space-x-4">
                                <div className="flex items-center">
                                    <MapPin className="text-primary w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium">{apt.locationLabel}</span>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <div className="flex items-center">
                                    <BedDouble className="text-primary w-4 h-4 mr-2" />
                                    <span className="text-sm font-medium">{apt.bedrooms} Bedrooms</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-lg leading-relaxed mb-10 italic">
                            "{apt.description}"
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <Card className="p-6 text-center border-none shadow-none bg-primary/5">
                                <span className="text-xs font-bold text-muted-foreground uppercase mb-2 block tracking-widest">Down Payment</span>
                                <span className="text-3xl font-black text-primary italic">{apt.paymentPlan.downPayment}</span>
                            </Card>
                            <Card className="p-6 text-center border-none shadow-none bg-primary/5">
                                <span className="text-xs font-bold text-muted-foreground uppercase mb-2 block tracking-widest">Monthly</span>
                                <span className="text-3xl font-black text-primary italic">{apt.paymentPlan.monthlyInstallment}</span>
                            </Card>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={`https://wa.me/923063213951?text=I%20am%20interested%20in%20${apt.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                            >
                                <Button className="w-full h-16 rounded-2xl text-xl font-bold flex items-center justify-center gap-3">
                                    <Phone />
                                    Book on WhatsApp
                                </Button>
                            </a>
                            <Button variant="outline" className="h-16 rounded-2xl px-12 text-sm font-bold uppercase tracking-widest">
                                Floor Plan
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                    {/* Section 1: Features */}
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-bold mb-10 tracking-tighter uppercase">Amenities & <span className="text-gold">Features</span></h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {apt.features.map((feature, i) => (
                                <div key={i} className="flex flex-col space-y-3 p-6 glass rounded-2xl hover:bg-white/5 transition-colors">
                                    <ShieldCheck className="text-primary w-8 h-8" />
                                    <span className="text-sm font-bold text-foreground">{feature}</span>
                                </div>
                            ))}
                            <div className="flex flex-col space-y-3 p-6 glass rounded-2xl">
                                <Zap className="text-primary w-8 h-8" />
                                <span className="text-sm font-bold text-foreground">24/7 Power</span>
                            </div>
                            <div className="flex flex-col space-y-3 p-6 glass rounded-2xl">
                                <Wifi className="text-primary w-8 h-8" />
                                <span className="text-sm font-bold text-foreground">Smart Ready</span>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Payment Breakdown */}
                    <div className="glass p-10 rounded-[3rem] border-primary/20">
                        <h3 className="text-xl font-bold mb-8 uppercase tracking-widest border-b border-white/5 pb-4">Payment Breakdown</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center group">
                                <div className="flex items-center gap-3">
                                    <Wallet className="text-primary w-4 h-4" />
                                    <span className="text-muted-foreground text-sm uppercase font-medium">Down Payment</span>
                                </div>
                                <span className="font-bold">{apt.paymentPlan.downPayment}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Calendar className="text-primary w-4 h-4" />
                                    <span className="text-muted-foreground text-sm uppercase font-medium">Monthly Pay</span>
                                </div>
                                <span className="font-bold text-primary">{apt.paymentPlan.monthlyInstallment}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Clock className="text-primary w-4 h-4" />
                                    <span className="text-muted-foreground text-sm uppercase font-medium">Total Duration</span>
                                </div>
                                <span className="font-bold">{apt.paymentPlan.durationMonths} Months</span>
                            </div>
                            <div className="pt-8 mt-8 border-t border-white/5">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-sm font-bold text-foreground uppercase tracking-widest">Total Value</span>
                                    <span className="text-2xl font-black text-gold italic">{apt.totalPrice}</span>
                                </div>
                                <Button variant="glass" className="w-full h-14 rounded-xl font-bold">Download Brochure</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floor Plan Placeholder -> Actual Image */}
                <section className="mb-24 text-center">
                    <h3 className="text-3xl font-bold mb-10 tracking-tighter uppercase">Living Space <span className="text-gold">Preview</span></h3>
                    <div className="glass w-full aspect-[21/9] rounded-[4rem] flex items-center justify-center relative overflow-hidden group">
                        <NextImage
                            src={apt.imageUrl}
                            alt={`${apt.name} interior`}
                            fill
                            className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                        <Layout className="w-24 h-24 text-primary/20 absolute z-10 pointer-events-none" />
                        <span className="text-white/20 font-bold tracking-[0.3em] uppercase opacity-50 relative z-10 group-hover:opacity-0 transition-opacity">Interior Visualization</span>
                    </div>
                </section>

                {/* Location & Map Section */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                        <div>
                            <h3 className="text-3xl font-bold tracking-tighter uppercase">Location & <span className="text-gold">Neighborhood</span></h3>
                            <p className="text-muted-foreground mt-2">{apt.locationLabel}</p>
                        </div>
                        <Button variant="outline" className="h-12 px-8 rounded-xl font-bold uppercase tracking-widest text-xs">
                            Open in Google Maps
                        </Button>
                    </div>
                    <div className="glass w-full aspect-[21/9] rounded-[4rem] overflow-hidden relative border-primary/20">
                        <iframe
                            src={apt.mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>

                {/* Related Section */}
                <section>
                    <h3 className="text-3xl font-bold mb-12 tracking-tighter uppercase">Related <span className="text-gold">Apartments</span></h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {related.map((rapt) => (
                            <Link key={rapt.id} href={`/apartments/${rapt.slug}`}>
                                <Card className="p-8 group h-full">
                                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-4 block">{rapt.tier}</span>
                                    <h4 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{rapt.name}</h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2 italic mb-6">"{rapt.description}"</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-black">{rapt.paymentPlan.monthlyInstallment}</span>
                                        <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
