"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
    className?: string;
    children: React.ReactNode;
    hover?: boolean;
    glow?: boolean;
}

export function GlassmorphismCard({
    className,
    children,
    hover = true,
    glow = false,
}: GlassmorphismCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
            className={cn(
                "cursor-target relative overflow-hidden rounded-2xl",
                "bg-midnight/80 md:bg-midnight-light/40 backdrop-blur-xl",
                "border border-glass-border text-gray-100",
                "transition-colors duration-300",
                hover && "hover:border-accent-cyan/40 hover:text-white",
                glow && "shadow-lg shadow-accent-cyan/10",
                className
            )}
        >
            {/* Inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-blue/5 opacity-50" />

            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
