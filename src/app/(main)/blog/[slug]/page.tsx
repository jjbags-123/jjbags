
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next'
import { blogPosts } from "@/lib/data/blog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ProductRecommendations } from "@/components/product-recommendations";
import { products } from "@/lib/data/products";
import { AnimatedSection } from "@/components/animated-section";
import { FiChevronLeft } from "react-icons/fi";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found'
    }
  }

  const previousImages = (await parent).openGraph?.images || []
  const image = PlaceHolderImages.find((p) => p.id === post.imageId);


  return {
    title: `${post.title} | JJ Bags Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | JJ Bags Blog`,
      description: post.excerpt,
      images: image ? [image.imageUrl, ...previousImages] : previousImages,
    },
     twitter: {
      card: "summary_large_image",
      title: `${post.title} | JJ Bags Blog`,
      description: post.excerpt,
      images: image ? [image.imageUrl] : [],
    },
  }
}


export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === post.imageId);
  const latestProducts = products.slice(0, 3);

  return (
    <AnimatedSection as="div" className="w-full">
        <div className="container mx-auto px-4">
          <article className="py-12 md:py-16 max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300 ease-in-out hover:text-foreground">
                <FiChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </div>
            <header className="mb-8 text-center">
                <p className="text-muted-foreground">{post.date} &bull; by {post.author}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline mt-2">{post.title}</h1>
            </header>

            {image && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8 shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                  priority
                  data-ai-hint={image.imageHint}
                />
              </div>
            )}
            
            <div 
              className="prose prose-lg max-w-none prose-p:font-body prose-headings:font-headline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

          </article>
        </div>
      <ProductRecommendations products={latestProducts} />
    </AnimatedSection>
  );
}
