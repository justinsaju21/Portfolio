"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    className?: string;
    children: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
}

interface BentoGridItemProps {
    className?: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    header?: React.ReactNode;
    colSpan?: 1 | 2;
    rowSpan?: 1 | 2;
}

export function BentoGridItem({
    className,
    title,
    description,
    icon,
    header,
    colSpan = 1,
    rowSpan = 1,
}: BentoGridItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0, margin: "100px 0px 0px 0px" }}
            whileHover={{ scale: 1.02, y: -5 }}
            className={cn(
                "group relative overflow-hidden rounded-2xl",
                "bg-midnight-light/50 border border-glass-border",
                "p-6 flex flex-col",
                "transition-all duration-300",
                "hover:border-accent-cyan/40 hover:shadow-lg hover:shadow-accent-cyan/10",
                colSpan === 2 && "md:col-span-2",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Moving border effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                    className="absolute inset-[-1px] rounded-2xl animate-movingBorder"
                    style={{
                        background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-blue), var(--accent-purple), var(--accent-cyan))",
                        backgroundSize: "200% 100%",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                        padding: "1px",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
                {header && (
                    <div className="mb-4 flex items-center justify-center">
                        {header}
                    </div>
                )}

                <div className="flex items-center gap-3 mb-2">
                    {icon && (
                        <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                            {icon}
                        </div>
                    )}
                    <h3 className="heading-sm text-foreground group-hover:text-accent-cyan transition-colors">
                        {title}
                    </h3>
                </div>

                {description && (
                    <p className="body-md text-foreground-muted mt-auto">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
