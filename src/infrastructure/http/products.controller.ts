import { Controller, Post, Body, UsePipes, HttpCode } from "@nestjs/common";
import { ZodValidationPipe } from "./pipes/zod-validation.pipe";
import { CreateProductSchema, CreateProductDto } from '../../core/inventory/use-cases/create-product.dto'
import { CreateProductUseCase } from '../../core/inventory/use-cases/create-product.use-case';

@Controller('products')
export class ProductsController {
    constructor(private readonly createProductUseCase: CreateProductUseCase) {}

    @Post()
    @HttpCode(201)
    @UsePipes(new ZodValidationPipe(CreateProductSchema))
    async create(@Body() createProductDto: CreateProductDto){
        const result = await this.createProductUseCase.execute(createProductDto);
        return result;
    }
}