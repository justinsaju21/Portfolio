'use client';
import { ReactNode } from 'react';
import './GlitchText.css';

interface GlitchTextProps {
    children: ReactNode;
    speed?: number;
    enableShadows?: boolean;
    enableOnHover?: boolean;
    className?: string;
}

const GlitchText = ({
    children,
    speed = 1,
    enableShadows = true,
    enableOnHover = true,
    className = ''
}: GlitchTextProps) => {
    const inlineStyles: React.CSSProperties & { [key: string]: string } = {
        '--after-duration': `${speed * 3}s`,
        '--before-duration': `${speed * 2}s`,
        '--after-shadow': enableShadows ? '-5px 0 red' : 'none',
        '--before-shadow': enableShadows ? '5px 0 cyan' : 'none'
    };

    const hoverClass = enableOnHover ? 'enable-on-hover' : '';

    return (
        <div
            className={`glitch ${hoverClass} ${className}`}
            style={inlineStyles}
            data-text={typeof children === 'string' ? children : ''}
        >
            {children}
        </div>
    );
};

export default GlitchText;
