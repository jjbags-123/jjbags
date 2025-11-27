
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from '@/components/animated-section';

export const faqs = [
    {
        question: "What products do you manufacture?",
        answer: "We manufacture and trade eco-friendly Jute, Juco, Cotton, Canvas, Wedding Return Bags, Corporate Event Bags, and Custom-Printed Bags."
    },
    {
        question: "Do you offer customization?",
        answer: "Yes. We provide custom printing, logo branding, color selection, size changes, and full design support based on your requirement."
    },
    {
        question: "What is the minimum order quantity (MOQ)?",
        answer: "MOQ depends on the bag model:\n\t•\tPlain bags: 50–100 pcs\n\t•\tCustomized bags: 100–300 pcs\nBulk corporate orders have flexible MOQ."
    },
    {
        question: "How can I place an order?",
        answer: "You can place an order through:\n\t•\tWebsite: www.jjbags.in\n\t•\tWhatsApp: ‪+91 6374051113‬\n\t•\tEmail: contactus@jjbags.in"
    },
    {
        question: "How long does production take?",
        answer: "7–20 working days, depending on design, printing, and quantity.\nUrgent requirements can be arranged if informed earlier."
    },
    {
        question: "Do you ship across India and internationally?",
        answer: "Yes, we ship PAN India and to countries like Singapore, UAE, Saudi Arabia, Qatar, and more."
    },
    {
        question: "How much does shipping cost?",
        answer: "Shipping charges depend on:\n\t•\tOrder quantity\n\t•\tDestination location\n\t•\tShipping mode (courier / cargo / air / sea)\nWe provide the best possible rates."
    },
    {
        question: "Can I get a sample before bulk order?",
        answer: "Yes.\n\t•\tReady sample: Available.\n\t•\tCustom sample: Charges applicable (adjustable in bulk order in some cases)."
    },
    {
        question: "What materials do you use?",
        answer: "We use premium Jute, Juco, Cotton, Canvas, and all materials are eco-friendly, reusable, and biodegradable."
    },
    {
        question: "Do you offer logo printing for corporate events?",
        answer: "Yes. We specialize in corporate branding, exhibition bags, promotional bags, and event giveaways."
    },
    {
        question: "How do I share my logo or design?",
        answer: "You can send your logo via WhatsApp or Email in PNG, JPG, PDF, or AI format."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept:\n\t•\tBank Transfer\n\t•\tUPI\n\t•\tAdvance Payment (required for custom orders)"
    },
    {
        question: "Are your bags washable and durable?",
        answer: "Yes. Our bags are strong, reusable, and designed for long-term use."
    },
    {
        question: "Do you provide bulk discounts?",
        answer: "Yes. Higher quantity = Better price.\nWe offer special rates for wedding & corporate orders."
    },
    {
        question: "How can I contact customer support?",
        answer: (
            <>
              Phone: <a href="tel:+918248109131" className="underline hover:text-primary">+91 8248109131</a><br/>
              WhatsApp: <a href="https://wa.me/916374051113" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">+91 6374051113</a><br/>
              Email: <a href="mailto:contactus@jjbags.in" className="underline hover:text-primary">contactus@jjbags.in</a>
            </>
        )
    },
];

export default function FaqPage() {
  return (
    <AnimatedSection className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline">Frequently Asked Questions</h1>
            <p className="mt-2 text-lg text-muted-foreground">
                Have questions? We've got answers.
            </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </AnimatedSection>
  )
}
