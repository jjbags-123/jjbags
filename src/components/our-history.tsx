
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FiShoppingBag } from 'react-icons/fi';

export function OurHistory() {
  const historyImage = PlaceHolderImages.find(p => p.id === 'history-bags');

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="relative md:col-span-2">
          <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 w-full h-full border-8 border-primary/10 rounded-lg -z-10"></div>
          {historyImage && (
            <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                src={historyImage.imageUrl}
                alt="Our History"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                data-ai-hint={historyImage.imageHint}
                />
            </div>
          )}
        </div>
        <div className="md:col-span-3">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">MORE ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-headline">
            Our <span className="text-primary">History</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            JJ Bags is one of the fast-growing manufacturers in the Jute and Cotton industry. We are engaged in manufacturing all kinds of Jute Bags, Cotton Bags, Shopping Bags, and more.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <FiShoppingBag className="h-6 w-6 text-primary" />
              Serving 3+ Years
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">
            Call Us: <a href="tel:+918248109131" className="font-semibold text-foreground hover:text-primary">+91 82481 09131</a>
          </p>
          <Button asChild className="mt-6">
            <Link href="/about">Read More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
