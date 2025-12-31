"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Users, Lightbulb, Cpu, Brain, Zap, Briefcase } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

const highlights = [
    {
        icon: GraduationCap,
        title: "SRMIST",
        description: "B.Tech in ECE with Data Science specialization (Class of '27)",
    },
    {
        icon: Award,
        title: "IEEE Chair",
        description: "Leading IEEE Student Chapter, driving technical excellence & innovation",
    },
    {
        icon: Users,
        title: "Leader",
        description: "Student Representative championing 60+ ECE students' interests",
    },
    {
        icon: Lightbulb,
        title: "Innovator",
        description: "Building Virtual Labs bridging theory ↔ simulation for ECE education",
    },
];

const currentFocus = [
    {
        icon: Briefcase,
        title: "Business Automation",
        description: "Building automated systems for business efficiency",
    },
    {
        icon: Cpu,
        title: "Virtual Labs",
        description: "Electronics & Communication simulations",
    },
    {
        icon: Brain,
        title: "Emotional AI",
        description: "Well-being tools & companions",
    },
];

export function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block">
                        About Me
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Passionate Engineer & <span className="text-gradient">Future Innovator</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
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
                                    viewport={{ once: false, amount: 0 }}
                                >
                                    I&apos;m <span className="text-accent-cyan font-semibold">Justin Jacob Saju</span>,
                                    a vibe-focused coder and developer building at the intersection of
                                    <span className="text-foreground"> hardware, software, and human well-being</span>.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: false, amount: 0 }}
                                >
                                    Currently pursuing <span className="text-foreground">B.Tech in Electronics & Communication
                                        Engineering</span> with <span className="text-accent-blue">Data Science specialization</span> at
                                    <span className="text-foreground"> SRM Institute of Science and Technology</span> (Class of &apos;27).
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: false, amount: 0 }}
                                >
                                    As the <span className="text-accent-blue font-semibold">IEEE Student Chapter Chair</span>,
                                    I lead initiatives that bridge academic learning and real-world applications.
                                    I develop high-impact web applications — from <span className="text-accent-cyan">Virtual Labs</span> for
                                    ECE courses to <span className="text-accent-purple">Emotional AI</span> tools and
                                    <span className="text-green-400"> business automation systems</span>.
                                </motion.p>
                                <p className="text-sm text-foreground-dim italic">
                                    &quot;Using Antigravity AI IDE to build the future, one innovation at a time.&quot;
                                </p>
                            </div>
                        </GlassmorphismCard>

                        {/* Current Focus */}
                        <GlassmorphismCard className="p-6">
                            <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
                                🔭 Currently Working On
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                                {currentFocus.map((item) => (
                                    <div key={item.title} className="text-center">
                                        <item.icon className="w-6 h-6 text-accent-cyan mx-auto mb-2" />
                                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                                        <p className="text-xs text-foreground-muted">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassmorphismCard>

                        {/* Academic Performance */}
                        <GlassmorphismCard className="p-6">
                            <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
                                📊 Academic Performance
                            </h4>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-foreground-muted">Current CGPA</span>
                                <span className="text-3xl font-bold text-gradient">9.71</span>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {[
                                    { sem: "Sem 1", sgpa: "9.44" },
                                    { sem: "Sem 2", sgpa: "9.88" },
                                    { sem: "Sem 3", sgpa: "9.71" },
                                    { sem: "Sem 4", sgpa: "9.71" },
                                ].map((item) => (
                                    <div key={item.sem} className="text-center p-2 rounded-lg bg-midnight/50 border border-glass-border">
                                        <p className="text-xs text-foreground-muted">{item.sem}</p>
                                        <p className="text-lg font-semibold text-accent-cyan">{item.sgpa}</p>
                                    </div>
                                ))}
                            </div>
                        </GlassmorphismCard>

                        {/* Education History */}
                        <GlassmorphismCard className="p-6 mt-4">
                            <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider mb-4">
                                🎓 Education
                            </h4>
                            <div className="space-y-4">
                                <div className="pb-4 border-b border-glass-border">
                                    <div className="flex justify-between items-start mb-1">
                                        <h5 className="font-medium text-foreground">SRM Institute of Science and Technology</h5>
                                        <span className="text-xs text-foreground-dim bg-midnight/50 px-2 py-1 rounded">2027</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted">B.Tech in Electronics & Communication</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h5 className="font-medium text-foreground">MES Indian School, Doha Qatar</h5>
                                        <span className="text-xs text-foreground-dim bg-midnight/50 px-2 py-1 rounded">2023</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted">CBSE • Bio-Maths Batch</p>
                                </div>
                            </div>
                        </GlassmorphismCard>
                    </motion.div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <GlassmorphismCard className="p-6 h-full">
                                    <div className="flex flex-col h-full">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 w-fit mb-4">
                                            <item.icon className="w-6 h-6 text-accent-cyan" />
                                        </div>
                                        <h4 className="heading-sm text-foreground mb-2">{item.title}</h4>
                                        <p className="text-sm text-foreground-muted">{item.description}</p>
                                    </div>
                                </GlassmorphismCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-12"
                >
                    <motion.p
                        className="text-center text-sm text-foreground-muted mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0 }}
                    >💬 Ask me about:</motion.p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Electronics", "Telecommunications", "Streamlit", "AI-native IDEs", "Virtual Labs", "Embedded Systems"].map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full text-sm bg-midnight-light/60 border border-glass-border text-foreground-muted"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section >
    );
}
