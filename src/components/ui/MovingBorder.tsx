"use client";

import { cn } from "@/lib/utils";

interface MovingBorderProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    borderRadius?: string;
    duration?: number;
}

export function MovingBorder({
    children,
    className,
    containerClassName,
    borderRadius = "1rem",
    duration = 3,
}: MovingBorderProps) {
    return (
        <div
            className={cn("relative p-[1px] overflow-hidden", containerClassName)}
            style={{ borderRadius }}
        >
            {/* Animated gradient border */}
            <div
                className="absolute inset-0 animate-movingBorder"
                style={{
                    background: `linear-gradient(
            90deg,
            var(--accent-cyan),
            var(--accent-blue),
            var(--accent-purple),
            var(--accent-pink),
            var(--accent-cyan)
          )`,
                    backgroundSize: "200% 100%",
                    animationDuration: `${duration}s`,
                    borderRadius,
                }}
            />

            {/* Inner content */}
            <div
                className={cn(
                    "relative bg-midnight-light",
                    className
                )}
                style={{ borderRadius: `calc(${borderRadius} - 1px)` }}
            >
                {children}
            </div>
        </div>
    );
}
