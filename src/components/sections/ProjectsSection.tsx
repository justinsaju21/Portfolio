"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Wrench, ChevronRight, Play, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/MovingBorder";

type Category = "all" | "virtual-labs" | "embedded" | "web-apps" | "academic" | "circuits" | "vlsi";

interface Project {
    id: string;
    title: string;
    description: string;
    category: "virtual-labs" | "embedded" | "web-apps" | "academic" | "circuits" | "vlsi";
    tags: string[];
    github?: string;
    instructables?: string;
    streamlit?: string;
    tinkercad?: string;
    external?: string;
}

const projects: Project[] = [
    // VLSI & Hardware Priority
    {
        id: "19",
        title: "Hybrid Approximate Multiplier",
        description: "Verilog implementation of hybrid approximate multiplier for low-power computing applications. Optimized for area and power efficiency.",
        category: "vlsi",
        tags: ["Verilog", "VLSI", "Low Power", "Research"],
        github: "https://github.com/justinsaju21/Hybrid_Approximate_Multiplier",
    },
    {
        id: "20",
        title: "Stick Diagram Painter",
        description: "Tool for creating VLSI stick diagrams for circuit layout visualization. Assists in understanding physical design rules.",
        category: "vlsi",
        tags: ["Python", "VLSI", "Physical Design", "Visualization"],
        github: "https://github.com/justinsaju21/stick-diagram-painter",
        streamlit: "https://justinsaju21-stick-diagram-painter-1--home-uunyi2.streamlit.app/",
    },
    {
        id: "26",
        title: "LiFi Technology",
        description: "Award-winning project demonstrating Visible Light Communication (VLC). 1st Place at TECHKNOW 2023-24.",
        category: "embedded",
        tags: ["LiFi", "VLC", "Research", "Hardware"],
        external: "https://www.canva.com/design/DAGz9JnPRWQ/uUnP_neB6SjSLBD8HjPErg/edit",
    },
    {
        id: "1",
        title: "CMOS Switch & Duality Visualizer",
        description: "Interactive web application for deep-dive visualization into Static CMOS Logic and CMOS Duality. Essential lab tool for ECE students.",
        category: "vlsi",
        tags: ["Python", "Streamlit", "VLSI", "Education"],
        github: "https://github.com/justinsaju21/CMOS-Switch-Translator-Duality-Conduction-Visualizer",
        streamlit: "https://justinsaju21-cmos-switch-translator-duality-conducti-app-akx8f0.streamlit.app/",
    },
    // Embedded Systems Core
    {
        id: "7",
        title: "5x5x5 LED Matrix Display",
        description: "3D LED cube display with custom animations and patterns. Hardware project using Arduino/ESP.",
        category: "embedded",
        tags: ["C++", "Arduino", "LED Matrix", "Hardware"],
        github: "https://github.com/justinsaju21/5x5x5_Led_Matrix_Display",
    },
    {
        id: "9",
        title: "MQ3 Alcohol Sensor Monitor",
        description: "Alcohol detection system with real-time monitoring via Blynk cloud platform.",
        category: "embedded",
        tags: ["C++", "Sensors", "IoT", "Safety"],
        github: "https://github.com/justinsaju21/MQ3_Alcohol_Sensor",
    },
    {
        id: "27",
        title: "Mechanical Moving Chessboard",
        description: "Real-time remote play chessboard with moving mechanical parts. Designed in AutoCAD for cross-country gameplay.",
        category: "embedded",
        tags: ["AutoCAD", "IoT", "Mechanical", "Hardware"],
    },
    {
        id: "13",
        title: "MQ2 Gas Sensor",
        description: "Gas leak detection system with alert functionality for safety applications.",
        category: "embedded",
        tags: ["C++", "Sensors", "Safety", "IoT"],
        github: "https://github.com/justinsaju21/MQ2_Gas_Sensor",
    },
    // Virtual Labs (Software for Hardware)
    {
        id: "2",
        title: "LogicMap Pro",
        description: "Professional Karnaugh Map solver and visualizer built with Streamlit. Simplifies Boolean algebra minimization for students.",
        category: "virtual-labs",
        tags: ["Python", "Streamlit", "Digital Logic"],
        github: "https://github.com/justinsaju21/logicmap-pro",
        streamlit: "https://justinsaju21-logicmap-pro-app-kvmnf2.streamlit.app/",
    },
    {
        id: "3",
        title: "Op-Amp Deep Dive Lab",
        description: "Interactive virtual lab for understanding operational amplifier circuits and their applications.",
        category: "virtual-labs",
        tags: ["Python", "Electronics", "Simulation"],
        github: "https://github.com/justinsaju21/opamp-deep-dive-lab",
        streamlit: "https://justinsaju21-opamp-deep-dive-lab-app-hqjbjr.streamlit.app/",
    },
    {
        id: "5",
        title: "Interactive CPU Lab",
        description: "Hands-on CPU architecture simulation for Computer Organization and Architecture studies.",
        category: "virtual-labs",
        tags: ["Python", "CPU", "Architecture"],
        github: "https://github.com/justinsaju21/interactive-cpu-lab",
        streamlit: "https://justinsaju21-interactive-cpu-lab-home-hqfnek.streamlit.app/",
    },
    // Other Projects
    {
        id: "8",
        title: "Music Player Buzzer",
        description: "Embedded music player using buzzer for melody playback with Blynk IoT integration.",
        category: "embedded",
        tags: ["C++", "Arduino", "IoT", "Blynk"],
        github: "https://github.com/justinsaju21/Music_Player_Buzzer",
    },
    {
        id: "10",
        title: "DHT11 Environment Monitor",
        description: "Environmental monitoring system displaying temperature and humidity data in real-time.",
        category: "embedded",
        tags: ["C++", "DHT11", "IoT", "Monitoring"],
        github: "https://github.com/justinsaju21/DHT11_TempHumid_Monitor",
    },
    {
        id: "14",
        title: "Photobooth Mailer",
        description: "Vintage-style web photobooth that captures photos and emails them directly to users.",
        category: "web-apps",
        tags: ["Python", "Streamlit", "Email", "Camera"],
        github: "https://github.com/justinsaju21/photobooth-mailer",
        streamlit: "https://justinsaju21-photobooth-mailer-main-l2yfdj.streamlit.app/",
    },
    {
        id: "15",
        title: "Card Game / Card Selector Pro",
        description: "Interactive card-based game with professional selection process features.",
        category: "web-apps",
        tags: ["Python", "Streamlit", "Games"],
        github: "https://github.com/justinsaju21/card_game",
        streamlit: "https://cardgame-gn3aenokejqqn9wsd7odfn.streamlit.app/",
    },
    {
        id: "18",
        title: "Cake App",
        description: "Online cake ordering platform with custom cake builder and order management.",
        category: "web-apps",
        tags: ["Python", "Streamlit", "E-commerce"],
        github: "https://github.com/justinsaju21/cake_app",
        streamlit: "https://cakeapp-rgfejhbe4wunz58scnz3fp.streamlit.app/",
    },
    // TinkerCAD Circuits
    {
        id: "21",
        title: "4x4x4 LED Matrix Display",
        description: "3D LED cube display simulation with Arduino controlling 64 LEDs in a matrix configuration.",
        category: "circuits",
        tags: ["TinkerCAD", "Arduino", "LED Matrix", "Simulation"],
        tinkercad: "https://www.tinkercad.com/things/lQ8bzgYgQfN-4x4x4-led-matrix-display",
    },
    {
        id: "23",
        title: "4-Bit Adder",
        description: "Full adder circuit implementation for 4-bit binary addition using logic gates.",
        category: "circuits",
        tags: ["TinkerCAD", "Digital Logic", "Adder", "Gates"],
        tinkercad: "https://www.tinkercad.com/things/aSvIQRK2Oic-4-bit-adder",
    },
];

const categories: { id: Category; label: string; count: number }[] = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "vlsi", label: "VLSI / Hybrid", count: projects.filter(p => p.category === "vlsi").length },
    { id: "embedded", label: "Embedded", count: projects.filter(p => p.category === "embedded").length },
    { id: "virtual-labs", label: "Simulations", count: projects.filter(p => p.category === "virtual-labs").length },
    { id: "circuits", label: "Digital Circuits", count: projects.filter(p => p.category === "circuits").length },
    { id: "web-apps", label: "Web Apps", count: projects.filter(p => p.category === "web-apps").length },
];

export function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        if (showAll) {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        }
        setShowAll(!showAll);
    };

    const filteredProjects = projects.filter(
        (project) => activeCategory === "all" || project.category === activeCategory
    );

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

    return (
        <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/10 to-background" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-12"
                >
                    <span className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block">
                        Portfolio
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <motion.p
                        className="body-lg text-foreground-muted max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        {projects.length} projects spanning Virtual Labs, Embedded Systems, Web Apps, and Academic Research
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                                activeCategory === category.id
                                    ? "bg-gradient-to-r from-accent-cyan to-accent-blue text-midnight"
                                    : "bg-midnight-light/60 border border-glass-border text-foreground-muted hover:border-accent-cyan/50"
                            )}
                        >
                            {category.label}
                            <span className={cn(
                                "text-xs px-2 py-0.5 rounded-full",
                                activeCategory === category.id
                                    ? "bg-midnight/30 text-white"
                                    : "bg-midnight/50 text-foreground-dim"
                            )}>
                                {category.count}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More/Less Button */}
                {filteredProjects.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-center mt-8"
                    >
                        <motion.button
                            onClick={handleToggle}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-glass-border text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-all"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {showAll ? (
                                <>
                                    Show Less <ChevronUp className="w-4 h-4" />
                                </>
                            ) : (
                                <>
                                    Show All {filteredProjects.length} Projects <ChevronDown className="w-4 h-4" />
                                </>
                            )}
                        </motion.button>
                    </motion.div>
                )}

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/justinsaju21"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors"
                    >
                        View all projects on GitHub
                        <ChevronRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <MovingBorder
            containerClassName="h-full"
            className="h-full"
            duration={4}
        >
            <motion.div
                className="relative h-full p-6 bg-midnight-light overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                    <span className={cn(
                        "px-3 py-1 text-xs rounded-full border",
                        project.category === "virtual-labs" && "bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30",
                        project.category === "embedded" && "bg-green-500/20 text-green-400 border-green-500/30",
                        project.category === "web-apps" && "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
                        project.category === "academic" && "bg-accent-blue/20 text-accent-blue border-accent-blue/30",
                        project.category === "circuits" && "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
                        project.category === "vlsi" && "bg-pink-500/20 text-pink-400 border-pink-500/30",
                    )}>
                        {project.category.replace("-", " ").toUpperCase()}
                    </span>
                </div>

                {/* Content */}
                <div className="pt-4">
                    <h3 className="heading-sm text-foreground mb-3 group-hover:text-accent-cyan transition-colors pr-24">
                        {project.title}
                    </h3>

                    <p className="text-sm text-foreground-muted mb-4 line-clamp-3">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded bg-midnight/50 text-foreground-dim border border-glass-border"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-midnight/50 border border-glass-border text-foreground-muted hover:text-foreground hover:border-accent-cyan/50 transition-all"
                                title="View on GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        )}
                        {project.streamlit && (
                            <motion.a
                                href={project.streamlit}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-midnight/50 border border-glass-border text-foreground-muted hover:text-red-400 hover:border-red-400/50 transition-all"
                                title="View Live Demo"
                            >
                                <Play className="w-5 h-5" />
                            </motion.a>
                        )}
                        {project.instructables && (
                            <motion.a
                                href={project.instructables}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-midnight/50 border border-glass-border text-foreground-muted hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
                                title="View on Instructables"
                            >
                                <Wrench className="w-5 h-5" />
                            </motion.a>
                        )}
                        {/* External Link (Generic) */}
                        {project.external && (
                            <motion.a
                                href={project.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-midnight/50 border border-glass-border text-foreground-muted hover:text-accent-purple hover:border-accent-purple/50 transition-all"
                                title="View Documentation / Demo"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>
                        )}
                        {project.tinkercad && (
                            <motion.a
                                href={project.tinkercad}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-lg bg-midnight/50 border border-glass-border text-foreground-muted hover:text-orange-400 hover:border-orange-400/50 transition-all"
                                title="View on TinkerCAD"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Hover gradient */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-accent-cyan/10 via-transparent to-transparent pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>
        </MovingBorder>
    );
}
