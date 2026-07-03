import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { PostgreSqlContainer, StartedPostgreSqlContainer } from '@testcontainers/postgresql';
import { execSync } from 'child_process';
import { AppModule} from '../../src/app.module';
import { PrismaService } from '../../src/infrastructure/database/prisma.service';

describe ('Create Product (E2E) - TDD Cycle', () => {
    let app: INestApplication;
    let postgresContainer: StartedPostgreSqlContainer;
    let prismaService: any;

    beforeAll (async () => {
        postgresContainer = await new PostgreSqlContainer('postgres:16-alpine').start();
        const connectionString= postgresContainer.getConnectionUri();

        process.env.DATABASE_URL = connectionString;

        execSync('npx prisma db push', {
            env: {...process.env, DATABASE_URL: connectionString},
        });

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        prismaService = app.get<PrismaService>(PrismaService);
        }, 40000);

    afterAll(async () => {
        if (app) {
            await app.close();
        }
        if (postgresContainer) {
            await postgresContainer.stop();
        }
        
    });

    beforeEach(async () => {
        await prismaService.product.deleteMany();

    });

    describe('POST /products', () => {
        it('Should return 400 Bad Request when payload violates Zod Contract', async () => {
            const invalidPayload = {
                sku: '', //Empty SKU should fail
                price: -15.00, //Negative price should fail
                stock: -2, //Negative stock should fail
            };

            const response = await request(app.getHttpServer())
                .post('/products')
                .send(invalidPayload);

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('errors');
        });
        it('Should return 201 Created and persists the product when Contract is valid', async () => {
            const validPayload = {
                sku: 'CAT-ARRANHADOR-01', 
                price: 189.90, 
                stock: 15, 
            };

            const response = await request(app.getHttpServer())
                .post('/products')
                .send(validPayload);

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.sku).toBe(validPayload.sku);
            // verify persisted in database
            const produtoNoBanco = await prismaService.product.findUnique({
                where: { id: response.body.id },
            });

            expect(produtoNoBanco).toBeTruthy();
            expect(Number(produtoNoBanco?.price)).toBe(validPayload.price);
            expect(produtoNoBanco?.stock).toBe(validPayload.stock);
        });
    });
});
