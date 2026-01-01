"use client";

import { motion } from "framer-motion";
import {
    Brain,
    Cpu,
    Radio,
    Database,
    Code,
    Zap,
    Layers,
    Thermometer,
    Sparkles,
    Waves
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

const skills = [
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
        title: "5G & Network Analysis",
        description: "Next-gen wireless communication, network slicing, and packet analysis using Wireshark.",
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
                </motion.div>
            </div>
        ),
    },
    {
        title: "VLSI Design & Testing",
        description: "System-on-Chip (SoC) verification, Fault modeling, and Design for Testability (DFT).",
        icon: <Layers className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20">
                <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.3
                            }}
                            className="w-12 h-8 bg-accent-purple/20 border border-accent-purple/40 rounded-md backdrop-blur-sm flex items-center justify-center"
                        >
                            <div className="w-6 h-1 bg-accent-purple/50 rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Thermal Management",
        description: "Optimizing heat dissipation using CFD simulations (ANSYS Icepak) for high-performance electronics.",
        icon: <Thermometer className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20">
                <motion.div
                    animate={{
                        color: ["#38bdf8", "#fb923c", "#38bdf8"],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    <Thermometer className="w-12 h-12" />
                </motion.div>
            </div>
        ),
    },
    {
        title: "AI-Accelerated Engineering",
        description: "Leveraging AI for rapid code generation, automated testbench creation, and optimizing complex engineering workflows (Vibe Coding).",
        icon: <Sparkles className="w-6 h-6" />,
        colSpan: 2,
        header: (
            <div className="flex items-center justify-center h-24 gap-6">
                <motion.div
                    animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="p-4 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20"
                >
                    <Sparkles className="w-10 h-10 text-accent-cyan" />
                </motion.div>
                <div className="flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ width: 0 }}
                            animate={{ width: [0, 100, 100, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                                times: [0, 0.4, 0.8, 1]
                            }}
                            className="h-1 bg-gradient-to-r from-accent-cyan to-transparent rounded-full"
                        />
                    ))}
                </div>
            </div>
        ),
    },
    {
        title: "Data Science",
        description: "Insights extraction, statistical analysis, and predictive modeling using complex datasets.",
        icon: <Database className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20 gap-2">
                {[0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2.5 bg-accent-blue rounded-full"
                        animate={{ height: [15, 35, 15] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                    />
                ))}
            </div>
        ),
    },
    {
        title: "Python",
        description: "Primary backend language for automation, scripting, and large-scale data processing.",
        icon: <Code className="w-6 h-6" />,
        colSpan: 1,
        header: (
            <div className="flex items-center justify-center h-20">
                <motion.div
                    animate={{
                        rotateY: [0, 180, 360],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="text-5xl"
                >
                    🐍
                </motion.div>
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
                        Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="heading-lg text-foreground mb-4"
                    >
                        Core <span className="text-gradient-accent">Specializations</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="body-lg text-foreground-muted max-w-2xl mx-auto"
                    >
                        Bridging telecommunications and electronics with modern engineering paradigms
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
                                className="h-full border-glass-border/50 hover:border-accent-cyan/30 transition-all duration-500"
                            />
                        </motion.div>
                    ))}
                </BentoGrid>

                {/* Extra Technical Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-12 flex flex-wrap justify-center gap-3"
                >
                    {[
                        "SystemVerilog", "UVM", "Wireshark", "DFT Testing", "Fault Modeling", "SoC Verification",
                        "ANSYS Icepak", "CFD", "Network Slicing", "Edge Computing", "IoT Protocols",
                        "PCB Design", "Python (Data Science)", "Git", "FPGA"
                    ].map((tag, i) => (
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
