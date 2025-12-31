"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Palette, ChevronDown, ChevronUp } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

const designs = [
    {
        id: "1",
        title: "How to recycle waste",
        description: "Educational guide on waste management and recycling practices",
        url: "https://www.canva.com/design/DAGAG9TAtew/lTMRFiTIosvlNRSWdJL4og/edit",
        category: "Poster",
    },
    {
        id: "2",
        title: "Proximity Sensor",
        description: "Technical explanation of proximity sensor working principles and applications",
        url: "https://www.canva.com/design/DAGCZt7kfK4/tkUOGf99Y9ERrN7jPMaM1w/edit",
        category: "Tech",
    },
    {
        id: "3",
        title: "Working with List Structures",
        description: "Visual guide to understanding data structures and lists in programming",
        url: "https://www.canva.com/design/DAGCvG4WfPQ/04HR0dBjJVSD5WPjP-M9SA/edit",
        category: "Coding",
    },
    {
        id: "4",
        title: "Computer Mouse",
        description: "Evolution and technology behind the computer mouse input device",
        url: "https://www.canva.com/design/DAGBby3Filk/o1MBiaIcmFV26mvyW1QalQ/edit",
        category: "Tech",
    },
    {
        id: "5",
        title: "The Eagle's Eye Magazine",
        description: "Magazine layout and design focusing on student perspectives",
        url: "https://www.canva.com/design/DAF-2QUNBho/8qHvHoC0hlptbltj_2inGA/edit",
        category: "Magazine",
    },
    {
        id: "6",
        title: "The Kesavananda Bharati Case",
        description: "Analysis of the landmark Fundamental Rights case",
        url: "https://www.canva.com/design/DAGAHCs2l-E/G1TSNYXCEsTiv0nOQEdysA/edit",
        category: "Case Study",
    },
    {
        id: "7",
        title: "Overpopulation in India",
        description: "Social awareness poster regarding population challenges",
        url: "https://www.canva.com/design/DAGNVc_ocug/Yh1E_a6efqjhQPCCqTB19A/edit",
        category: "Social",
    },
    {
        id: "8",
        title: "Journey of Indian Art",
        description: "Visual timeline and exploration of Indian artistic heritage",
        url: "https://www.canva.com/design/DAGy2UlKatc/OEwGZ4sv9SRUvifdXFIdzg/edit",
        category: "Art",
    },
    {
        id: "9",
        title: "Field Trip Report",
        description: "Study of Historical Architecture in Tamil Nadu",
        url: "https://www.canva.com/design/DAG0ibAp9mI/dvcK0OwquK-627mwqBSZgw/edit",
        category: "Report",
    },
    {
        id: "10",
        title: "Anomaly Detection: Case Study",
        description: "Case study on detecting anomalies in cloud databases using AI",
        url: "https://www.canva.com/design/DAG1CAow_d8/DMTAWWxBZEVFCjGvCL_nuw/edit",
        category: "Research",
    },
    {
        id: "12",
        title: "Anomaly Detection: Methodology",
        description: "In-depth analysis of cloud database security methodology",
        url: "https://www.canva.com/design/DAG1c4fu0to/8-CJiMG_5Bspz7wsuiRx2Q/edit",
        category: "Research",
    },
    {
        id: "14",
        title: "Anomaly Detection: Implementation",
        description: "Implementation details and results of the case study",
        url: "https://www.canva.com/design/DAG0eHB03wE/WFvJshIF4M6OZL3TS0BpZQ/edit",
        category: "Research",
    },
    {
        id: "11",
        title: "From Pattern to Product",
        description: "Building Integrated Circuits: Principles and Design Flow",
        url: "https://www.canva.com/design/DAG1sRoVFIg/xzgjLb6lpJT16li_9vQNRw/edit",
        category: "VLSI",
    },
    {
        id: "13",
        title: "Hybrid Approximate Multipliers",
        description: "Merits balance for digital processing and neural networks",
        url: "https://www.canva.com/design/DAG2axeFTGU/tf4vOf_ROtYOWuoUNo9TVw/edit",
        category: "VLSI",
    },
    {
        id: "15",
        title: "Wi-Fi Enabled 5x5x5 LED Cube",
        description: "Project documentation for an IoT-based LED display system",
        url: "https://www.canva.com/design/DAGz9JnPRWQ/uUnP_neB6SjSLBD8HjPErg/edit",
        category: "IoT",
    },
    {
        id: "16",
        title: "Kalamezhuthu in Kerala",
        description: "Study of religious significance and traditional art forms",
        url: "https://www.canva.com/design/DAGwHeHrfsY/w_NGKZOjVfC_0wNXillIWg/edit",
        category: "Culture",
    },
    {
        id: "17",
        title: "Community Connect Project",
        description: "Documentation of volunteering activities at Divyakaruniya Ashramam",
        url: "https://www.canva.com/design/DAGyROREwE8/CX1fhVwgtC3bqwSzGdy2Wg/edit",
        category: "Social",
    },
];

const colors = [
    "from-pink-500 to-rose-500",
    "from-purple-500 to-indigo-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-yellow-500 to-orange-500",
    "from-red-500 to-pink-500",
];

export function CanvaDesignsSection() {
    const [showAll, setShowAll] = useState(false);
    const displayedDesigns = showAll ? designs : designs.slice(0, 6);

    const handleToggle = () => {
        if (showAll) {
            document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
        }
        setShowAll(!showAll);
    };

    return (
        <section id="designs" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-purple/5 to-background" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-purple text-sm uppercase tracking-widest mb-4 block">
                        Creative Work
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Canva <span className="text-gradient-accent">Designs</span>
                    </h2>
                    <motion.p
                        className="body-lg text-foreground-muted max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {designs.length} creative designs for presentations, posters, and visual content
                    </motion.p>
                </motion.div>

                {/* Designs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <AnimatePresence>
                        {displayedDesigns.map((design, index) => (
                            <motion.a
                                key={design.id}
                                href={design.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="group"
                            >
                                <GlassmorphismCard className="p-5 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center`}>
                                            <Palette className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="text-xs text-accent-purple uppercase tracking-wide">
                                                {design.category}
                                            </span>
                                            <h3 className="text-base font-semibold text-foreground group-hover:text-accent-cyan transition-colors truncate">
                                                {design.title}
                                            </h3>
                                            <p className="text-sm text-foreground-muted mt-1 line-clamp-2">
                                                {design.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-end gap-1 text-xs text-foreground-dim group-hover:text-accent-cyan transition-colors">
                                        <ExternalLink className="w-3 h-3" />
                                        Open in Canva
                                    </div>
                                </GlassmorphismCard>
                            </motion.a>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More/Less Button */}
                {designs.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-center"
                    >
                        <motion.button
                            onClick={handleToggle}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-glass-border text-foreground-muted hover:text-accent-purple hover:border-accent-purple/50 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    Show All {designs.length} Designs <ChevronDown className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                )}

                {/* Canva Profile Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mt-8"
                >
                    <p className="text-sm text-foreground-dim">
                        ✨ All designs created with Canva
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
