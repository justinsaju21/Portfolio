"use client";

import { motion } from "framer-motion";
import { Linkedin, Instagram, Mail, BookOpen, Wrench, Github, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/justin-jacob-saju-742b28270/",
        icon: Linkedin,
        label: "LinkedIn",
        color: "hover:text-blue-400",
    },
    {
        href: "https://instagram.com/justinnnn_21",
        icon: Instagram,
        label: "Instagram",
        color: "hover:text-pink-400",
    },
    {
        href: "https://medium.com/@justinsaju21",
        icon: BookOpen,
        label: "Medium",
        color: "hover:text-green-400",
    },
    {
        href: "https://www.instructables.com/member/justinsaju21/",
        icon: Wrench,
        label: "Instructables",
        color: "hover:text-yellow-400",
    },
    {
        href: "mailto:justinsaju21@gmail.com",
        icon: Mail,
        label: "Email",
        color: "hover:text-accent-cyan",
    },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 border-t border-glass-border">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-8">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="text-3xl font-bold text-gradient"
                        whileHover={{ scale: 1.05 }}
                    >
                        JJS
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: false, amount: 0.8 }}
                                whileHover={{ y: -3, scale: 1.1 }}
                                className={cn(
                                    "p-3 rounded-full bg-midnight-light/50 border border-glass-border",
                                    "text-foreground-muted transition-all duration-300",
                                    link.color,
                                    "hover:border-current hover:shadow-lg"
                                )}
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground-muted">
                        {["About", "Projects", "Skills", "Contact"].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-accent-cyan transition-colors"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                viewport={{ once: false, amount: 0.8 }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />

                    {/* Copyright */}
                    <div className="flex flex-col items-center gap-2 text-sm text-foreground-dim">
                        <p>
                            © {currentYear} Justin Jacob Saju. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1">
                            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Framer Motion
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
