"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
    className?: string;
    children: React.ReactNode;
}

export function Spotlight({ className, children }: SpotlightProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const gradient1 = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.12), transparent 40%)`;
    const gradient2 = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.08), transparent 40%)`;

    return (
        <div
            className={cn("relative overflow-hidden group", className)}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight gradient */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: gradient1,
                }}
            />

            {/* Secondary glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: gradient2,
                }}
            />

            {children}
        </div>
    );
}
