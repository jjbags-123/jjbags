
'use client';

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
import { FiArrowRight } from "react-icons/fi";
import type { BlogPost } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FeaturedBlogPostProps {
  post: BlogPost;
}

export function FeaturedBlogPost({ post }: FeaturedBlogPostProps) {
  const image = PlaceHolderImages.find((p) => p.id === post.imageId);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card className="group grid md:grid-cols-2 overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl w-full">
        <div className="p-6 md:p-8 flex flex-col">
          <CardHeader className="p-0">
            <p className="text-sm text-primary font-semibold mb-2">Latest Post</p>
            <CardTitle className="text-2xl lg:text-3xl font-headline">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-4 flex-grow">
            <CardDescription className="text-base line-clamp-4">{post.excerpt}</CardDescription>
          </CardContent>
          <CardFooter className="p-0 pt-6">
            <Link href={`/blog/${post.slug}`} className="font-semibold text-primary hover:text-primary/80 flex items-center group transition-colors duration-300">
              Read More <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </CardFooter>
        </div>
        <div className="aspect-video w-full relative overflow-hidden order-first md:order-last min-h-[250px]">
            {image && (
                <Image
                src={image.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={image.imageHint}
                priority
                />
            )}
        </div>
      </Card>
    </motion.div>
  );
}
