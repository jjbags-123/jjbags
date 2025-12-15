
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/corporate-orders", label: "Corporate" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center justify-center space-x-6 text-sm font-medium" aria-label="Main navigation">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "transition-colors duration-300 ease-in-out hover:text-primary",
            pathname === item.href ? "text-primary font-bold" : "text-foreground/80"
          )}
           aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
