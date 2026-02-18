'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'glass';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) => {
    const variants = {
        primary: 'bg-primary text-primary-foreground hover:bg-accent shadow-lg shadow-primary/20',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
        ghost: 'text-foreground hover:bg-white/5',
        glass: 'glass text-foreground hover:bg-white/10 shadow-xl',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-xs',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3.5 text-base',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = ({ className, hoverEffect = true, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                'glass rounded-3xl overflow-hidden transition-all duration-500',
                hoverEffect && 'hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30',
                className
            )}
            {...props}
        />
    );
};
