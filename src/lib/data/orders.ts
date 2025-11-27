import type { Order } from '@/lib/types';

export const orders: Order[] = [
  {
    id: 'JJB-98765',
    date: '2024-07-20',
    status: 'Shipped',
    total: 64.98,
    items: [
      {
        productId: 'prod-001',
        name: 'Classic Jute Tote Bag',
        quantity: 1,
        price: 24.99,
      },
      {
        productId: 'prod-007',
        name: 'Striped Beach Tote',
        quantity: 1,
        price: 35.00,
      }
    ],
  },
  {
    id: 'JJB-98764',
    date: '2024-06-12',
    status: 'Delivered',
    total: 65.00,
    items: [
      {
        productId: 'prod-005',
        name: 'Professional Juco Laptop Bag',
        quantity: 1,
        price: 65.00,
      }
    ],
  },
    {
    id: 'JJB-98763',
    date: '2024-03-05',
    status: 'Delivered',
    total: 37.49,
    items: [
       {
        productId: 'prod-003',
        name: 'Small Jute Pouch',
        quantity: 1,
        price: 14.99,
      },
       {
        productId: 'prod-006',
        name: 'Canvas Tote with Quote',
        quantity: 1,
        price: 22.50,
      }
    ],
  },
];
