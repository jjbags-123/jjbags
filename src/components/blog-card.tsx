
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

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
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
      <Card className="group flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl h-full">
        <CardHeader className="p-0">
          <Link href={`/blog/${post.slug}`} className="block aspect-video w-full relative overflow-hidden">
            {image && (
              <Image
                src={image.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={image.imageHint}
              />
            )}
          </Link>
        </CardHeader>
        <div className="flex flex-col flex-1 p-6">
          <CardContent className="p-0 flex-grow">
            <p className="text-sm text-muted-foreground">{post.date} &bull; {post.author}</p>
            <CardTitle className="text-xl lg:text-2xl font-headline mt-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors duration-300">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="mt-2 text-base line-clamp-3">{post.excerpt}</CardDescription>
          </CardContent>
          <CardFooter className="p-0 pt-4 mt-auto">
            <Link href={`/blog/${post.slug}`} className="font-semibold text-primary hover:text-primary/80 flex items-center group transition-colors duration-300">
              Read More <FiArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
