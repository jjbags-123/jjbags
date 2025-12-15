
"use client";

import { useState, type FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { AnimatedSection } from "@/components/animated-section";

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Submitting..." : "Send Message"}
    </Button>
  );
}

const contactDetails = [
    {
        icon: FiMapPin,
        title: "Chennai Office | Jute Bag Manufacturer",
        lines: ["No.8/133 , Kalaignar street", "Sithalapakkam, Chennai", "Tamil Nadu - 600131"],
        phone: "+91 8248109131",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.358249099815!2d80.19109131482186!3d12.948943890871374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e79b4b45d0f%3A0x8f0b4845a7a72d6a!2sJJ%20Bags!5e0!3m2!1sen!2sin!4v1628582888981!5m2!1sen!2sin",
        mapTitle: "JJ Bags Chennai Location"
    },
     {
        icon: FiMapPin,
        title: "Kolkata Office | Sustainable Bags Supplier",
        lines: ["Benaras Road (Opp. Bara Masjid)", "Eskara, Howrah", "West Bengal - 711323"],
        phone: "+91 6374051113",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.629347515152!2d88.3129486149592!3d22.55577628519183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0279c2a8ffffff%3A0xb3a9992849a6396!2sJJ%20Bags%20Kolkata!5e0!3m2!1sen!2sin!4v1628583015494!5m2!1sen!2sin",
        mapTitle: "JJ Bags Kolkata Location"
    },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

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
          title: "Success!",
          description: "Thank you for your message. We've received it and will respond as soon as possible.",
        });
        (event.target as HTMLFormElement).reset();
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
    <div className="w-full bg-secondary/30">
        <AnimatedSection className="w-full bg-secondary/50">
            <div className="container mx-auto text-center py-12 px-4">
                <h1 className="text-4xl md:text-5xl font-headline">Get in Touch</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    We'd love to hear from you. Find our offices below or send us a message directly.
                </p>
            </div>
        </AnimatedSection>
        <AnimatedSection className="container mx-auto px-4 pb-12 md:pb-24">

            <div className="mb-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Send us a Message</CardTitle>
                            <CardDescription>For general inquiries or custom orders, fill out the form and we'll get back to you.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="hidden" name="formType" value="contact" />
                                {/* Honeypot field for spam protection */}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                                    <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" />
                                </div>
                                <div>
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" required />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" required />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Phone (Optional)</Label>
                                    <Input id="phone" name="phone" type="tel" />
                                </div>
                                <div>
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" name="message" rows={5} required />
                                </div>
                                <SubmitButton pending={pending} />
                            </form>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Contact Information</CardTitle>
                             <CardDescription>Reach out to us via email, phone, or visit our offices.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4">
                                <FiMail className="h-6 w-6 mt-1 text-primary shrink-0"/>
                                <div>
                                    <h4 className="font-semibold">General Inquiries</h4>
                                    <a href="mailto:contactus@jjbags.in" className="text-muted-foreground hover:text-primary">contactus@jjbags.in</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FiPhone className="h-6 w-6 mt-1 text-primary shrink-0"/>
                                <div>
                                    <h4 className="font-semibold">Phone Support</h4>
                                     <a href="tel:+918248109131" className="text-muted-foreground hover:text-primary block">+91 8248109131</a>
                                    <a href="tel:+916374051113" className="text-muted-foreground hover:text-primary block">+91 6374051113</a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-16">
            {contactDetails.map((detail, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto bg-card p-6 sm:p-8 rounded-lg shadow-lg">
                  <div className={`w-full rounded-lg overflow-hidden shadow-md aspect-square md:aspect-[4/3] h-full min-h-[400px] md:min-h-0 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                      <iframe
                          src={detail.mapUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={detail.mapTitle}
                      ></iframe>
                  </div>
                  <div className="flex flex-col justify-center">
                      <FiMapPin className="h-10 w-10 text-primary mb-4"/>
                      <h2 className="text-3xl font-headline">{detail.title}</h2>
                      <div className="mt-4 space-y-2 text-muted-foreground">
                        {detail.lines.map((line, i) => <p key={i}>{line}</p>)}
                      </div>
                      <div className="mt-4 font-semibold text-lg">
                        <a href={`tel:${detail.phone}`} className="flex items-center gap-2 hover:text-primary">
                          <FiPhone/> {detail.phone}
                        </a>
                      </div>
                  </div>
              </div>
            ))}
            </div>
        </AnimatedSection>
    </div>
  );
}
