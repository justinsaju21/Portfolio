"use client";

import { motion } from "framer-motion";
import { Camera, Leaf, Dumbbell, Globe, Music, Palette, Code, Sparkles } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";

const interests = [
    {
        title: "Photography",
        description: "Capturing moments and perspectives through the lens. From landscapes to street photography.",
        icon: Camera,
        emoji: "📷",
        color: "from-accent-cyan to-accent-blue",
        bgImage: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80",
        span: "col-span-1 row-span-2",
    },
    {
        title: "Singing",
        description: "Finding expression through music and vocals. Music is the soul's way of speaking.",
        icon: Music,
        emoji: "🎤",
        color: "from-pink-400 to-rose-600",
        bgImage: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Digital Drawing",
        description: "Creating digital art and illustrations. Where creativity meets technology.",
        icon: Palette,
        emoji: "🎨",
        color: "from-purple-400 to-indigo-600",
        bgImage: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Vibe Coding",
        description: "Crafting code with AI assistance. Building the future with modern development tools.",
        icon: Code,
        emoji: "⚡",
        color: "from-cyan-400 to-blue-600",
        bgImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Canva Designing",
        description: "Creating stunning visuals, presentations, and graphics for all occasions.",
        icon: Sparkles,
        emoji: "✨",
        color: "from-violet-400 to-purple-600",
        bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Calisthenics",
        description: "Building strength and discipline through bodyweight training and movement.",
        icon: Dumbbell,
        emoji: "💪",
        color: "from-orange-400 to-red-500",
        bgImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
    {
        title: "Farming",
        description: "Connecting with nature through sustainable farming and gardening practices.",
        icon: Leaf,
        emoji: "🌱",
        color: "from-green-400 to-emerald-600",
        bgImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
    {
        title: "The World",
        description: "Curious about cultures, languages, and the endless wonders our world has to offer.",
        icon: Globe,
        emoji: "🌍",
        color: "from-accent-purple to-accent-pink",
        bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
        span: "col-span-1 row-span-1",
    },
];

export function InterestsSection() {
    return (
        <section id="interests" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-dots opacity-20" />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text-accent-cyan text-sm uppercase tracking-widest mb-4 block"
                    >
                        Beyond Code
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="heading-lg text-foreground mb-4"
                    >
                        Interests & <span className="text-gradient-accent">Passions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="body-lg text-foreground-muted max-w-2xl mx-auto"
                    >
                        Life beyond technology — the things that inspire and energize me
                    </motion.p>
                </div>

                {/* Masonry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={interest.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className={interest.span}
                        >
                            <InterestCard interest={interest} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function InterestCard({ interest }: { interest: typeof interests[0] }) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-full group overflow-hidden rounded-2xl transform-gpu"
            style={{ backfaceVisibility: "hidden" }}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                    backgroundImage: `url(${interest.bgImage})`,
                }}
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${interest.color} opacity-70`} />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent" />

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-end">
                {/* Emoji floating */}
                <motion.span
                    className="absolute top-4 right-4 text-4xl opacity-80"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    {interest.emoji}
                </motion.span>

                <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${interest.color}`}>
                        <interest.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="heading-sm text-white">{interest.title}</h3>
                </div>

                <p className="text-sm text-white/80 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {interest.description}
                </p>
            </div>

            {/* Hover Shine Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
            />
        </motion.div>
    );
}
