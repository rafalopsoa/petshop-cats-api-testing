import 'dotenv/config'; // Garante o carregamento do .env local, se existir
import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
    // Usa a variável de ambiente nativa do Node
    url: process.env.DATABASE_URL, 
  },
  datasource: {
    // Usa a mesma variável nativa para que o db push aceite a injeção do Testcontainers
    url: process.env.DATABASE_URL,
  },
});