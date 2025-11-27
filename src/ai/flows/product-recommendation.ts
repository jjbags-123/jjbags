'use server';

/**
 * @fileOverview AI-powered product recommendation flow.
 *
 * This file defines a Genkit flow that suggests relevant products to the user
 * based on the content they are currently viewing (bag category or blog content).
 *
 * - productRecommendation - A function that handles the product recommendation process.
 * - ProductRecommendationInput - The input type for the productRecommendation function.
 * - ProductRecommendationOutput - The return type for the productRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationInputSchema = z.object({
  currentContent: z
    .string()
    .describe(
      'The content the user is currently viewing (e.g., bag category or blog content).'
    ),
  productCatalog: z.string().describe('A JSON string of available products.'),
});
export type ProductRecommendationInput = z.infer<typeof ProductRecommendationInputSchema>;

const ProductRecommendationOutputSchema = z.object({
  recommendedProducts: z
    .string()
    .describe('A JSON string array of recommended products based on the current content.'),
});
export type ProductRecommendationOutput = z.infer<typeof ProductRecommendationOutputSchema>;

export async function productRecommendation(input: ProductRecommendationInput): Promise<ProductRecommendationOutput> {
  return productRecommendationFlow(input);
}

const productRecommendationPrompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationInputSchema},
  output: {schema: ProductRecommendationOutputSchema},
  prompt: `You are a product recommendation expert for JJ Bages, an online store selling jute, juco, and tote bags.

  Based on the content the user is currently viewing, recommend relevant products from the product catalog.
  Return the recommended products as a JSON string array.

  Current Content:
  {{currentContent}}

  Product Catalog:
  {{productCatalog}}

  Recommended Products (JSON string array):`,
});

const productRecommendationFlow = ai.defineFlow(
  {
    name: 'productRecommendationFlow',
    inputSchema: ProductRecommendationInputSchema,
    outputSchema: ProductRecommendationOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationPrompt(input);
    return output!;
  }
);
