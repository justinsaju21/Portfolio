"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
    className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
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
            {/* Static beams with pure CSS animation */}
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[2px] h-[300px] bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: "-300px",
                        transform: `rotate(${15 + Math.random() * 10}deg)`,
                        animation: `beam ${5 + Math.random() * 5}s linear infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: 0.2 + Math.random() * 0.3,
                    }}
                />
            ))}
        </div>
    );
}
