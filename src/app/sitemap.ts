import { MetadataRoute } from 'next'
import { products } from '@/lib/data/products';
import { blogPosts } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://jjbags.in';

  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/corporate-orders',
    '/blog',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...productRoutes, ...blogPostRoutes];
}
