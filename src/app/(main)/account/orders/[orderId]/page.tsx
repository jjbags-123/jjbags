import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { orders } from "@/lib/data/orders";
import { products } from "@/lib/data/products";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { FiPackage, FiCheckCircle } from 'react-icons/fi';
import { LiaRocketSolid } from 'react-icons/lia';
import { BsBoxSeam } from 'react-icons/bs';

interface OrderDetailsPageProps {
  params: {
    orderId: string;
  };
}

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const order = orders.find((o) => o.id === params.orderId);

  if (!order) {
    notFound();
  }

  const statusSteps = ["Processing", "Shipped", "Delivered"];
  const currentStatusIndex = statusSteps.indexOf(order.status);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Processing": return <BsBoxSeam className="h-6 w-6" />;
      case "Shipped": return <LiaRocketSolid className="h-6 w-6" />;
      case "Delivered": return <FiPackage className="h-6 w-6" />;
      default: return <FiCheckCircle className="h-6 w-6" />;
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-headline">Order Details</h1>
        <p className="text-muted-foreground">
          Order #{order.id} &bull; Placed on {new Date(order.date).toLocaleDateString()}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {order.items.map((item) => {
                  const product = products.find((p) => p.id === item.productId);
                  const image = product ? PlaceHolderImages.find((i) => i.id === product.imageId) : undefined;
                  return (
                    <li key={item.productId} className="flex items-center gap-4">
                      <div className="relative h-20 w-20 rounded-md overflow-hidden bg-secondary shrink-0">
                        {image && <Image src={image.imageUrl} alt={item.name} fill className="object-cover" data-ai-hint="product image"/>}
                      </div>
                      <div className="flex-grow">
                        <Link href={`/products/${product?.slug}`} className="font-semibold hover:text-primary">{item.name}</Link>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                  );
                })}
              </ul>
              <Separator className="my-6" />
              <div className="space-y-2 text-right">
                <p>Subtotal: <span className="font-medium">${order.total.toFixed(2)}</span></p>
                <p>Shipping: <span className="font-medium">FREE</span></p>
                <p className="text-xl">Total: <span className="font-bold">${order.total.toFixed(2)}</span></p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -z-10" />
                <ul className="space-y-8">
                  {statusSteps.map((status, index) => {
                    const isActive = index <= currentStatusIndex;
                    return (
                        <li key={status} className="flex items-center gap-4">
                            <div className={cn("h-12 w-12 rounded-full flex items-center justify-center shrink-0", isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground")}>
                                {getStatusIcon(status)}
                            </div>
                            <div>
                                <p className={cn("font-semibold", isActive ? "text-foreground" : "text-muted-foreground")}>{status}</p>
                                {order.status === status && <p className="text-sm text-muted-foreground">Current status</p>}
                            </div>
                        </li>
                    )
                  })}
                </ul>
              </div>
               {order.status === 'Cancelled' && (
                  <div className="mt-6 text-center">
                    <Badge variant="destructive" className="text-base">Order Cancelled</Badge>
                  </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
