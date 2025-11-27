
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-headline">Ready to Make a Sustainable Choice?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                    Explore our collection of eco-friendly bags or get in touch for a custom corporate order.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 ease-in-out hover:scale-105">
                        <Link href="/products">
                            Browse Our Collection
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-primary-foreground bg-footer text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 ease-in-out hover:scale-105">
                        <Link href="/corporate-orders">
                            Request a Quote
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
