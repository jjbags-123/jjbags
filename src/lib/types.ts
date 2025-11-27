export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: 'Jute' | 'Juco' | 'Tote' | 'Non-Woven';
  details: {
    size: string;
    material: string;
  };
  imageId: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  imageId: string;
};

export type Order = {
    id: string;
    date: string;
    status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
    total: number;
    items: {
        productId: string;
        name: string;
        quantity: number;
        price: number;
    }[];
}

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  rating: number;
}
