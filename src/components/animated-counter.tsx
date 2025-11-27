
"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useInView } from 'react-intersection-observer';
import { motion, HTMLMotionProps } from 'framer-motion';

type AnimatedCounterProps = HTMLMotionProps<'span'> & {
    target: number;
    suffix?: string;
    duration?: number;
};

export const AnimatedCounter = ({ target, suffix = "", duration = 2000, ...props }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const hasAnimated = useRef(false);

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    useEffect(() => {
        if (inView && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = 0;
            const end = target;
            if (start === end) return;

            let startTime: number | null = null;
            const animate = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOutCubic(progress);
                
                setCount(Math.floor(easedProgress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [inView, target, duration]);

    const MotionSpan = useMemo(() => motion.span, []);

    return (
        <MotionSpan ref={ref} className="metric-value" {...props}>
            {count.toLocaleString()}{suffix}
        </MotionSpan>
    );
};
