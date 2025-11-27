
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FiStar } from "react-icons/fi";
import { ImQuotesLeft } from "react-icons/im";
import type { Testimonial } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [api, setApi] = React.useState<React.ComponentProps<typeof Carousel>['setApi']>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

   const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel 
        plugins={[plugin.current]}
        setApi={setApi} 
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            return (
              <CarouselItem key={index}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="p-0 text-center">
                    <ImQuotesLeft className="mx-auto w-12 h-12 text-primary/10 mb-4" />
                    <p className="text-muted-foreground text-lg md:text-xl italic mb-6 max-w-3xl mx-auto">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        <div className="flex items-center space-x-1 mt-2">
                           {Array.from({ length: 5 }).map((_, i) => (
                            <FiStar
                              key={i}
                              className={cn(
                                "h-5 w-5",
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-muted-foreground/30"
                              )}
                            />
                          ))}
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="relative -translate-x-0 -translate-y-0 top-0 left-0 static" />
             <div className="flex items-center gap-2">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                        "h-2 w-2 rounded-full transition-all",
                        current === index + 1 ? "w-4 bg-primary" : "bg-muted"
                        )}
                    />
                ))}
            </div>
            <CarouselNext className="relative -translate-x-0 -translate-y-0 top-0 right-0 static" />
        </div>
      </Carousel>
    </div>
  );
}
