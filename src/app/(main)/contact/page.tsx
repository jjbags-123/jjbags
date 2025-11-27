
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { AnimatedSection } from "@/components/animated-section";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Send Message"}
    </Button>
  );
}

const contactDetails = [
    {
        icon: FiPhone,
        title: "Phone",
        lines: ["+91 8248109131", "+91 6374051113"],
    },
    {
        icon: FiMail,
        title: "Email",
        lines: ["contactus@jjbags.in"],
    },
    {
        icon: FiMapPin,
        title: "Chennai Office",
        lines: ["No.8/133 , Kalaignar street", "Sithalapakkam, Chennai", "Tamil Nadu - 600131"],
    },
     {
        icon: FiMapPin,
        title: "Kolkata Office",
        lines: ["Benaras Road (Opp. Bara Masjid)", "Eskara, Howrah", "West Bengal - 711323"],
    },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, {
    message: "",
    errors: {},
  });

  useEffect(() => {
    if (state.message && state.errors.message === undefined) {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state.message) {
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive"
        })
    }
  }, [state, toast]);

  return (
    <div className="w-full bg-secondary/30">
        <AnimatedSection className="w-full bg-secondary/50">
            <div className="container mx-auto text-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-headline">Get in Touch</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We'd love to hear from you.
                </p>
            </div>
        </AnimatedSection>
        <AnimatedSection className="container mx-auto px-4 pb-12 md:pb-24">

             <div className="mb-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
                    {contactDetails.map((detail, index) => (
                        <Card key={index}>
                            <CardContent className="p-6 flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-6">
                                <div className="bg-primary text-primary-foreground h-16 w-16 rounded-full flex items-center justify-center shrink-0">
                                    <detail.icon className="h-8 w-8" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-semibold mb-1">{detail.title}</h3>
                                    {detail.lines.map((line, i) => (
                                        <p key={i} className="text-muted-foreground">{line}</p>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                    <div className="w-full rounded-lg overflow-hidden shadow-md aspect-square md:aspect-auto h-full min-h-[400px] md:min-h-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4785.7331120407225!2d80.1910913!3d12.8847054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261e61759c5c9%3A0xe9ff23210a1dc114!2sJJ%20Bags!5e1!3m2!1sen!2sin!4v1763615898484!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="JJ Bags Chennai Location"
                        ></iframe>
                    </div>

                    <div>
                        <CardHeader className="p-0 mb-6">
                            <CardTitle className="text-3xl font-headline">Get in Touch</CardTitle>
                            <CardDescription>We'd love to hear from you. Fill out the form below.</CardDescription>
                        </CardHeader>
                        <form action={formAction} className="space-y-4">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" name="name" required />
                                 {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" required />
                                 {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone (Optional)</Label>
                                <Input id="phone" name="phone" type="tel" />
                                 {state.errors?.phone && <p className="text-sm text-destructive mt-1">{state.errors.phone[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" name="message" rows={5} required />
                                 {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                            </div>
                            <SubmitButton />
                        </form>
                    </div>
            </div>
        </AnimatedSection>
    </div>
  );
}
