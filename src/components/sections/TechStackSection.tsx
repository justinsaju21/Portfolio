"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Cpu,
    Radio,
    Database,
    FileText,
    Code,
    Zap,
    Layers
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

const skills = [
    {
        title: "Python",
        description: "Primary programming language for data science, machine learning, and automation projects.",
        icon: <Code className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-4xl"
                >
                    🐍
                </motion.div>
            </div>
        ),
    },
    {
        title: "AI & Machine Learning",
        description: "Building intelligent systems with TensorFlow, PyTorch, and scikit-learn. Passionate about neural networks and deep learning.",
        icon: <Brain className="w-6 h-6" />,
        colSpan: 2,
        header: (
            <div className="flex items-center justify-center h-24 gap-4">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-3 rounded-xl bg-accent-purple/20"
                >
                    <Brain className="w-8 h-8 text-accent-purple" />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    className="p-3 rounded-xl bg-accent-cyan/20"
                >
                    <Layers className="w-8 h-8 text-accent-cyan" />
                </motion.div>
            </div>
        ),
    },
    {
        title: "Embedded Systems",
        description: "Hardware-software integration with Arduino, ESP32, Raspberry Pi, and custom PCB design.",
        icon: <Cpu className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20">
                <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative"
                >
                    <Cpu className="w-12 h-12 text-accent-blue" />
                    <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </motion.div>
            </div>
        ),
    },
    {
        title: "5G Technology",
        description: "Understanding next-generation wireless communication, network slicing, and edge computing.",
        icon: <Radio className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20">
                <motion.div className="relative">
                    <Radio className="w-10 h-10 text-accent-cyan" />
                    <motion.div
                        className="absolute -inset-4"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-full h-full border-2 border-accent-cyan/30 rounded-full" />
                    </motion.div>
                    <motion.div
                        className="absolute -inset-8"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    >
                        <div className="w-full h-full border border-accent-cyan/20 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        ),
    },
    {
        title: "Data Science",
        description: "Statistical analysis, data visualization, and insights extraction using Pandas, NumPy, and Matplotlib.",
        icon: <Database className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20 gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 bg-gradient-to-t from-accent-cyan to-accent-blue rounded-full"
                        animate={{ height: [20, 40, 20] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </div>
        ),
    },
];

export function TechStackSection() {
    return (
        <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-dots opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block"
                    >
                        Tech Stack
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="heading-lg text-foreground mb-4"
                    >
                        Skills & <span className="text-gradient-accent">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="body-lg text-foreground-muted max-w-2xl mx-auto"
                    >
                        A diverse toolkit spanning software, hardware, and research methodologies
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full mt-6"
                    />
                </div>

                {/* Bento Grid */}
                <BentoGrid className="gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: false, amount: 0.2 }}
                            className={skill.colSpan === 2 ? "md:col-span-2" : ""}
                        >
                            <BentoGridItem
                                title={skill.title}
                                description={skill.description}
                                icon={skill.icon}
                                header={skill.header}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </BentoGrid>

                {/* Extra Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-12 flex flex-wrap justify-center gap-3"
                >
                    {["TensorFlow", "PyTorch", "Arduino", "ESP32", "Raspberry Pi", "MATLAB", "AutoCAD", "Git", "Linux", "IoT", "PCB Design"].map((tag, i) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: false, amount: 0.2 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 rounded-full text-sm bg-midnight-light/60 border border-glass-border text-foreground-muted hover:border-accent-cyan/50 hover:text-accent-cyan transition-all cursor-default"
                        >
                            {tag}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
