"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
    className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
    const [beams, setBeams] = useState<{
        left: string;
        transform: string;
        animationDuration: string;
        animationDelay: string;
        opacity: number;
    }[]>([]);

    useEffect(() => {
        setBeams(
            Array.from({ length: 15 }).map(() => ({
                left: `${Math.random() * 100}%`,
                transform: `rotate(${15 + Math.random() * 10}deg)`,
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2 + Math.random() * 0.3,
            }))
        );
    }, []);

    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
            style={{
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
        >
            {/* Static beams with pure CSS animation - Rendered only after client hydration */}
            {beams.map((beam, i) => (
                <div
                    key={i}
                    className="absolute w-[2px] h-[300px] bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent"
                    style={{
                        left: beam.left,
                        top: "-300px",
                        transform: beam.transform,
                        animation: `beam ${beam.animationDuration} linear infinite`,
                        animationDelay: beam.animationDelay,
                        opacity: beam.opacity,
                    }}
                />
            ))}
        </div>
    );
}
