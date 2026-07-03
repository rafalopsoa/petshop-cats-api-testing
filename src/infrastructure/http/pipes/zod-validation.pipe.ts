import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod'; // 1. Adicionamos a importação do ZodError

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      // 2. Verificamos se o erro é garantidamente do Zod antes de extrair as falhas
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors: error.issues,
        });
      }
      
      // Fallback de segurança para outros erros inesperados
      throw new BadRequestException('Unexpected validation error');
    }
  }
}