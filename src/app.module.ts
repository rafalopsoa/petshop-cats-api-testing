import { Module } from '@nestjs/common';
import { PrismaService } from './infrastructure/database/prisma.service';
import { PrismaProductRepository } from './infrastructure/database/repositories/prisma-product.repository';
import { ProductsController } from './infrastructure/http/products.controller';
import { CreateProductUseCase } from './core/inventory/use-cases/create-product.use-case';
// Importaremos os Controllers e UseCases aqui futuramente

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    PrismaService,
    CreateProductUseCase,
    {
      provide: 'IProductRepository',
      useClass: PrismaProductRepository,
    },    
    ],
})
export class AppModule {}