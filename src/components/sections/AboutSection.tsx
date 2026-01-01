"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Users, Lightbulb, Cpu, Brain, Zap, Briefcase, Code, Radio, Shield, Thermometer } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

const highlights = [
    {
        icon: GraduationCap,
        title: "ECE Engineer",
        description: "Specializing in VLSI, Embedded Systems & Communication",
    },
    {
        icon: Brain,
        title: "Data Science",
        description: "Leveraging AI for hardware optimization & analytics",
    },
    {
        icon: Radio,
        title: "5G & Network Analysis",
        description: "Wireshark-driven wireless communication & network slicing",
    },
    {
        icon: Award,
        title: "Innovation Winner",
        description: "1st Place @ TECHKNOW for LiFi Research",
    },
    {
        icon: Users,
        title: "IEEE Chair",
        description: "Leading 200+ students in technical chapters",
    },
    {
        icon: Lightbulb,
        title: "Open Source",
        description: "Active contributor to GitHub ecosystem",
    },
];



export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative py-24 md:py-32 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/20 to-background" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block">
                        About Me
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Electronics & <span className="text-gradient">Hardware Engineer</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Dense Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <GlassmorphismCard className="p-8">
                            <h3 className="heading-md text-foreground mb-4">
                                Hello, World! 👋
                            </h3>
                            <div className="space-y-4 text-foreground-muted body-md">
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    I&apos;m <span className="text-accent-cyan font-semibold">Justin Jacob Saju</span>,
                                    an <span className="text-foreground">Electronics & Communication Engineer</span> specialized in <span className="text-foreground"> Digital IC Design, Embedded Systems, and IoT</span>.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    I optimize hardware through <span className="text-accent-blue">Thermal Management</span> and <span className="text-accent-purple">AI-Accelerated Verification</span>, bridging the gap between physical silicon and intelligent software.
                                </motion.p>
                            </div>
                        </GlassmorphismCard>

                        {/* Education Highlights - Condensed */}
                        <GlassmorphismCard className="p-6 flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-1">
                                    🎓 Academic Excellence
                                </h4>
                                <p className="text-sm text-foreground-muted">Electronics & Communication</p>
                                <p className="text-xs text-foreground-dim">SRM Institute of Science and Technology</p>
                            </div>
                            <div className="text-right pl-4 border-l border-glass-border">
                                <span className="text-3xl font-bold text-gradient">9.71</span>
                                <p className="text-[10px] text-foreground-muted uppercase tracking-tighter">Current CGPA</p>
                            </div>
                        </GlassmorphismCard>

                        {/* Quick Stats Grid - Moved to Left Column for Balance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {/* VLSI Box - Tech/Circuit Theme */}
                            <GlassmorphismCard className="p-5 flex flex-col justify-between overflow-hidden relative group hover:border-accent-purple/40 transition-colors">
                                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
                                    style={{ backgroundImage: "radial-gradient(#a855f7 1px, transparent 1px)", backgroundSize: "12px 12px" }}
                                />
                                <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent-purple/10 rounded-full blur-2xl group-hover:bg-accent-purple/20 transition-all duration-500" />

                                <div className="p-2.5 w-fit rounded-lg bg-accent-purple/10 border border-accent-purple/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Shield className="w-5 h-5 text-accent-purple" />
                                </div>
                                <div>
                                    <p className="text-xl font-black text-foreground mb-1">VLSI</p>
                                    <div className="h-0.5 w-8 bg-accent-purple/30 mb-2 group-hover:w-full transition-all duration-500" />
                                    <p className="text-[10px] text-foreground-muted font-bold uppercase tracking-wider">Testing & Design</p>
                                </div>
                            </GlassmorphismCard>

                            {/* Thermal Box - Heat/Gradient Theme */}
                            <GlassmorphismCard className="p-5 flex flex-col justify-between overflow-hidden relative group hover:border-orange-500/40 transition-colors">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-t from-orange-500 via-transparent to-transparent" />
                                <div className="absolute -left-4 -bottom-4 w-20 h-20 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-500" />

                                <div className="p-2.5 w-fit rounded-lg bg-orange-500/10 border border-orange-500/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <Thermometer className="w-5 h-5 text-orange-500" />
                                </div>
                                <div>
                                    <p className="text-xl font-black text-foreground mb-1">Thermal</p>
                                    <div className="h-0.5 w-8 bg-orange-500/30 mb-2 group-hover:w-full transition-all duration-500" />
                                    <p className="text-[10px] text-foreground-muted font-bold uppercase tracking-wider">Management</p>
                                </div>
                            </GlassmorphismCard>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visuals & Highlights */}
                    <div className="space-y-6">
                        {/* Profile Visual Area */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <GlassmorphismCard className="relative overflow-hidden p-0 group">
                                {/* Background & Effects */}
                                <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-midnight to-accent-blue/5" />
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

                                <div className="relative z-10 p-8 flex flex-col items-center">
                                    {/* Reactor Core - Compact */}
                                    <div className="relative mb-6 group cursor-pointer">
                                        <div className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-xl group-hover:bg-accent-cyan/40 transition-all duration-500" />
                                        <div className="relative w-24 h-24 rounded-full bg-midnight/90 border border-accent-cyan/30 flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 border-2 border-dashed border-accent-cyan/20 animate-[spin_10s_linear_infinite]" />
                                            <div className="absolute inset-2 border border-accent-blue/30 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
                                            <Cpu className="w-8 h-8 text-accent-cyan group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>

                                    {/* Identity Block */}
                                    <div className="text-center w-full">
                                        <h4 className="heading-sm text-foreground mb-1 uppercase tracking-tight">Justin Jacob Saju</h4>
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-cyan/50" />
                                            <p className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest whitespace-nowrap">Hardware • 5G • Data Science</p>
                                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-cyan/50" />
                                        </div>

                                        {/* Status Badge */}
                                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-accent-cyan/5 border border-accent-cyan/20 backdrop-blur-sm">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-cyan"></span>
                                            </span>
                                            <span className="text-[10px] text-accent-cyan font-bold uppercase tracking-wider">Multi-Domain Expert</span>
                                        </div>

                                        {/* Status Grid Footer */}
                                        <div className="grid grid-cols-3 gap-px w-full bg-accent-cyan/10 rounded-lg overflow-hidden border border-accent-cyan/10">
                                            {[
                                                { label: "Location", value: "India" },
                                                { label: "Role", value: "IEEE Chair" },
                                                { label: "Focus", value: "R&D" }
                                            ].map((stat) => (
                                                <div key={stat.label} className="bg-midnight/50 p-3 hover:bg-accent-cyan/5 transition-colors">
                                                    <p className="text-[9px] text-foreground-muted uppercase tracking-wider mb-0.5">{stat.label}</p>
                                                    <p className="text-xs font-semibold text-foreground">{stat.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassmorphismCard>
                        </motion.div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    <GlassmorphismCard className="p-6 h-full hover:border-accent-cyan/50 transition-colors group">
                                        <div className="flex flex-col h-full">
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                                                <item.icon className="w-6 h-6 text-accent-cyan" />
                                            </div>
                                            <h4 className="heading-sm text-foreground mb-2">{item.title}</h4>
                                            <p className="text-sm text-foreground-muted leading-relaxed">{item.description}</p>
                                        </div>
                                    </GlassmorphismCard>
                                </motion.div>
                            ))}
                        </div>


                    </div>
                </div>

                {/* Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-16"
                >
                    <motion.p
                        className="text-center text-sm text-foreground-muted mb-6 uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >💬 Core Technical Competencies:</motion.p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "VLSI Testing",
                            "Embedded Systems",
                            "5G Networks",
                            "Wireshark Analysis",
                            "Thermal Management",
                            "Data Science",
                            "PCB Design",
                            "IoT Architecture"
                        ].map((skill) => (
                            <motion.span
                                key={skill}
                                whileHover={{ y: -2, scale: 1.05 }}
                                className="px-5 py-2.5 rounded-full text-sm bg-midnight-light/40 border border-glass-border text-foreground-muted hover:border-accent-cyan/50 hover:text-white transition-all cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    );
}
