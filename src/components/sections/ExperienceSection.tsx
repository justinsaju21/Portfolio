"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, Cpu, BarChart3, Server, Thermometer, ArrowRight, Heart } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

const experiences = [
    {
        type: "research",
        title: "SoC Testing",
        company: "NSYSU University",
        subtitle: "National Sun Yat-sen University",
        location: "Taiwan",
        period: "2024 - Present",
        description: "Engaged in specialized research on System-on-Chip (SoC) testing methodologies, focusing on Design for Testability (DFT) and fault coverage optimization.",
        skills: ["SoC Testing", "ATPG", "Scan Chains", "Fault Modeling", "Logic BIST"],
        highlights: [
            "Studying advanced SoC testing architectures including Scan Chains and BIST",
            "Implementing Automatic Test Pattern Generation (ATPG) for stuck-at faults",
            "Analyzing fault coverage and test vector efficiency",
            "Understanding IEEE 1149.1 (JTAG) and IEEE 1500 testing standards",
        ],
        icon: Cpu,
        gradient: "from-purple-500 to-indigo-500",
    },
    {
        type: "internship",
        title: "Data Science Intern",
        company: "Mannai Corporation",
        subtitle: "Mannai Microsoft Partnership",
        location: "Doha, Qatar",
        period: "2023-24",
        description: "Gained hands-on experience with enterprise-grade Microsoft tools for data analytics and cloud computing in a professional corporate environment.",
        skills: ["Power BI", "Microsoft Azure", "Data Analytics", "Cloud Computing", "Business Intelligence"],
        highlights: [
            "Developed interactive dashboards using Power BI for data visualization",
            "Explored Microsoft Azure cloud services and infrastructure",
            "Applied data science principles to real-world business problems",
            "Collaborated with enterprise teams on analytics solutions",
        ],
        icon: BarChart3,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        type: "capstone",
        title: "Electronics Cooling Capstone",
        company: "Dell Technologies",
        subtitle: "Led by Prabhakar Subramaniyam (Ex-Intel)",
        location: "Chennai",
        period: "2024",
        description: "Intensive capstone program on electronics thermal management, focusing on CFD simulations and heat dissipation strategies for high-performance computing.",
        skills: ["ANSYS Icepak", "CFD Simulation", "Junction Temp Analysis", "Heat Sink Design", "Thermal Resistance"],
        highlights: [
            "Mastered ANSYS Icepak for component-level and system-level thermal simulation",
            "Analyzed Junction-to-Case (θjc) and Case-to-Ambient (θca) thermal resistance",
            "Optimized heat sink geometries and fan airflow profiles for data centers",
            "Applied computational fluid dynamics to solve conjugate heat transfer problems",
        ],
        icon: Thermometer,
        gradient: "from-orange-500 to-red-500",
    },
    {
        type: "volunteer",
        title: "Community Connect Programme",
        company: "Divyakaruniya Ashramam",
        subtitle: "Divya Karunya Charitable Trust",
        location: "Kerala",
        period: "2024",
        description: "Volunteered at Divyakaruniya Ashramam as part of Community Connect initiative, contributing to charitable activities and community service.",
        skills: ["Community Service", "Social Impact", "Volunteering", "Teamwork", "Empathy"],
        highlights: [
            "Engaged in charitable activities at the ashram",
            "Contributed to community welfare programs",
            "Developed interpersonal and leadership skills",
            "Built connections through meaningful social work",
        ],
        icon: Heart,
        gradient: "from-green-500 to-emerald-500",
        proofLink: "https://www.canva.com/design/DAGyROREwE8/CX1fhVwgtC3bqwSzGdy2Wg/edit",
    },
];

const connectionPoints = [
    {
        title: "Data-Driven Thermal Optimization",
        description: "Utilizing Python/MATLAB scripts to process ANSYS Icepak simulation data, enabling automated parameter tuning for optimal heat dissipation.",
        icon: BarChart3,
    },
    {
        title: "Smart Cooling Control",
        description: "Designing embedded algorithms for dynamic fan speed control (PWM) based on real-time junction temperature readings from sensors.",
        icon: Server,
    },
    {
        title: "Reliability Prediction",
        description: "Applying ML models to predict Mean Time Between Failures (MTBF) based on thermal cycling data, enhancing hardware reliability standards.",
        icon: Cpu,
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/10 to-background" />

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
                        Experience
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Industry <span className="text-gradient">Exposure</span>
                    </h2>
                    <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
                        Bridging data science and hardware engineering through real-world experience
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <GlassmorphismCard className="p-8 h-full" glow>
                                {/* Header */}
                                <div
                                    className="flex items-start gap-4 mb-6"
                                >
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${exp.gradient} shrink-0`}>
                                        <exp.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`px-2 py-0.5 text-xs rounded-full ${exp.type === "internship"
                                                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                                : exp.type === "capstone"
                                                    ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                                                    : exp.type === "research"
                                                        ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                                                }`}>
                                                {exp.type === "internship" ? "Overseas Internship" : exp.type === "capstone" ? "Capstone Program" : exp.type === "research" ? "Research Program" : "Community Service"}
                                            </span>
                                            <span className="text-xs text-foreground-dim">{exp.period}</span>
                                        </div>
                                        <h3 className="heading-sm text-foreground">{exp.title}</h3>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Building2 className="w-4 h-4 text-accent-cyan" />
                                            <span className="text-accent-cyan">{exp.company}</span>
                                        </div>
                                        <p className="text-xs text-foreground-muted mt-1">{exp.subtitle}</p>
                                    </div>
                                </div>

                                {/* Description */}
                                <p
                                    className="text-foreground-muted mb-6"
                                >
                                    {exp.description}
                                </p>

                                {/* Skills */}
                                <div
                                    className="flex flex-wrap gap-2 mb-6"
                                >
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-xs rounded-full bg-midnight/50 text-foreground-muted border border-glass-border"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Highlights */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                                        Key Learnings
                                    </h4>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 text-sm text-foreground-muted"
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} mt-1.5 shrink-0`} />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Proof Link */}
                                {exp.proofLink && (
                                    <motion.a
                                        href={exp.proofLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 hover:border-green-400 transition-all text-sm"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        📄 View Proof / Certificate
                                    </motion.a>
                                )}
                            </GlassmorphismCard>
                        </motion.div>
                    ))}
                </div>

                {/* Connection Section */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <GlassmorphismCard className="p-8">
                        <h3 className="heading-sm text-foreground mb-2 text-center">
                            🔗 Connecting the Dots
                        </h3>
                        <p
                            className="text-center text-foreground-muted mb-8 max-w-2xl mx-auto"
                        >
                            How data science and thermal engineering converge in modern technology
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {connectionPoints.map((point, index) => (
                                <div
                                    key={point.title}
                                    className="text-center p-4 rounded-xl bg-midnight/30 border border-glass-border"
                                >
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 mb-4">
                                        <point.icon className="w-6 h-6 text-accent-cyan" />
                                    </div>
                                    <h4 className="font-medium text-foreground mb-2">{point.title}</h4>
                                    <p className="text-sm text-foreground-muted">{point.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <div
                            className="mt-8 p-6 rounded-xl bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-blue/10 border border-glass-border text-center"
                        >
                            <p className="text-foreground italic">
                                &quot;The future of electronics lies in smart thermal management powered by data-driven insights —
                                from predicting component failures to optimizing data center efficiency.&quot;
                            </p>
                            <p className="text-sm text-accent-cyan mt-2">— My Vision</p>
                        </div>
                    </GlassmorphismCard>
                </motion.div>
            </div>
        </section >
    );
}
