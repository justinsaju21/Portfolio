"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
    const words = text.split(" ");

    // Rafi Patel style: "Mask Reveal"
    // Words slide up from "invisible" (y: 100%) inside a clipped container

    // Parent variants (staggering)
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i }, // Faster stagger
        }),
    };

    // Child variants (sliding up)
    const child = {
        visible: {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 200, // Stiffer, snappier
            },
        },
        hidden: {
            y: "100%", // Start fully below the line
            opacity: 0,
            rotateZ: 5, // Slight rotation for style
            transition: {
                type: "spring" as const,
                damping: 20,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className={cn("flex flex-wrap items-center", className)}
        >
            {words.map((word, index) => (
                <div key={index} className="overflow-hidden mr-[0.25em] py-1"> {/* Mask container */}
                    <span
                        className="inline-block whitespace-nowrap"
                    >
                        {Array.from(word).map((char, charIndex) => (
                            <motion.span
                                variants={child}
                                key={charIndex}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}
