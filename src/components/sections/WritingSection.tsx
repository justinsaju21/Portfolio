"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen, Award, Trophy, GraduationCap, Cpu, ChevronDown, ChevronUp, Briefcase, Code, PenTool, Globe, Layers, Database, Radio, TrendingUp } from "lucide-react";
import { MovingBorder } from "@/components/ui/MovingBorder";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";
import { cn } from "@/lib/utils";

const articles = [
    {
        title: "The Theft of Wonder: How AI is Copying Ghibli Frame by Frame",
        platform: "Medium",
        excerpt: "Exploring the ethical implications of AI-generated art mimicking Studio Ghibli's iconic style...",
        url: "https://medium.com/@justinsaju21/the-theft-of-wonder-how-ai-is-copying-ghibli-frame-by-frame-c0d619740ca1",
        category: "AI & Ethics",
        featured: true,
    },
    {
        title: "ESP32: The Tiny Powerhouse That Leaves Arduino in the Dust",
        platform: "Medium",
        excerpt: "A deep dive into why ESP32 is becoming the go-to microcontroller for IoT projects...",
        url: "https://medium.com/@justinsaju21/esp32-the-tiny-powerhouse-that-leaves-arduino-in-the-dust-f3c2f0a1cbb5",
        category: "Embedded Systems",
        featured: true,
    },
    {
        title: "Ingenuity: The Little Helicopter That Defied Mars",
        platform: "Medium",
        excerpt: "The incredible story of NASA's Mars helicopter and the engineering behind it...",
        url: "https://medium.com/@justinsaju21/ingenuity-the-little-helicopter-that-defied-mars-44d19f207755",
        category: "Space Tech",
    },
    {
        title: "Heart Rate Sensors: The Tiny Snitch That Knows All About Your Heart",
        platform: "Medium",
        excerpt: "How wearable heart rate sensors work and what they reveal about our health...",
        url: "https://medium.com/@justinsaju21/heart-rate-sensors-the-tiny-snitch-that-knows-all-about-your-heart-b12c93f38c91",
        category: "Sensors",
    },
    {
        title: "Electronic Tattoos (E-Tattoos): The Future of Wearable Electronics",
        platform: "Medium",
        excerpt: "Exploring the revolutionary technology of electronic tattoos and their applications...",
        url: "https://medium.com/@justinsaju21/electronic-tattoos-e-tattoos-the-future-of-wearable-electronics-131370fc8250",
        category: "Wearables",
    },
    {
        title: "ESP32 Setup Guide: Connecting & Coding with Arduino IDE",
        platform: "Medium",
        excerpt: "A comprehensive guide to getting started with ESP32 development...",
        url: "https://medium.com/@justinsaju21/esp32-setup-guide-connecting-coding-with-arduino-ide-and-more-78ca79893d40",
        category: "Tutorial",
    },
    {
        title: "The OLED Wars: The Fierce Battle Between Samsung and LG",
        platform: "Medium",
        excerpt: "Understanding the competition driving OLED display innovation...",
        url: "https://medium.com/@justinsaju21/the-oled-wars-the-fierce-battle-between-samsung-and-lg-4ccd2b9b1840",
        category: "Display Tech",
    },
    {
        title: "Polarized Glasses: The Science, Benefits, and How They Work",
        platform: "Medium",
        excerpt: "The physics behind polarized lenses and why they matter...",
        url: "https://medium.com/@justinsaju21/polarized-glasses-the-science-benefits-and-how-they-work-7805b04ccfd7",
        category: "Optics",
    },
    {
        title: "What is Active Noise Cancellation (ANC) and How Does It Work?",
        platform: "Medium",
        excerpt: "Demystifying the technology behind noise-cancelling headphones...",
        url: "https://medium.com/@justinsaju21/what-is-active-noise-cancellation-anc-and-how-does-it-work-68d8cfebb5d0",
        category: "Audio Tech",
    },
    {
        title: "Galaxy Buds vs Galaxy Buds 2 Pro: A Review",
        platform: "Medium",
        excerpt: "Comparing Samsung's popular wireless earbuds...",
        url: "https://medium.com/@justinsaju21/galaxy-buds-vs-galaxy-buds-2-pro-a-review-a29eaf8bb67a",
        category: "Reviews",
    },
    {
        title: "4x4x4 3D LED Matrix Display",
        platform: "Medium",
        excerpt: "Building and programming a 3D LED cube from scratch...",
        url: "https://medium.com/@justinsaju21/4x4x4-3d-led-matrix-display-ce0fc16d2cab",
        category: "Projects",
    },
    {
        title: "Wired vs Wireless Mouse: The Ultimate Click-Off",
        platform: "Medium",
        excerpt: "Comparing the pros and cons of wired and wireless mice for different use cases...",
        url: "https://medium.com/@justinsaju21/wired-vs-wireless-mouse-the-ultimate-click-off-ccfd2553469e",
        category: "Reviews",
    },
    {
        title: "The Great Memory Upgrade: My Journey from DDR4 to DDR5",
        platform: "Medium",
        excerpt: "Personal experience upgrading RAM and the performance differences...",
        url: "https://medium.com/@justinsaju21/the-great-memory-upgrade-my-journey-from-ddr4-to-ddr5-41b3b59ba503",
        category: "Hardware",
    },
    {
        title: "LiFi: Light Fidelity - The Future of Wireless Communication",
        platform: "Medium",
        excerpt: "How light-based data transmission could revolutionize connectivity...",
        url: "https://medium.com/@justinsaju21/lifi-light-fedility-be1264d87a89",
        category: "5G & Beyond",
    },
];

const certifications = [
    {
        title: "5G Introductory-Level Certificate",
        issuer: "Qualcomm Wireless Academy",
        icon: Radio,
        color: "from-blue-500 to-cyan-500",
        description: "Foundational knowledge of 5G technology, standards, and deployment.",
    },
    {
        title: "VLSI Design",
        issuer: "Internshala Trainings",
        icon: Cpu,
        color: "from-cyan-500 to-teal-500",
        description: "Designing complex integrated circuits and understanding Very Large Scale Integration basics.",
    },
    {
        title: "Embedded Systems",
        issuer: "Internshala Trainings",
        icon: Cpu,
        color: "from-green-500 to-emerald-500",
        description: "Hands-on experience with microcontroller programming and hardware interfacing.",
    },
    {
        title: "ETM using Ansys HFSS and Icepak",
        issuer: "Ansys",
        icon: Cpu,
        color: "from-yellow-500 to-orange-500",
        description: "Electromagnetic and thermal simulation using industry-standard engineering software.",
    },
    {
        title: "Microsoft Azure Data Fundamentals",
        issuer: "Microsoft Learn",
        icon: Database,
        color: "from-blue-400 to-cyan-400",
        description: "Understanding core data concepts including relational and non-relational data processing.",
    },
    {
        title: "Azure Database for MySQL",
        issuer: "Microsoft Learn",
        icon: Database,
        color: "from-blue-600 to-cyan-700",
        description: "Deploying and managing MySQL databases on the Azure cloud platform.",
    },
    {
        title: "Microsoft Azure Fundamentals",
        issuer: "Microsoft Learn",
        icon: GraduationCap,
        color: "from-cyan-500 to-blue-600",
        description: "Mastering cloud computing basics, Azure architecture, and key services.",
    },
    {
        title: "PCB Design",
        issuer: "Internshala Trainings",
        icon: Layers,
        color: "from-orange-500 to-red-500",
        description: "Designing printed circuit boards using professional EDA tools and techniques.",
    },
    {
        title: "Programming in Python with AI",
        issuer: "Internshala Trainings",
        icon: Code,
        color: "from-blue-500 to-indigo-500",
        description: "Comprehensive training in Python programming integrated with Artificial Intelligence concepts.",
    },
    {
        title: "Get started with Microsoft Data Analytics",
        issuer: "Microsoft Learn",
        icon: TrendingUp,
        color: "from-yellow-500 to-orange-500",
        description: "Introduction to data analysis tools, techniques, and visualization with Power BI.",
    },
    {
        title: "Program with Transact-SQL",
        issuer: "Microsoft Learn",
        icon: Code,
        color: "from-blue-500 to-cyan-600",
        description: "Writing queries, manipulating data, and managing databases using T-SQL.",
    },
    {
        title: "Get started with Microsoft 365 Copilot",
        issuer: "Microsoft Learn",
        icon: Briefcase,
        color: "from-blue-600 to-indigo-600",
        description: "Exploring AI-powered productivity and integration within the Microsoft 365 ecosystem.",
    },
    {
        title: "Web Development with AI",
        issuer: "Internshala Trainings",
        icon: Globe,
        color: "from-purple-500 to-pink-500",
        description: "Building modern web applications enhanced with Artificial Intelligence capabilities.",
    },
    {
        title: "Internship & Job Preparation",
        issuer: "Internshala Trainings",
        icon: Briefcase,
        color: "from-slate-500 to-gray-500",
        description: "Professional skills development for successful career planning and job interviews.",
    },
];

// Achievements removed as per user request

export function WritingSection() {
    const [showAllArticles, setShowAllArticles] = useState(false);
    const displayedArticles = showAllArticles ? articles : articles.slice(0, 6);

    const [showAllCerts, setShowAllCerts] = useState(false);
    const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 10);

    const handleArticlesToggle = () => {
        if (showAllArticles) {
            document.getElementById("medium-articles")?.scrollIntoView({ behavior: "smooth" });
        }
        setShowAllArticles(!showAllArticles);
    };

    const handleCertsToggle = () => {
        if (showAllCerts) {
            document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
        }
        setShowAllCerts(!showAllCerts);
    };

    return (
        <section id="writing" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-midnight-light/20 to-background" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block">
                        Technical Writing
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        The <span className="text-gradient">Writing</span> Hub
                    </h2>
                    <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
                        {articles.length} articles on technology, electronics, and innovation
                    </p>
                </motion.div>

                {/* Articles Grid */}
                <div className="mb-16">
                    <div className="flex items-center justify-between mb-8">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 0.2 }}
                            id="medium-articles"
                            className="heading-sm text-foreground flex items-center gap-2"
                        >
                            <BookOpen className="w-5 h-5 text-accent-cyan" />
                            Medium Articles
                            <span className="text-sm font-normal text-foreground-muted">({articles.length})</span>
                        </motion.h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <AnimatePresence>
                            {displayedArticles.map((article, index) => (
                                <motion.div
                                    key={article.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
                                >
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-5 rounded-xl bg-midnight-light/50 border border-glass-border hover:border-accent-cyan/50 transition-all group h-full hover:bg-midnight-light/80"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 p-3 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20 group-hover:from-accent-cyan/30 group-hover:to-accent-blue/30 transition-colors">
                                                <BookOpen className="w-5 h-5 text-accent-cyan" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                                    <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                                        {article.platform}
                                                    </span>
                                                    <span className="px-2 py-0.5 text-xs rounded-full bg-midnight/50 text-foreground-dim border border-glass-border">
                                                        {article.category}
                                                    </span>
                                                    {article.featured && (
                                                        <span className="px-2 py-0.5 text-xs rounded-full bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                                <h4 className="text-base font-semibold text-foreground group-hover:text-accent-cyan transition-colors mb-2 line-clamp-2">
                                                    {article.title}
                                                </h4>
                                                <p className="text-sm text-foreground-muted line-clamp-2">
                                                    {article.excerpt}
                                                </p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-foreground-dim shrink-0 group-hover:text-accent-cyan transition-colors mt-1" />
                                        </div>
                                    </a>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Show More/Less Button */}
                    {articles.length > 6 && (
                        <div className="mt-8 text-center">
                            <motion.button
                                onClick={handleArticlesToggle}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-glass-border text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-all"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {showAllArticles ? (
                                    <>
                                        Show Less <ChevronUp className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        Show All {articles.length} Articles <ChevronDown className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    )}
                </div>

                {/* Certifications Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                        id="certifications"
                        className="heading-sm text-foreground mb-6 flex items-center gap-2"
                    >
                        <Award className="w-5 h-5 text-accent-purple" />
                        Certifications
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <AnimatePresence mode="popLayout">
                            {displayedCerts.map((cert, index) => (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: (index % 5) * 0.05 }}
                                    layout
                                >
                                    <GlassmorphismCard className="p-4 text-center h-full flex flex-col items-center justify-between group hover:border-accent-cyan/50 transition-colors">
                                        <div>
                                            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cert.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                <cert.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="text-sm font-bold text-foreground mb-1 line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
                                                {cert.title}
                                            </h4>
                                            <p className="text-xs text-accent-cyan mb-2 font-medium">{cert.issuer}</p>
                                        </div>
                                        <p className="text-xs leading-relaxed text-foreground-muted/90 line-clamp-3">
                                            {cert.description}
                                        </p>
                                    </GlassmorphismCard>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Show More Certs Button */}
                    {certifications.length > 10 && (
                        <div className="mt-8 text-center">
                            <motion.button
                                onClick={handleCertsToggle}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-glass-border text-foreground-muted hover:text-accent-cyan hover:border-accent-cyan/50 transition-all text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {showAllCerts ? (
                                    <>
                                        Show Less <ChevronUp className="w-4 h-4" />
                                    </>
                                ) : (
                                    <>
                                        Show All {certifications.length} Certificates <ChevronDown className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </div>
                    )}
                </motion.div>

                {/* View More Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
                    className="flex flex-wrap justify-center gap-6 mt-12"
                >
                    <a
                        href="https://medium.com/@justinsaju21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-blue transition-colors"
                    >
                        <BookOpen className="w-4 h-4" />
                        Read more on Medium
                        <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                    <a
                        href="https://sites.google.com/view/justinsaju/certificates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-pink transition-colors"
                    >
                        <Award className="w-4 h-4" />
                        View all certificates
                        <ExternalLink className="w-3 h-3 opacity-50" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
