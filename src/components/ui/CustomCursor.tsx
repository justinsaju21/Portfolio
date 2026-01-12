'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        setMounted(true);

        // Check if mobile/touch device
        const checkMobile = () => {
            const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            setIsMobile(hasTouchScreen && isSmallScreen);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (!mounted || isMobile) return;

        // Hide default cursor
        document.body.style.cursor = 'none';

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, input, textarea, [role="button"], .cursor-target, .glass-card, [class*="Card"], [class*="magnetic"], [class*="Button"]');
            setIsHovered(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.body.style.cursor = 'auto';
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mounted, isMobile, mouseX, mouseY]);

    if (!mounted || isMobile) return null;

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
            style={{
                x: mouseX,
                y: mouseY,
            }}
        >
            {/* Outer ring */}
            <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-cyan"
                animate={{
                    scale: isHovered ? 1.8 : 1,
                    borderColor: isHovered ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />

            {/* Inner dot */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-cyan"
                animate={{
                    scale: isHovered ? 0 : 1,
                    backgroundColor: isHovered ? 'var(--accent-purple)' : 'var(--accent-cyan)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full bg-accent-cyan/20 blur-md"
                animate={{
                    scale: isHovered ? 2.2 : 0,
                    opacity: isHovered ? 0.6 : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
        </motion.div>
    );
}

export default CustomCursor;
