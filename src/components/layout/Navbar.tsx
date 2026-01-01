
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/ui/MagneticButton";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#leadership", label: "Leadership" },
    { href: "#writing", label: "Writing" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        let ticking = false;
        let lastScrollY = 0;

        const handleScroll = () => {
            if (ticking) return;

            ticking = true;
            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                setScrolled(currentScrollY > 50);

                // "What is under the crosshair?" logic for absolute precision
                // We check the element at the center-top of the viewport (approx 30% down)
                const checkPointY = window.innerHeight * 0.3;
                // Scan through all sections to see which one overlaps the checkpoint
                const sections = navLinks.map(link => link.href.substring(1));

                for (const sectionId of sections) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        const rect = element.getBoundingClientRect();
                        // If the section covers the checkpoint
                        if (rect.top <= checkPointY && rect.bottom >= checkPointY) {
                            setActiveSection(sectionId);
                            break;
                        }
                    }
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Run once on mount to set initial state
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform, backdrop-filter", backfaceVisibility: "hidden" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-midnight/80 backdrop-blur-xl border-b border-glass-border"
                        : "bg-transparent"
                )}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-xl md:text-2xl font-bold text-gradient"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            JJS
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="relative px-4 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors"
                                    whileHover={{ y: -2 }}
                                >
                                    {link.label}
                                    <motion.span
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue"
                                        whileHover={{ width: "80%" }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <MagneticButton
                                href="https://docs.google.com/document/d/1oEAf4BAUeUv-QptuoNsQglzuAtBdF_AZ/edit"
                                variant="secondary"
                                size="sm"
                            >
                                <Download className="w-4 h-4" />
                                Resume
                                <ExternalLink className="w-3 h-3 opacity-50" />
                            </MagneticButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        <div className="absolute inset-0 bg-midnight/95 backdrop-blur-xl" />
                        <nav className="relative pt-24 px-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="text-2xl font-medium text-foreground-muted hover:text-accent-cyan transition-colors py-2"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="pt-4"
                                >
                                    <MagneticButton
                                        href="https://docs.google.com/document/d/1oEAf4BAUeUv-QptuoNsQglzuAtBdF_AZ/edit"
                                        variant="primary"
                                        size="lg"
                                    >
                                        <Download className="w-5 h-5" />
                                        Download Resume
                                    </MagneticButton>
                                </motion.div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
