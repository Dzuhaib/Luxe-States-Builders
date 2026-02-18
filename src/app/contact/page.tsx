'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui';

const contactInfo = [
    {
        icon: Phone,
        label: 'Call Us',
        value: '+92 306 3213951',
        description: 'Monday to Saturday, 9am - 7pm',
        link: 'tel:+923063213951',
    },
    {
        icon: Mail,
        label: 'Email Us',
        value: 'myselfzuhaib@gmail.com',
        description: 'We reply within 24 hours',
        link: 'mailto:myselfzuhaib@gmail.com',
    },
    {
        icon: MapPin,
        label: 'Visit Us',
        value: 'North Nazimabad, Karachi',
        description: 'Head Office, Luxe Estates',
        link: 'https://goo.gl/maps/xyz',
    },
];

export default function ContactPage() {
    const [status, setStatus] = useState<null | 'success' | 'loading'>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6 uppercase italic"
                    >
                        CONTACT <span className="text-primary font-light not-italic">LUXE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg"
                    >
                        Ready to secure your future? Our real estate experts are here to guide you through every step of the process.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass p-8 md:p-12 rounded-[40px] border-primary/20"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Subject</label>
                                <select className="w-auto bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors">
                                    <option className="bg-[#020817]">General Inquiry</option>
                                    <option className="bg-[#020817]">Booking Information</option>
                                    <option className="bg-[#020817]">Installment Plans</option>
                                    <option className="bg-[#020817]">Feedback</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-muted-foreground ml-1">Your Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell us about your requirements..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                />
                            </div>
                            <Button
                                disabled={status === 'loading'}
                                type="submit"
                                className="w-full h-16 text-lg font-black rounded-2xl uppercase tracking-widest shadow-xl shadow-primary/20"
                            >
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : (
                                    <>
                                        Send Message <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.label}
                                    href={info.link}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="glass p-8 rounded-3xl border-primary/10 flex items-start space-x-6 hover:bg-primary/5 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <info.icon className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{info.label}</div>
                                        <div className="text-xl font-bold text-white mb-1">{info.value}</div>
                                        <div className="text-sm text-muted-foreground">{info.description}</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Map Preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="h-[300px] w-full rounded-[40px] overflow-hidden border border-white/10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.433291880562!2d67.042301!3d24.945802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f114c000001%3A0xe54e38e8ecfba3e!2sNorth%20Nazimabad%2C%20Karachi!5e0!3m2!1sen!2spk!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>

                        {/* WhatsApp CTA */}
                        <motion.a
                            href="https://wa.me/923063213951"
                            target="_blank"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex items-center justify-center space-x-3 bg-[#25D366] text-white p-6 rounded-3xl font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            <MessageCircle className="w-8 h-8" />
                            <span>Quick Chat on WhatsApp</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </main>
    );
}
