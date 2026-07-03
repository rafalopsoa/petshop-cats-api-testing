import { CreateProductDto } from '../use-cases/create-product.dto';

export interface IProductRepository {
    save(product: CreateProductDto): Promise<{ id: string; sku: string }>;
}