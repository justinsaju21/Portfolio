"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
    className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
    const beamsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const createBeam = () => {
            if (!beamsRef.current) return;

            const beam = document.createElement("div");
            beam.className = "absolute w-[2px] h-[200px] bg-gradient-to-b from-transparent via-accent-cyan/40 to-transparent";
            beam.style.left = `${Math.random() * 100}%`;
            beam.style.top = "-200px";
            beam.style.transform = `rotate(${15 + Math.random() * 10}deg)`;
            beam.style.animation = `beam ${6 + Math.random() * 4}s linear forwards`;
            beam.style.opacity = `${0.3 + Math.random() * 0.4}`;

            beamsRef.current.appendChild(beam);

            setTimeout(() => {
                beam.remove();
            }, 10000);
        };

        const interval = setInterval(createBeam, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={beamsRef}
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none",
                className
            )}
            style={{
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            }}
        >
            {/* Static beams for initial render */}
            {Array.from({ length: 8 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-accent-blue/20 to-transparent"
                    style={{
                        left: `${10 + i * 12}%`,
                        height: "100%",
                        transform: `rotate(${10 + i * 2}deg)`,
                        opacity: 0.2 + (i % 3) * 0.1,
                    }}
                />
            ))}
        </div>
    );
}
