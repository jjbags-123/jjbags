import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next'
import { products } from "@/lib/data/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FiChevronLeft } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { ProductRecommendations } from "@/components/product-recommendations";
import { AnimatedSection } from "@/components/animated-section";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found'
    }
  }

  const previousImages = (await parent).openGraph?.images || []
  const image = PlaceHolderImages.find((p) => p.id === product.imageId);


  return {
    title: `${product.name} - Eco-Friendly ${product.category} Bag`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Eco-Friendly ${product.category} Bag`,
      description: product.description,
      images: image ? [image.imageUrl, ...previousImages] : previousImages,
    },
     twitter: {
      card: "summary_large_image",
      title: `${product.name} - Eco-Friendly ${product.category} Bag`,
      description: product.description,
      images: image ? [image.imageUrl] : [],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === product.imageId);
  const latestProducts = products.slice(0, 4).filter(p => p.id !== product.id).slice(0, 3);
  const whatsappMessage = `Hi! I'm interested in the product: ${product.name} (${product.slug}). Can you provide more information?`;
  const whatsappUrl = `https://wa.me/918248109131?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatedSection as="div" className="w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground">
            <FiChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="aspect-square w-full relative rounded-lg overflow-hidden shadow-lg">
            {image && (
              <Image
                src={image.imageUrl}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={image.imageHint}
              />
            )}
          </div>
          <div className="w-full">
            <Badge variant="secondary">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline mt-2">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{product.description}</p>
            
            <Separator className="my-6"/>

            <div className="space-y-4 text-base">
                <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Material:</span>
                    <span className="font-medium">{product.details.material}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-muted-foreground">Size:</span>
                    <span className="font-medium">{product.details.size}</span>
                </div>
                 <div className="pt-4">
                    <p className="text-sm text-muted-foreground">For custom orders and pricing, please contact us. Minimum order quantity of 100 bags is mandatory for customization. Printing charges, taxes, and delivery fees are extra.</p>
                </div>
            </div>
             <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ProductRecommendations products={latestProducts} />
    </AnimatedSection>
  );
}
