import { z } from 'zod';

export const CreateProductSchema = z.object({
    sku: z.string().min(1, 'SKU is mandatory'),
    price: z.number().positive('Price must be bigger than zero'),
    stock: z.number().min(0, 'Stock must not be negative'),
});

export type CreateProductDto = z.infer<typeof CreateProductSchema>;