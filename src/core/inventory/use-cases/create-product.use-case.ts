import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { IProductRepository } from '../repositories/product.repository';

@Injectable()
export class CreateProductUseCase {
    constructor(
        @Inject('IProductRepository') private readonly productRepository: IProductRepository,   
    ) {}

    async execute(data: CreateProductDto){
        const product = await this.productRepository.save(data);
        return product;
    }
}