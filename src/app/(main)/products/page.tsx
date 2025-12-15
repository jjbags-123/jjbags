
"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data/products";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Product } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CtaSection } from "@/components/cta";
import { AnimatedSection } from "@/components/animated-section";


const categories = ["All", "Jute", "Juco", "Tote", "Non-Woven"];

export default function ProductsPage() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      <AnimatedSection className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline">Eco-Friendly Jute & Sustainable Bags</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of high-quality, reusable bags in India. We craft a diverse range of biodegradable bags from natural materials like jute, juco, and cotton, perfect for eco-conscious consumers and businesses looking for sustainable solutions.
          </p>
        </div>

        <div className="mb-8">
          {/* Tabs for desktop */}
          <Tabs defaultValue="All" onValueChange={setCategory} className="w-full hidden md:block">
            <TabsList className="grid w-full grid-cols-5 max-w-xl mx-auto">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Select for mobile */}
          <div className="md:hidden max-w-xs mx-auto">
            <Select onValueChange={setCategory} defaultValue="All">
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center col-span-full py-16">
            <p className="text-muted-foreground text-lg">No products found in this category.</p>
          </div>
        )}
      </AnimatedSection>
      <CtaSection />
    </>
  );
}
