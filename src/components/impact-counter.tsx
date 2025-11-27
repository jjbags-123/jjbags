
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface ImpactCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export function ImpactCounter({ target, suffix = "", duration = 2000 }: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (startTime === null) {
          startTime = currentTime;
        }
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);

        setCount(Math.floor(easedProgress * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, target, duration]);

  const formatNumber = (num: number) => {
    if (target >= 1000000) {
       const value = num / 1000000;
       return value.toFixed(value % 1 === 0 ? 0 : 1);
    }
    return Math.round(num).toLocaleString();
  };

  const displayValue = formatNumber(count);
  const finalSuffix = target >= 1000000 && suffix === "M+" ? "M+" : suffix;

  return (
    <div ref={ref} className="text-4xl font-bold text-primary">
      <span>{displayValue}</span>
      <span>{finalSuffix}</span>
    </div>
  );
}
