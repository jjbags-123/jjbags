import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const productLinks = [
    { href: "/products", label: "All Products" },
    { href: "/corporate-orders", label: "Corporate Orders" },
];

const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

const legalLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-footer text-primary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" aria-label="JJ Bags Home">
               <Image src="/logo.png" alt="JJ Bags Logo" width={114} height={32} style={{ filter: 'brightness(0) invert(1)' }} priority data-ai-hint="logo dark"/>
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Premium, eco-friendly bags that blend sustainability with style.
            </p>
            <div className="flex items-center space-x-4 pt-2">
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-300" aria-label="Facebook page">
                <FaFacebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-300" aria-label="Instagram page">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white transition-colors duration-300" aria-label="Twitter page">
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
                </Link>
            </div>
          </div>
           <div className="grid grid-cols-2 md:col-span-3 gap-8 md:grid-cols-3">
               <nav>
                    <h3 className="font-semibold text-white">Products</h3>
                    <ul className="mt-4 space-y-2">
                        {productLinks.map(link => (
                             <li key={link.href}>
                                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
               </nav>
               <nav>
                    <h3 className="font-semibold text-white">Company</h3>
                    <ul className="mt-4 space-y-2">
                        {companyLinks.map(link => (
                             <li key={link.href}>
                                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
               </nav>
               <nav>
                    <h3 className="font-semibold text-white">Legal</h3>
                    <ul className="mt-4 space-y-2">
                        {legalLinks.map((link, index) => (
                             <li key={`${link.label}-${index}`}>
                                <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors duration-300">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
               </nav>
           </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mb-4">
                 <a href="mailto:contactus@jjbags.in" className="hover:text-white transition-colors duration-300">contactus@jjbags.in</a>
                 <span className="hidden md:inline">|</span>
                 <a href="tel:+918248109131" className="hover:text-white transition-colors duration-300">+91 82481 09131</a>
                 <span className="hidden md:inline">|</span>
                 <a href="tel:+916374051113" className="hover:text-white transition-colors duration-300">+91 63740 51113</a>
            </div>
          &copy; {new Date().getFullYear()} JJ Bags. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
