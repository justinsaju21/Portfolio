"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, Instagram, BookOpen, Wrench, CheckCircle, Loader2 } from "lucide-react";
import { GlassmorphismCard } from "@/components/ui/GlassmorphismCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import GlitchText from "@/components/ui/GlitchText";

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/justin-jacob-saju-742b28270/",
        color: "hover:text-blue-400 hover:border-blue-400/50",
    },
    {
        icon: Instagram,
        label: "@justinnnn_21",
        href: "https://instagram.com/justinnnn_21",
        color: "hover:text-pink-400 hover:border-pink-400/50",
    },
    {
        icon: BookOpen,
        label: "Medium",
        href: "https://medium.com/@justinsaju21",
        color: "hover:text-green-400 hover:border-green-400/50",
    },
    {
        icon: Wrench,
        label: "Instructables",
        href: "https://www.instructables.com/member/justinsaju21/",
        color: "hover:text-yellow-400 hover:border-yellow-400/50",
    },
];

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "justinsaju21@gmail.com",
        href: "mailto:justinsaju21@gmail.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Chennai, India",
    },
];

export function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");

        // Reset form after success
        setTimeout(() => {
            setFormState({ name: "", email: "", message: "" });
            setStatus("idle");
        }, 3000);
    };

    return (
        <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-light/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-grid opacity-10" />

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
                        Contact
                    </span>
                    <h2 className="heading-lg text-foreground mb-4">
                        Let&apos;s <GlitchText speed={0.8} enableOnHover={true} className="text-gradient inline-block">Connect</GlitchText>
                    </h2>
                    <p className="body-lg text-foreground-muted max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <GlassmorphismCard className="p-8" glow>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        required
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl",
                                            "bg-midnight border border-glass-border",
                                            "text-foreground placeholder:text-foreground-dim",
                                            "focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50",
                                            "transition-all duration-300"
                                        )}
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        required
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl",
                                            "bg-midnight border border-glass-border",
                                            "text-foreground placeholder:text-foreground-dim",
                                            "focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50",
                                            "transition-all duration-300"
                                        )}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        required
                                        rows={5}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-xl resize-none",
                                            "bg-midnight border border-glass-border",
                                            "text-foreground placeholder:text-foreground-dim",
                                            "focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/50",
                                            "transition-all duration-300"
                                        )}
                                        placeholder="Your message..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <MagneticButton
                                    variant="primary"
                                    size="lg"
                                    className="w-full"
                                    onClick={() => { }}
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : status === "success" ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </MagneticButton>
                            </form>
                        </GlassmorphismCard>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Info Cards */}
                        <GlassmorphismCard className="p-8">
                            <h3 className="heading-sm text-foreground mb-6">Get in Touch</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info) => (
                                    <motion.div
                                        key={info.label}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="p-3 rounded-xl bg-accent-cyan/10">
                                            <info.icon className="w-5 h-5 text-accent-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-foreground-muted">{info.label}</p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-foreground hover:text-accent-cyan transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-foreground">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </GlassmorphismCard>

                        {/* Social Links */}
                        <GlassmorphismCard className="p-8">
                            <h3 className="heading-sm text-foreground mb-6">Follow Me</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: false, amount: 0.2 }}
                                        whileHover={{ scale: 1.02 }}
                                        className={cn(
                                            "flex items-center gap-3 p-4 rounded-xl",
                                            "bg-midnight/50 border border-glass-border",
                                            "text-foreground-muted transition-all duration-300",
                                            social.color
                                        )}
                                    >
                                        <social.icon className="w-5 h-5" />
                                        <span className="text-sm truncate">{social.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </GlassmorphismCard>

                        {/* Availability */}
                        <GlassmorphismCard className="p-6">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                                </span>
                                <p className="text-foreground">
                                    Currently available for <span className="text-accent-cyan">internships</span> and <span className="text-accent-cyan">collaborations</span>
                                </p>
                            </div>
                        </GlassmorphismCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
