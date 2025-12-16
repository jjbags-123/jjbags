
import {NextRequest} from 'next/server';
import {products} from '@/lib/data/products';
import {blogPosts} from '@/lib/data/blog';

const staticRoutes = ['', '/about', '/products', '/corporate-orders', '/blog', '/contact', '/faq'];
const productSlugs = products.map(product => `/products/${product.slug}`);
const blogPostSlugs = blogPosts.map(post => `/blog/${post.slug}`);
const allPaths = [...staticRoutes, ...productSlugs, ...blogPostSlugs];

export async function GET(request: NextRequest) {
  const headers = request.headers;
  const host = headers.get('host');
  const protocol = headers.get('x-forwarded-proto') || 'http';

  // Ensure host is not null or undefined to construct a valid URL
  if (!host) {
    return new Response('Could not determine host from request headers.', {
      status: 400,
    });
  }

  const siteUrl = `${protocol}://${host}`;

  const sitemapEntries = allPaths
    .map(path => {
      return `
    <url>
      <loc>${siteUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`;
    })
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
