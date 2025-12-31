"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, Sparkles, Mail, Phone } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { FloatingParticles } from "@/components/ui/FloatingParticles";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealText } from "@/components/ui/RevealText";

export function HeroSection() {
    return (
        <Spotlight className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <BackgroundBeams className="opacity-40" />
            <FloatingParticles quantity={40} />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_80%)]" />

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-light/60 border border-glass-border mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                    </span>
                    <span className="text-sm text-foreground-muted">
                        ECE &apos;27 @ SRMIST | Available for opportunities
                    </span>
                </motion.div>

                {/* Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h1 className="heading-xl mb-4 flex flex-col items-center">
                        <span className="text-foreground text-3xl md:text-4xl mb-2 block">Hi, I&apos;m</span>
                        <RevealText
                            text="Justin Jacob Saju"
                            className="text-gradient justify-center"
                            delay={0.2}
                        />
                    </h1>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.8
                            }
                        }
                    }}
                    className="mb-6"
                >
                    <div className="flex flex-wrap justify-center items-center gap-2 text-lg md:text-xl text-foreground-muted">
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            className="flex items-center gap-2"
                        >
                            <Sparkles className="w-5 h-5 text-accent-cyan" />
                            Electronics & Communication Engineer
                        </motion.span>
                        <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="hidden sm:inline text-foreground-dim">•</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} viewport={{ once: false, amount: 0.3 }}>Data Science Enthusiast</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="hidden sm:inline text-foreground-dim">•</motion.span>
                        <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} viewport={{ once: false, amount: 0.3 }} className="text-accent-blue">IEEE Student Chapter Chair</motion.span>
                    </div>
                </motion.div>

                {/* Bio */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
                    className="body-lg text-foreground-muted max-w-2xl mx-auto mb-6"
                >
                    Vibe-focused coder building at the intersection of hardware, software, and human well-being.
                    Creating Virtual Labs, Emotional AI tools, and business automation systems.
                </motion.p>

                {/* Contact Info Pills */}
                {/* Contact Info Pills */}
                <div className="flex flex-wrap justify-center gap-3 mb-10 py-2">
                    <motion.a
                        href="mailto:justinsaju21@gmail.com"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-light/40 border border-glass-border text-sm text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-all"
                    >
                        <Mail className="w-4 h-4" />
                        justinsaju21@gmail.com
                    </motion.a>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-light/40 border border-glass-border text-sm text-foreground-muted"
                    >
                        <Phone className="w-4 h-4" />
                        +91 8606884320 / +974 66834157
                    </motion.span>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <MagneticButton
                        href="#projects"
                        variant="primary"
                        size="lg"
                        onClick={() => {
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        View Projects
                    </MagneticButton>

                    <MagneticButton
                        href="https://docs.google.com/document/d/1oEAf4BAUeUv-QptuoNsQglzuAtBdF_AZ/edit"
                        variant="secondary"
                        size="lg"
                    >
                        <Download className="w-5 h-5" />
                        Download Resume
                        <ExternalLink className="w-4 h-4 opacity-50" />
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-foreground-dim"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ArrowDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent-purple/10 rounded-full blur-3xl" />
        </Spotlight>
    );
}
