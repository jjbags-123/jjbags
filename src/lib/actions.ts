"use server";

import { z } from "zod";
import { productRecommendation } from "@/ai/flows/product-recommendation";
import { products } from "@/lib/data/products";

// Corporate Order Form Schema
const corporateOrderSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  quantity: z.coerce.number().min(10, "Minimum quantity is 10"),
  bagType: z.string().min(1, "Please select a bag type"),
  requirements: z.string().min(10, "Please describe your requirements").max(1000),
});

export async function submitCorporateOrder(prevState: any, formData: FormData) {
  try {
    const parsed = corporateOrderSchema.safeParse({
      companyName: formData.get("companyName"),
      contactPerson: formData.get("contactPerson"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      quantity: formData.get("quantity"),
      bagType: formData.get("bagType"),
      requirements: formData.get("requirements"),
    });

    if (!parsed.success) {
      return {
        message: "Invalid form data.",
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    // In a real app, you would process this data:
    // - Save to a database
    // - Send an email notification
    console.log("New Corporate Order Received:", parsed.data);

    return {
      message: "Thank you! Your corporate inquiry has been submitted successfully. We will get back to you shortly.",
      errors: {},
    };
  } catch (e) {
    return {
      message: "An unexpected error occurred. Please try again.",
      errors: {},
    };
  }
}

// Contact Form Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    try {
        const parsed = contactFormSchema.safeParse({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        });

        if (!parsed.success) {
            return {
                message: "Invalid form data.",
                errors: parsed.error.flatten().fieldErrors,
            };
        }

        // In a real app, you'd route this based on inquiryType
        console.log(`New Contact Form Submission:`, parsed.data);

        return {
            message: "Thank you for your message. We've received it and will respond as soon as possible.",
            errors: {},
        };
    } catch (e) {
        return {
            message: "An unexpected error occurred. Please try again.",
            errors: {},
        };
    }
}


export async function getRecommendations(currentContent: string) {
  try {
    const productCatalog = JSON.stringify(products.map(p => ({id: p.id, name: p.name, description: p.description, category: p.category})));
    
    const response = await productRecommendation({
      currentContent,
      productCatalog,
    });
    
    const recommendedProductIds = JSON.parse(response.recommendedProducts) as string[];

    const recommendedProducts = products.filter(p => recommendedProductIds.includes(p.id));
    
    return recommendedProducts;
  } catch (error) {
    console.error("Error getting AI recommendations:", error);
    return [];
  }
}
