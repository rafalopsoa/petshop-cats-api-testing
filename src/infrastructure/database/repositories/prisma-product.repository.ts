import { Injectable } from "@nestjs/common";
import { IProductRepository } from 'src/core/inventory/repositories/product.repository';
import { CreateProductDto } from '../../../core/inventory/use-cases/create-product.dto';
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaProductRepository implements IProductRepository {
    constructor(private readonly prisma: PrismaService){}

    async save(product: CreateProductDto): Promise<{ id: string; sku: string }> {
        const createdProduct = await this.prisma.product.create({
            data:product,
        });
        return { id: createdProduct.id, sku: createdProduct.sku};
    }
}