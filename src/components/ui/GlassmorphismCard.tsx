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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
            whileHover={hover ? { y: -5, scale: 1.01 } : {}}
            className={cn(
                "relative overflow-hidden rounded-2xl",
                "bg-midnight-light/40 backdrop-blur-xl",
                "border border-glass-border",
                hover && "transition-all duration-300 hover:border-accent-cyan/40",
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
