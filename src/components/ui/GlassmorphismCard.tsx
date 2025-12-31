"use client";

import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";

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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 5 }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            whileHover={hover ? { y: -5, scale: 1.01 } : {}}
            className={cn(
                "relative overflow-hidden rounded-2xl",
                "bg-midnight/80 md:bg-midnight-light/40 backdrop-blur-xl",
                "border border-glass-border text-gray-100",
                hover && "transition-all duration-300 hover:border-accent-cyan/40 hover:text-white",
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
