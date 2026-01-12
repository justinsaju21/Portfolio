'use client';
import { useEffect, useRef, useState } from 'react';

interface SplashCursorProps {
    DENSITY_DISSIPATION?: number;
    VELOCITY_DISSIPATION?: number;
    SPLAT_RADIUS?: number;
    SPLAT_FORCE?: number;
    COLOR_UPDATE_SPEED?: number;
}

function SplashCursor({
    DENSITY_DISSIPATION = 3.5,
    VELOCITY_DISSIPATION = 2,
    SPLAT_RADIUS = 0.2,
    SPLAT_FORCE = 6000,
    COLOR_UPDATE_SPEED = 10,
}: SplashCursorProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationFrameId = useRef<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return; // Don't render on mobile

        const canvas = canvasRef.current;
        if (!canvas) return;

        let isActive = true;

        const config = {
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 1024,
            DENSITY_DISSIPATION,
            VELOCITY_DISSIPATION,
            PRESSURE: 0.1,
            PRESSURE_ITERATIONS: 20,
            CURL: 3,
            SPLAT_RADIUS,
            SPLAT_FORCE,
            SHADING: true,
            COLOR_UPDATE_SPEED,
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let pointer: any = {
            texcoordX: 0,
            texcoordY: 0,
            prevTexcoordX: 0,
            prevTexcoordY: 0,
            deltaX: 0,
            deltaY: 0,
            moved: false,
            color: { r: 0.15, g: 0.15, b: 0.15 }
        };

        const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
        let gl = canvas.getContext('webgl2', params) as WebGL2RenderingContext | null;
        const isWebGL2 = !!gl;
        if (!isWebGL2) gl = (canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params)) as WebGL2RenderingContext | null;

        if (!gl) return;

        let supportLinearFiltering = null;
        if (isWebGL2) {
            gl.getExtension('EXT_color_buffer_float');
            supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
        } else {
            gl.getExtension('OES_texture_half_float');
            supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
        }

        gl.clearColor(0.0, 0.0, 0.0, 0.0);

        if (!supportLinearFiltering) {
            config.DYE_RESOLUTION = 256;
            config.SHADING = false;
        }

        // Simplified fluid simulation - just splats for visual effect
        const simpleFluidEffect = () => {
            if (!gl || !canvas) return;

            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clear(gl.COLOR_BUFFER_BIT);
        };

        const resizeCanvas = () => {
            if (!canvas) return;
            const pixelRatio = window.devicePixelRatio || 1;
            const width = Math.floor(canvas.clientWidth * pixelRatio);
            const height = Math.floor(canvas.clientHeight * pixelRatio);
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const updatePointer = (posX: number, posY: number) => {
            const pixelRatio = window.devicePixelRatio || 1;
            posX = Math.floor(posX * pixelRatio);
            posY = Math.floor(posY * pixelRatio);

            pointer.prevTexcoordX = pointer.texcoordX;
            pointer.prevTexcoordY = pointer.texcoordY;
            pointer.texcoordX = posX / canvas.width;
            pointer.texcoordY = 1.0 - posY / canvas.height;
            pointer.deltaX = pointer.texcoordX - pointer.prevTexcoordX;
            pointer.deltaY = pointer.texcoordY - pointer.prevTexcoordY;
            pointer.moved = Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;

            // Update color occasionally
            if (Math.random() < 0.05) {
                const h = Math.random();
                const c = HSVtoRGB(h, 1.0, 1.0);
                pointer.color = { r: c.r * 0.15, g: c.g * 0.15, b: c.b * 0.15 };
            }
        };

        const HSVtoRGB = (h: number, s: number, v: number) => {
            let r = 0, g = 0, b = 0;
            const i = Math.floor(h * 6);
            const f = h * 6 - i;
            const p = v * (1 - s);
            const q = v * (1 - f * s);
            const t = v * (1 - (1 - f) * s);
            switch (i % 6) {
                case 0: r = v; g = t; b = p; break;
                case 1: r = q; g = v; b = p; break;
                case 2: r = p; g = v; b = t; break;
                case 3: r = p; g = q; b = v; break;
                case 4: r = t; g = p; b = v; break;
                case 5: r = v; g = p; b = q; break;
            }
            return { r, g, b };
        };

        const handleMouseMove = (e: MouseEvent) => {
            updatePointer(e.clientX, e.clientY);
        };

        const update = () => {
            if (!isActive) return;
            resizeCanvas();
            simpleFluidEffect();
            animationFrameId.current = requestAnimationFrame(update);
        };

        window.addEventListener('mousemove', handleMouseMove);
        update();

        return () => {
            isActive = false;
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMobile, DENSITY_DISSIPATION, VELOCITY_DISSIPATION, SPLAT_RADIUS, SPLAT_FORCE, COLOR_UPDATE_SPEED]);

    if (isMobile) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                opacity: 0.6,
                mixBlendMode: 'screen',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100vw',
                    height: '100vh',
                    display: 'block',
                }}
            />
        </div>
    );
}

export default SplashCursor;
