
"use client";

import { useEffect, useMemo } from 'react';
import { motion, useAnimation, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
};

export const AnimatedSection = ({ children, className = "", as: Component = "div", ...props }: AnimatedSectionProps) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const MotionComponent = useMemo(() => motion(Component), [Component]);

    return (
        <MotionComponent
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(className)}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};
