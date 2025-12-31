"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
    text: string;
    className?: string;
    variant?: "word" | "letter";
    delay?: number;
}

export function AnimatedText({
    text,
    className,
    variant = "word",
    delay = 0,
}: AnimatedTextProps) {
    const elements = variant === "word" ? text.split(" ") : text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: variant === "word" ? 0.12 : 0.05, delayChildren: delay },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={cn("flex flex-wrap", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            {elements.map((element, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    className="inline-block"
                >
                    {element}
                    {variant === "word" && index < elements.length - 1 && "\u00A0"}
                </motion.span>
            ))}
        </motion.div>
    );
}

interface TypewriterTextProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

export function TypewriterText({
    text,
    className,
    speed = 0.05,
    delay = 0,
}: TypewriterTextProps) {
    return (
        <motion.span
            className={cn("inline-block", className)}
            initial={{ opacity: 1 }}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + index * speed }}
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                className="inline-block w-[2px] h-[1em] bg-accent-cyan ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
            />
        </motion.span>
    );
}
