'use client';

import React, { useState } from 'react';
import { Card, Button } from '@/components/ui';
import { Calculator, Phone, Percent } from 'lucide-react';

export const InstallmentCalculator = () => {
    const [price, setPrice] = useState(5000000);
    const [duration, setDuration] = useState(120);
    const downPayment = 200000;

    const monthly = Math.round((price - downPayment) / duration);

    return (
        <section className="py-24 px-6 bg-secondary/10" id="calculator">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <Calculator className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-4xl font-black text-foreground tracking-tighter uppercase mb-4">
                        Installment <span className="text-gold">Calculator</span>
                    </h2>
                    <p className="text-muted-foreground">Calculate your path to homeownership today.</p>
                </div>

                <Card className="p-8 md:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Percent size={200} className="text-primary rotate-12" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                        <div className="space-y-8">
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                                    Total Apartment Price (PKR): <span className="text-primary ml-2">{price.toLocaleString()}</span>
                                </label>
                                <input
                                    type="range"
                                    min="4000000"
                                    max="15000000"
                                    step="100000"
                                    value={price}
                                    onChange={(e) => setPrice(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 block">
                                    Installment Duration (Months): <span className="text-primary ml-2">{duration}</span>
                                </label>
                                <input
                                    type="range"
                                    min="24"
                                    max="240"
                                    value={duration}
                                    onChange={(e) => setDuration(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            <div className="p-4 glass rounded-xl border-primary/20 bg-primary/5">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">Fixed Requirement</span>
                                <span className="text-sm font-bold text-foreground">Down Payment: 2 Lac PKR</span>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center p-8 glass rounded-[2rem] border-primary/30 bg-primary/5">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Estimated Monthly</span>
                            <h3 className="text-5xl md:text-6xl font-black text-primary mb-2 italic">
                                {monthly.toLocaleString()}
                            </h3>
                            <span className="text-sm font-medium text-muted-foreground mb-8 italic">PKR / Month</span>

                            <a
                                href={`https://wa.me/923063213951?text=I%20used%20the%20calculator%20for%20a%20${price}%20PKR%20apartment.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full"
                            >
                                <Button className="w-full h-14 rounded-xl text-lg font-bold">
                                    Discuss This Plan
                                </Button>
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};
