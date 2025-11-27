import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((p) => p.id === product.imageId);

  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/products/${product.slug}`} className="block aspect-square w-full relative overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              data-ai-hint={image.imageHint}
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <CardTitle className="text-lg font-headline">
            <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors duration-300">
              {product.name}
            </Link>
          </CardTitle>
          <CardDescription className="mt-1 text-sm line-clamp-2">{product.description}</CardDescription>
        </div>
        <div className="text-xs text-muted-foreground mt-3 pt-3 border-t">
          <div className="flex justify-between"><span>Material:</span> <span>{product.details.material}</span></div>
          <div className="flex justify-between"><span>Size:</span> <span>{product.details.size}</span></div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild size="sm" className="w-full">
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
