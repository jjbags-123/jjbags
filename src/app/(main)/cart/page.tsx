import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiShoppingBag } from 'react-icons/fi';

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 text-center">
      <FiShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
      <h1 className="text-3xl font-headline mt-6">Your Cart is Empty</h1>
      <p className="mt-2 text-muted-foreground">
        Looks like you haven't added any fantastic bags to your cart yet.
      </p>
      <Button asChild className="mt-8">
        <Link href="/products">Start Shopping</Link>
      </Button>
    </div>
  );
}
