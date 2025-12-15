
"use client";

import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedSection } from "@/components/animated-section";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? "Submitting Inquiry..." : "Submit Inquiry"}
    </Button>
  );
}

export default function CorporateOrdersPage() {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);
  const [bagType, setBagType] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPending(true);

    const formData = new FormData(event.currentTarget);
    
    const googleScriptWebAppUrl = "https://script.google.com/macros/s/AKfycbyOm7DRDO3uZl_33RANf7oWg8jM_LJp0LKWVlCJZ-QPHV85uLHcIq-1Wnq9i6s5Mwqy/exec";

    try {
      const response = await fetch(googleScriptWebAppUrl, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.result === "success") {
        toast({
          title: "Inquiry Submitted!",
          description: "Thank you! Your corporate inquiry has been submitted successfully. We will get back to you shortly.",
        });
        (event.target as HTMLFormElement).reset();
        setBagType('');
      } else {
        throw new Error(result.message || "An unknown error occurred.");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="w-full">
        <AnimatedSection className="bg-primary/20 text-foreground">
            <div className="container mx-auto text-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-headline">Custom Jute Bags & Corporate Gift Bags</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Customized canvas and jute bags for your brand, event, or business. The perfect sustainable corporate gift.
                </p>
            </div>
        </AnimatedSection>

        <AnimatedSection className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2 bg-card p-6 md:p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-headline mb-4">Request a Quote for Custom Bags</h3>
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="hidden" name="formType" value="corporate" />
                         {/* Honeypot field for spam protection */}
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div>
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input id="companyName" name="companyName" required />
                            </div>
                            <div>
                                <Label htmlFor="contactPerson">Contact Person</Label>
                                <Input id="contactPerson" name="contactPerson" required />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                        </div>
                         <div>
                            <Label htmlFor="phone">Phone (Optional)</Label>
                            <Input id="phone" name="phone" type="tel" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div>
                                <Label htmlFor="quantity">Estimated Quantity</Label>
                                <Input id="quantity" name="quantity" type="number" min="10" placeholder="Min. 10" required />
                            </div>
                            <div>
                                <Label htmlFor="bagType">Bag Type</Label>
                                <Select name="bagType" required onValueChange={setBagType} value={bagType}>
                                    <SelectTrigger id="bagType">
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="jute">Jute Bags</SelectItem>
                                        <SelectItem value="juco">Juco Bags</SelectItem>
                                        <SelectItem value="tote">Canvas Totes</SelectItem>
                                        <SelectItem value="other">Other/Not Sure</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="requirements">Specific Requirements</Label>
                            <Textarea id="requirements" name="requirements" rows={4} placeholder="Describe your needs (e.g., custom printing, size, timeline)..." required />
                        </div>
                        <SubmitButton pending={pending} />
                    </form>
                </div>
                 <div className="md:order-1">
                    <h2 className="text-3xl lg:text-4xl font-headline">Partner with Us for Corporate Gifting</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Looking for sustainable and stylish corporate gift bags? We offer custom printing, bulk discounts, and tailored solutions for your custom jute bags.
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold">Custom Branding</h4>
                                <p className="text-muted-foreground">Add your logo to our high-quality customized canvas bags.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold">Bulk Discounts</h4>
                                <p className="text-muted-foreground">Competitive pricing for bulk orders of corporate gift bags.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold">Eco-Friendly Choice</h4>
                                <p className="text-muted-foreground">Showcase your brand's commitment to sustainability with our biodegradable bags.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    </div>
  );
}
