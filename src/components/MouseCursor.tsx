'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MouseCursor.module.css';

interface TrailDot {
    x: number;
    y: number;
    opacity: number;
}

export default function MouseCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const trailsRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const trails = useRef<TrailDot[]>([]);
    const animationFrame = useRef<number | undefined>(undefined);

    useEffect(() => {
        // Only run on desktop (check touch device)
        const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
        if (isTouchDevice) {
            return;
        }

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            setIsVisible(true);

            // Add trail dot
            trails.current.push({
                x: e.clientX,
                y: e.clientY,
                opacity: 1
            });

            // Limit trail length
            if (trails.current.length > 20) {
                trails.current.shift();
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Track interactive elements
        const handleElementHover = (e: Event) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('btn') ||
                target.closest('.btn')
            ) {
                setIsHovering(true);
            }
        };

        const handleElementLeave = () => {
            setIsHovering(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleElementHover);
        document.addEventListener('mouseout', handleElementLeave);

        // Animation loop
        const animate = () => {
            // Smooth cursor follow
            const dx = mousePos.current.x - cursorPos.current.x;
            const dy = mousePos.current.y - cursorPos.current.y;
            cursorPos.current.x += dx * 0.15;
            cursorPos.current.y += dy * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
            }

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
            }

            // Update trails
            trails.current = trails.current.map(dot => ({
                ...dot,
                opacity: dot.opacity * 0.92
            })).filter(dot => dot.opacity > 0.05);

            // Render trails
            if (trailsRef.current) {
                trailsRef.current.innerHTML = trails.current
                    .map((dot, i) => {
                        const size = 4 + (i / trails.current.length) * 8;
                        const hue = 200 + (i / trails.current.length) * 60;
                        return `<div style="
                            position: fixed;
                            left: ${dot.x}px;
                            top: ${dot.y}px;
                            width: ${size}px;
                            height: ${size}px;
                            background: radial-gradient(circle, hsla(${hue}, 100%, 70%, ${dot.opacity * 0.6}) 0%, transparent 70%);
                            border-radius: 50%;
                            transform: translate(-50%, -50%);
                            pointer-events: none;
                        "></div>`;
                    })
                    .join('');
            }

            animationFrame.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleElementHover);
            document.removeEventListener('mouseout', handleElementLeave);
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <>
            {/* Trail container */}
            <div ref={trailsRef} className={styles.trailContainer} />

            {/* Main cursor ring */}
            <div
                ref={cursorRef}
                className={`${styles.cursor} ${isHovering ? styles.hovering : ''} ${isClicking ? styles.clicking : ''} ${isVisible ? styles.visible : ''}`}
            >
                <div className={styles.cursorRing} />
                <div className={styles.cursorGlow} />
            </div>

            {/* Center dot */}
            <div
                ref={cursorDotRef}
                className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''} ${isClicking ? styles.clicking : ''} ${isVisible ? styles.visible : ''}`}
            />
        </>
    );
}
