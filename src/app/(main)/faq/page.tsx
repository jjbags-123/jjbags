
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
        question: "What are the best eco-friendly bags you offer?",
        answer: "Our most popular eco-friendly bags are made from jute and juco. Jute is a highly sustainable, biodegradable plant fiber known for its strength. Juco is a blend of jute and cotton, offering a smoother finish, making it ideal for custom printing."
    },
    {
        question: "Why are jute bags a sustainable choice?",
        answer: "Jute bags are an excellent sustainable choice because jute is a natural, rain-fed crop that requires minimal pesticides or fertilizers. The plant absorbs large amounts of CO2, and the resulting fiber is strong, durable, and completely biodegradable, making them perfect plastic-free shopping bags."
    },
    {
        question: "How do I care for my jute or canvas bag?",
        answer: "To clean your jute or canvas bag, we recommend spot cleaning with a damp cloth and mild soap. Avoid machine washing, as it can damage the natural fibers and any lamination. Air dry the bag completely before storing it."
    },
    {
        question: "What products do you manufacture?",
        answer: "We manufacture and trade eco-friendly Jute, Juco, Cotton, Canvas, Wedding Return Bags, Corporate Event Bags, and Custom-Printed Bags."
    },
    {
        question: "Do you offer customization for jute and canvas bags?",
        answer: "Yes. We specialize in custom jute bags and customized canvas bags. We provide custom printing, logo branding, color selection, size changes, and full design support based on your requirement."
    },
    {
        question: "What is the minimum order quantity (MOQ)?",
        answer: "MOQ depends on the bag model:\n\t•\tPlain bags: 50–100 pcs\n\t•\tCustomized bags: 100–300 pcs\nBulk corporate orders have flexible MOQ."
    },
    {
        question: "How can I place an order for reusable bags in India?",
        answer: "You can place an order through:\n\t•\tWebsite: www.jjbags.in\n\t•\tWhatsApp: ‪+91 6374051113‬\n\t•\tEmail: contactus@jjbags.in. We ship across India."
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
        question: "Can I get a sample before a bulk order?",
        answer: "Yes.\n\t•\tReady sample: Available.\n\t•\tCustom sample: Charges applicable (adjustable in bulk order in some cases)."
    },
    {
        question: "What materials do you use for your biodegradable bags?",
        answer: "We use premium Jute, Juco, Cotton, and Canvas. All materials are eco-friendly, reusable, and biodegradable."
    },
    {
        question: "Do you offer logo printing for corporate gift bags?",
        answer: "Yes. We specialize in corporate gift bags, exhibition bags, promotional bags, and event giveaways with custom branding."
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
        question: "Are your sustainable bags washable and durable?",
        answer: "Yes. Our bags are strong, reusable, and designed for long-term use. We recommend spot cleaning to maintain their quality."
    },
    {
        question: "Are your jute bags fair trade?",
        answer: "Yes, we are committed to fair trade practices in India. Our partnerships ensure that artisans receive fair wages and work in safe conditions, empowering local communities."
    },
    {
        question: "Do you provide bulk discounts for corporate orders?",
        answer: "Yes. Higher quantity = Better price.\nWe offer special rates for wedding & corporate orders."
    },
    {
        question: "How can I contact customer support?",
        answer: (
            <>
              Phone: <a href="tel:+918248109131" className="underline hover:text-primary">+91 82481 09131</a><br/>
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
                Your questions about our eco-friendly jute bags and sustainable practices, answered.
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
