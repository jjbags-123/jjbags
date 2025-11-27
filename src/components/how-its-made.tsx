
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GiSprout, GiWashingMachine, GiRolledCloth } from 'react-icons/gi';

const features = [
  {
    step: 'Step 1',
    title: 'Raw Material',
    content: 'Ethically sourced jute & cotton fibers from trusted partners.',
    icon: <GiSprout className="text-primary h-6 w-6" />,
    image: '/images/making/step1.webp',
  },
  {
    step: 'Step 2',
    title: 'Weave & Laminate',
    content: 'Precision weaving; optional PE lamination for resilience.',
    icon: <GiRolledCloth className="text-primary h-6 w-6" />,
    image: '/images/making/step2.webp',
  },
  {
    step: 'Step 3',
    title: 'Stitch & Finish',
    content: 'Reinforced seams, QC checks, and customized branding.',
    icon: <GiWashingMachine className="text-primary h-6 w-6" />,
    image: '/images/making/step3.webp',
  },
];

export function HowItsMade() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentFeature((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + 100 / (5000 / 100); // 5 seconds per feature
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSetFeature = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <div className={'container mx-auto px-4'}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-headline tracking-tighter">
              How it’s made
            </h2>
            <p className="text-muted-foreground mt-3">
              From raw fiber to finished bag responsibly crafted, end-to-end.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 items-center">
          <div className="order-2 space-y-6 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 md:gap-6 cursor-pointer"
                initial={{ opacity: 0.4, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.4,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => handleSetFeature(index)}
              >
                <motion.div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full border-2 mt-1 shrink-0',
                    index === currentFeature
                      ? 'border-primary bg-primary/10 text-primary scale-110 shadow-lg shadow-primary/20'
                      : 'border-muted-foreground/30 bg-muted text-muted-foreground',
                  )}
                >
                  {feature.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl font-headline">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div
            className={cn(
              'border-primary/10 relative order-1 h-[250px] overflow-hidden rounded-xl border-2 shadow-2xl shadow-primary/10 md:order-2 md:h-[400px] lg:h-[450px] w-full',
            )}
          >
            <AnimatePresence mode="wait">
              {features.map((feature, index) => {
                  return index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="h-full w-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="from-black/50 via-black/20 absolute inset-0 bg-gradient-to-t to-transparent" />
                      <div className="bg-background/80 absolute bottom-4 left-4 rounded-lg p-2 backdrop-blur-sm shadow-lg">
                        <span className="text-primary text-xs font-semibold">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  )
                }
              )}
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                 <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
