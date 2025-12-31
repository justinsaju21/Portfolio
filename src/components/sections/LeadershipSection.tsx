"use client";

import { motion } from "framer-motion";
import { Users, Award, Target, TrendingUp, Zap, Globe, Trophy, DollarSign } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

const impacts = [
    {
        icon: Users,
        value: "60+",
        label: "ECE Students (Class Rep)",
        color: "text-accent-cyan",
        bgColor: "from-accent-cyan/20",
    },
    {
        icon: TrendingUp,
        value: "9.71",
        label: "CGPA (4 Semesters)",
        color: "text-yellow-400",
        bgColor: "from-yellow-400/20",
    },
    {
        icon: DollarSign,
        value: "₹98,750",
        label: "Merit Scholarships (2 Yrs)",
        color: "text-green-400",
        bgColor: "from-green-400/20",
    },
    {
        icon: Target,
        value: "25+",
        label: "Projects Completed",
        color: "text-accent-purple",
        bgColor: "from-accent-purple/20",
    },
];

const roles = [
    {
        title: "IEEE Student Chapter Chair",
        organization: "IEEE - SRMIST",
        description: "Leading the student chapter to foster technical excellence and innovation. Organizing workshops, hackathons, and technical talks that bridge academia and industry.",
        achievements: [
            "Driving innovation and technical excellence",
            "Organized technical workshops & events",
            "Established industry partnerships",
            "Mentored junior members in tech projects",
        ],
        icon: Zap,
        gradient: "from-accent-cyan to-accent-blue",
    },
    {
        title: "Anti-Ragging Student Representative",
        organization: "SRMIST - Official Website Listed",
        description: "Officially appointed by SRMIST to ensure a safe and ragging-free campus environment. Listed on the university's official anti-ragging committee.",
        achievements: [
            "Listed on official SRMIST Anti-Ragging page",
            "Ensuring safe campus environment",
            "Handling student grievances",
            "Promoting awareness against ragging",
        ],
        icon: Award,
        gradient: "from-red-500 to-orange-500",
    },
    {
        title: "Class Representative",
        organization: "SRMIST ECE Department",
        description: "Championing student interests and fostering collaboration between students and faculty. Voice for 60 ECE students, facilitating constructive feedback and academic improvements.",
        achievements: [
            "Voice for 60 ECE students",
            "Facilitated curriculum feedback",
            "Organized academic workshops",
            "Improved student-faculty communication",
        ],
        icon: Globe,
        gradient: "from-accent-blue to-accent-purple",
    },
];

const hackathons: { name: string; result: string; team: string; description: string; color: string }[] = [
    {
        name: "AI Hackday",
        result: "Round 2 Qualifier",
        team: "AI Agent with Gemini 2.0 Flash API",
        description: "Developed an intelligent AI agent leveraging Google's Gemini 2.0 Flash API, advancing to the second round.",
        color: "text-accent-purple",
    },
    {
        name: "TECHKNOW 2023-24 (SRMIST)",
        result: "1st Place",
        team: "LiFi Technology Project",
        description: "Demonstrated Visible Light Communication technology for secure data transmission.",
        color: "text-yellow-400",
    },
    {
        name: "Life Through Lens (IE(I) SRM)",
        result: "1st Place",
        team: "Photography Competition",
        description: "Captured the essence of campus life through creative photography.",
        color: "text-accent-cyan",
    },
    {
        name: "Creative Ingenuity 24'",
        result: "1st Place",
        team: "Mechanical Chessboard (AutoCAD)",
        description: "Designed a mechanical chessboard with coreless motor movement using AutoCAD.",
        color: "text-yellow-400",
    },
    {
        name: "Carpentry Workshop (ABL 1st Sem)",
        result: "1st Place",
        team: "Group Activity: Wooden Fence",
        description: "Constructed a durable wooden fence structure using fundamental carpentry techniques.",
        color: "text-green-400",
    },
    {
        name: "Welding Workshop (ABL 1st Sem)",
        result: "1st Place",
        team: "Metal Phone Stand Design",
        description: "Fabricated a custom metal phone stand demonstrating precision welding skills.",
        color: "text-green-400",
    },
];

export function LeadershipSection() {
    return (
        <section id="leadership" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block">
                        Leadership
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Making an <span className="text-gradient-accent">Impact</span>
                    </h2>
                    <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
                        Driving change through leadership, hackathons, and collaborative initiatives
                    </p>
                </motion.div>

                {/* Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {impacts.map((impact, index) => (
                        <motion.div
                            key={impact.label}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <GlassmorphismCard className="p-6 text-center h-full">
                                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${impact.bgColor} to-transparent mb-4`}>
                                    <impact.icon className={`w-6 h-6 ${impact.color}`} />
                                </div>
                                <motion.div
                                    className={`text-2xl md:text-3xl font-bold ${impact.color} mb-2`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                >
                                    {impact.value}
                                </motion.div>
                                <p className="text-xs text-foreground-muted">{impact.label}</p>
                            </GlassmorphismCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Leadership Roles */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <GlassmorphismCard className="p-8 h-full" glow>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${role.gradient} shrink-0`}>
                                        <role.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="heading-sm text-foreground">{role.title}</h3>
                                        <p className="text-accent-cyan">{role.organization}</p>
                                    </div>
                                </div>

                                <p className="text-foreground-muted mb-6">{role.description}</p>

                                <div className="space-y-3">
                                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                                        Key Contributions
                                    </h4>
                                    <ul className="space-y-2">
                                        {role.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                                                viewport={{ once: false, amount: 0.2 }}
                                                className="flex items-center gap-2 text-sm text-foreground-muted"
                                            >
                                                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient}`} />
                                                {achievement}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </GlassmorphismCard>
                        </motion.div>
                    ))}
                </div>

                {/* Hackathons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h3 className="heading-sm text-foreground mb-6 text-center flex items-center justify-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        Hackathons & Competitions
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {hackathons.map((hackathon, index) => (
                            <motion.div
                                key={hackathon.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <GlassmorphismCard className="p-5 text-center">
                                    <p className={`text-xl font-bold ${hackathon.color} mb-1`}>{hackathon.result}</p>
                                    <h4 className="text-foreground font-medium mb-1">{hackathon.name}</h4>
                                    <p className="text-xs text-foreground-muted mb-2 font-medium">{hackathon.team}</p>
                                    <p className="text-xs text-foreground-dim leading-relaxed">{hackathon.description}</p>
                                </GlassmorphismCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
