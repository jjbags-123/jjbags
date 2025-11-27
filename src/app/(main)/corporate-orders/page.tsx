
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitCorporateOrder } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedSection } from "@/components/animated-section";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? "Submitting Inquiry..." : "Submit Inquiry"}
    </Button>
  );
}

export default function CorporateOrdersPage() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitCorporateOrder, {
    message: "",
    errors: {},
  });

  useEffect(() => {
    if (state.message && !Object.keys(state.errors).length) {
      toast({
        title: "Inquiry Submitted!",
        description: state.message,
      });
    } else if (state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive"
      });
    }
  }, [state, toast]);

  return (
    <div className="w-full">
        <AnimatedSection className="bg-primary/20 text-foreground">
            <div className="container mx-auto text-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-headline">Corporate & Bulk Orders</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Custom bags for your brand, event, or business.
                </p>
            </div>
        </AnimatedSection>

        <AnimatedSection className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:order-2 bg-card p-6 md:p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-headline mb-4">Request a Quote</h3>
                     <form action={formAction} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div>
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input id="companyName" name="companyName" required />
                                {state.errors?.companyName && <p className="text-sm text-destructive mt-1">{state.errors.companyName[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="contactPerson">Contact Person</Label>
                                <Input id="contactPerson" name="contactPerson" required />
                                {state.errors?.contactPerson && <p className="text-sm text-destructive mt-1">{state.errors.contactPerson[0]}</p>}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                            {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div>
                                <Label htmlFor="quantity">Estimated Quantity</Label>
                                <Input id="quantity" name="quantity" type="number" min="10" placeholder="Min. 10" required />
                                {state.errors?.quantity && <p className="text-sm text-destructive mt-1">{state.errors.quantity[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="bagType">Bag Type</Label>
                                <Select name="bagType" required>
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
                                {state.errors?.bagType && <p className="text-sm text-destructive mt-1">{state.errors.bagType[0]}</p>}
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="requirements">Specific Requirements</Label>
                            <Textarea id="requirements" name="requirements" rows={4} placeholder="Describe your needs (e.g., custom printing, size, timeline)..." required />
                            {state.errors?.requirements && <p className="text-sm text-destructive mt-1">{state.errors.requirements[0]}</p>}
                        </div>
                        <SubmitButton />
                    </form>
                </div>
                 <div className="md:order-1">
                    <h2 className="text-3xl lg:text-4xl font-headline">Partner with Us</h2>
                    <p className="mt-4 text-muted-foreground text-lg">
                        Looking for sustainable and stylish bags for your company? We offer custom printing, bulk discounts, and tailored solutions to meet your needs.
                    </p>
                    <ul className="mt-6 space-y-4">
                        <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold">Custom Branding</h4>
                                <p className="text-muted-foreground">Add your logo or design to our high-quality bags.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold">Bulk Discounts</h4>
                                <p className="text-muted-foreground">Competitive pricing for orders of 10 units or more.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <span className="text-primary mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold">Eco-Friendly Choice</h4>
                                <p className="text-muted-foreground">Showcase your brand's commitment to sustainability.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    </div>
  );
}
