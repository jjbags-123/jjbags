
'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data/products";
import { FiArrowRight } from "react-icons/fi";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { testimonials } from "@/lib/data/testimonials";
import { ImpactCounter } from "@/components/impact-counter";
import { HowItsMade } from "@/components/how-its-made";
import { OurHistory } from "@/components/our-history";
import { FaqHome } from "@/components/faq-home";
import { CtaSection } from "@/components/cta";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  const heroImage = {
    imageUrl: "/images/hero-topdown.webp",
    imageHint: "jute bags collection",
    description: "Collection of eco-friendly bags"
  };
  const featuredProducts = products.slice(0, 3);
  
  const impactStats = [
      { value: 1000000, suffix: "M+", label: "Plastic Bags Saved", description: "and counting, thanks to our community." },
      { value: 100, suffix: "%", label: "Natural Materials", description: "Jute, Juco, and Cotton from sustainable sources." },
      { value: 500, suffix: "+", label: "Artisans Supported", description: "Empowering local communities with fair wages." }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-background">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-16 md:py-20 px-4">
          <div className="text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-headline tracking-tighter">
              <span className="block">No Plastic is</span>
              <span className="inline-block px-4 -skew-x-12 bg-primary text-primary-foreground">Fantastic</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto md:mx-0 text-lg text-muted-foreground">
              Premium jute, juco, canvas, and non-woven bags. Built to last.
              Designed to be loved.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="transition-all duration-300 ease-in-out hover:scale-105">
                    <Link href="/products">
                      Browse catalog
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="transition-all duration-300 ease-in-out hover:scale-105">
                    <Link href="/contact">
                      Talk to us
                    </Link>
                </Button>
            </div>
          </div>
           <div className="relative aspect-square w-full max-w-md mx-auto">
            {heroImage && 
              <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={heroImage.imageHint}
                  priority
              />
            }
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <AnimatedSection className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline">Featured Products</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Handpicked for you, our most popular eco-friendly bags.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
              <Button asChild variant="outline" className="transition-all duration-300 ease-in-out hover:scale-105">
                  <Link href="/products">
                      View All Products <FiArrowRight className="ml-2 h-4 w-4" />
                  </Link>
              </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* How It's Made Section */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-secondary/50">
        <HowItsMade />
      </AnimatedSection>

      {/* History Section */}
      <AnimatedSection className="w-full py-16 md:py-24">
        <OurHistory />
      </AnimatedSection>

      {/* Impact Section */}
      <AnimatedSection className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-headline">Our Impact</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                We believe that small choices can make a big difference. Our commitment to sustainability is at the heart of everything we do.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                {impactStats.map(stat => (
                    <div key={stat.label} className="bg-background p-6 sm:p-8 rounded-lg shadow-sm border transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                        <ImpactCounter target={stat.value} suffix={stat.suffix} />
                        <p className="mt-2 font-semibold text-lg">{stat.label}</p>
                        <p className="text-sm text-muted-foreground mt-1">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="w-full py-16 md:py-24 bg-secondary/50">
        <FaqHome />
      </AnimatedSection>

      {/* Testimonials */}
       <AnimatedSection className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline">What Our Customers Say</h2>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
