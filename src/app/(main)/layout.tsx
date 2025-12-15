
'use client';
import { useState, useEffect } from 'react';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from '@/lib/utils';
import { ScrollToTopButton } from '@/components/scroll-to-top';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setWidth(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} />;
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the header
                    setIsHeaderVisible(false);
                } else { // if scroll up show the header
                    setIsHeaderVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlHeader);

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <ScrollProgress />
      <div className={cn(
          "sticky top-0 z-40 w-full transition-transform duration-300",
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      )}>
        <Header />
      </div>
      <main className="flex-1 animate-fade-in">{children}</main>
      <Footer />
       <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
        <ScrollToTopButton />
        <Link
          href="https://wa.me/918248109131"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center animate-whatsapp-pulse h-16 w-16"
        >
          <FaWhatsapp className="h-8 w-8" />
          <span className="sr-only">Chat on WhatsApp</span>
          <span className="absolute flex h-5 w-5 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">1</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
