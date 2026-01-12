'use client';

interface AuroraProps {
  colorStops?: string[];
  speed?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ['#06b6d4', '#3b82f6', '#8b5cf6'],
  speed = 1,
  className = ''
}: AuroraProps) {
  return (
    <div className={`aurora-wrapper ${className}`}>
      <div
        className="aurora-gradient"
        style={{
          '--aurora-color-1': colorStops[0] || '#06b6d4',
          '--aurora-color-2': colorStops[1] || '#3b82f6',
          '--aurora-color-3': colorStops[2] || '#8b5cf6',
          '--aurora-speed': `${20 / speed}s`,
        } as React.CSSProperties}
      />
      <style jsx>{`
        .aurora-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        
        .aurora-gradient {
          position: absolute;
          inset: -50%;
          background: 
            radial-gradient(ellipse 80% 50% at 20% 40%, var(--aurora-color-1), transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 60%, var(--aurora-color-2), transparent 55%),
            radial-gradient(ellipse 70% 50% at 50% 80%, var(--aurora-color-3), transparent 50%);
          opacity: 0.3;
          animation: aurora-move var(--aurora-speed) ease-in-out infinite;
          filter: blur(60px);
        }
        
        @keyframes aurora-move {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(5%, -5%) rotate(5deg) scale(1.02);
          }
          50% {
            transform: translate(-3%, 8%) rotate(-3deg) scale(0.98);
          }
          75% {
            transform: translate(-5%, -3%) rotate(-5deg) scale(1.01);
          }
        }
      `}</style>
    </div>
  );
}
