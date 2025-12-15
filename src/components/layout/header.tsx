
import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="bg-[#556B2F] text-primary-foreground text-xs sm:text-sm py-1.5 px-4 overflow-x-hidden whitespace-nowrap" role="status" aria-live="polite">
          <span className="inline-block animate-marquee">
            Customized Premium Return gifts Eco-friendly Bags exclusively available at JJ Bags !
          </span>
        </div>
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2" aria-label="JJ Bags Home">
          <Image src="/logo.png" alt="JJ Bags Logo" width={100} height={28} priority data-ai-hint="logo dark"/>
        </Link>
        <div className="flex-1 flex items-center justify-center">
            <MainNav />
        </div>
        <div className="flex items-center justify-end space-x-1 sm:space-x-2">
            {/*
            <Button variant="ghost" size="icon" asChild>
                <Link href="/cart">
                    <FiShoppingBag className="h-5 w-5" />
                    <span className="sr-only">Cart</span>
                </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <Link href="/login">
                    <FiUser className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                </Link>
            </Button>
            */}
          <div className="hidden md:flex">
             <Button asChild>
                <Link href="/contact">Contact</Link>
             </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
