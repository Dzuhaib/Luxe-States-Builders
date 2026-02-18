'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui';

export const LocationSection = () => {
    return (
        <section className="py-24 px-6 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Our Presence
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">
                            VISIT OUR <span className="text-gold">OFFICE</span>
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-xl">
                            Located in the heart of Phase 8, Karachi, our flagship office is where architecture meets opportunity.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 glass rounded-[3rem] overflow-hidden border-primary/20 aspect-video md:aspect-auto md:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5714488!2d67.07!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c5e80000001%3A0x4a00000000000000!2sDHA%20Phase%208%20Karachi!5e0!3m2!1sen!2spk!4v1700000000006"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            className="opacity-80 lg:contrast-[1.1] lg:brightness-[0.9] lg:grayscale-[0.5]"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-3xl"
                        >
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-primary mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Central HQ</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Plot 45, Luxury Sector, Phase 8,<br />
                                        Karachi, Pakistan
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass p-8 rounded-3xl"
                        >
                            <div className="flex items-start space-x-4">
                                <Navigation className="text-primary mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg mb-2">Accessibility</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Prime waterfront location with easy access from major highways.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <Button className="h-16 rounded-2xl text-lg font-bold">
                            Get Directions
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
