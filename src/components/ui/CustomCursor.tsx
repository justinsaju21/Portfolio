"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Snappier spring physics - less lag
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Direct update without requestAnimationFrame for lowest latency
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Add event listeners for all clickable elements
        const addHoverListeners = () => {
            const elements = document.querySelectorAll("a, button, input, textarea, [role='button']");
            elements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        };

        window.addEventListener("mousemove", moveCursor);
        addHoverListeners();

        // Re-add listeners when DOM changes (simple observer)
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            observer.disconnect();
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent-cyan pointer-events-none z-[9999] mix-blend-difference hidden md:block" // Hidden on mobile
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: isHovered ? 1.5 : 1,
                backgroundColor: isHovered ? "var(--accent-cyan)" : "transparent",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full bg-accent-cyan opacity-20 blur-md"
                animate={{ scale: isHovered ? 1.2 : 0 }}
            />
        </motion.div>
    );
}
