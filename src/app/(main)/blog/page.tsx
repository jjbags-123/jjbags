
import { BlogCard } from "@/components/blog-card";
import { blogPosts } from "@/lib/data/blog";
import { CtaSection } from "@/components/cta";
import { FeaturedBlogPost } from "@/components/featured-blog-post";

export default function BlogPage() {
  const latestPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline">From the Journal</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on sustainable living, eco-friendly fashion, and the stories behind our products.
          </p>
        </div>

        {latestPost && <FeaturedBlogPost post={latestPost} />}

        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {otherPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
      <CtaSection />
    </>
  );
}
