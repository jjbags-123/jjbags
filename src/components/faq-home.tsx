
'use client';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { faqs } from '@/app/(main)/faq/page';
import { FiArrowRight } from 'react-icons/fi';

const topFaqs = faqs.slice(0, 3);

export function FaqHome() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline">Have Questions?</h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Find quick answers to our most common questions below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {topFaqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground whitespace-pre-line">
                {typeof faq.answer === 'string' ? faq.answer : ''}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <Link href="/faq">
            More FAQs <FiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
