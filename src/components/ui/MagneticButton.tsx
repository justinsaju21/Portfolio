"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function MagneticButton({
    children,
    className,
    onClick,
    href,
    variant = "primary",
    size = "md",
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * 0.2);
        y.set((e.clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const baseStyles = cn(
        "cursor-target relative inline-flex items-center justify-center font-medium",
        "rounded-full transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-midnight",
        {
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            // Variants
            "bg-gradient-to-r from-accent-cyan to-accent-blue text-midnight hover:shadow-lg hover:shadow-accent-cyan/30":
                variant === "primary",
            "bg-midnight-light border border-accent-cyan/50 text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan":
                variant === "secondary",
            "bg-transparent text-foreground hover:text-accent-cyan hover:bg-midnight-light/50":
                variant === "ghost",
        },
        className
    );

    const MotionComponent = href ? motion.a : motion.button;

    return (
        <MotionComponent
            ref={ref as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
            href={href}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: xSpring, y: ySpring }}
            whileTap={{ scale: 0.95 }}
            className={baseStyles}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>

            {/* Shimmer effect */}
            {variant === "primary" && (
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0 hover:opacity-100"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                >
                    <div className="absolute inset-0 rounded-full animate-shimmer" />
                </motion.div>
            )}
        </MotionComponent>
    );
}
