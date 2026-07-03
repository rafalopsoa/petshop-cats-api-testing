# 🐱 PetShop CatShop - V2: NestJS, TDD & Clean Architecture

<p align="center">
  <a href="#-português">Português</a> • 
  <a href="#-english">English</a>
</p>

---

## 🇧🇷 Português

Bem-vindo à **Versão 2** da suíte CatShop! O projeto evoluiu de um ambiente de testes baseado em Mocks (via Postman) para uma infraestrutura de backend completa, real e testável. 

Nesta branch, a aplicação foi reescrita do zero utilizando engenharia de software moderna, com foco estrito em **Test-Driven Development (TDD)**, **Clean Architecture** e testes de integração de ponta a ponta (E2E) com bancos de dados efêmeros provisionados via Docker.

### 🛠️ Tecnologias e Ferramentas (V2)

* **NestJS & TypeScript:** Framework principal modular para orquestração da API.
* **Prisma ORM (v7) & PostgreSQL:** Persistência de dados utilizando a nova arquitetura de *Driver Adapters* (`pg`) nativa do Node.js.
* **Docker & Testcontainers:** Gerenciamento programático de containers Docker para criar bancos de dados 100% isolados, determinísticos e descartáveis a cada execução de teste.
* **Jest & Supertest:** Motor de testes e simulação de requisições HTTP para a API.
* **Zod:** Validação rigorosa de esquemas e contratos na borda da aplicação (Pipes).

### 🏗️ Arquitetura e Engenharia Aplicada

Este projeto não utiliza a estrutura padrão acoplada. Ele segue os princípios da **Clean Architecture** (Arquitetura Limpa) e **SOLID** (Inversão de Dependência):
* **Camada Core (Domínio):** Contém os Casos de Uso (`UseCases`) e Interfaces de Repositório. Completamente agnóstica a frameworks ou banco de dados.
* **Camada de Infraestrutura:** Implementa os Controladores HTTP (NestJS), *Pipes* de Validação (Zod) e a implementação real do Repositório usando o Prisma.
* O fluxo é orquestrado de forma que o *Controller* não conhece o *Prisma*, delegando as ações exclusivamente ao *UseCase*.

### 🧪 Estratégia de Testes (TDD)

A abordagem de qualidade não utiliza bancos de dados em memória (como SQLite) devido aos falsos-positivos de paridade. Utilizamos **Testcontainers**:
1. O Jest inicia a suíte de testes.
2. O Testcontainers sobe uma imagem real do `postgres:16-alpine` no Docker.
3. As *migrations* são aplicadas no container.
4. A API é testada contra um banco real.
5. O container é destruído automaticamente.

### 📥 Como Executar o Projeto e os Testes

**Pré-requisitos:** Node.js (v18+) e **Docker Desktop** rodando na máquina.

```bash
# 1. Clone o repositório e acesse a branch v2
git clone [https://github.com/SEU_USUARIO/petshop-cats-api-testing.git](https://github.com/SEU_USUARIO/petshop-cats-api-testing.git)
cd petshop-cats-api-testing
git checkout v2-nestjs-tdd

# 2. Instale as dependências
npm install

# 3. Gere os artefatos do Prisma
npx prisma generate

# 4. Execute a suíte de testes E2E automatizada (O Docker fará a mágica!)
npm run test:e2e
```

*(Nota: Para acessar o planejamento antigo de testes no Postman e Zephyr Scale, troque para a branch `main`).*

---

## 🇺🇸 English

Welcome to **Version 2** of the CatShop suite! The project has evolved from a Mock-based testing environment (via Postman) to a complete, real, and fully testable backend infrastructure.

In this branch, the application was rewritten from scratch using modern software engineering, with a strict focus on **Test-Driven Development (TDD)**, **Clean Architecture**, and End-to-End (E2E) integration testing with ephemeral databases provisioned via Docker.

### 🛠️ Technologies and Tools (V2)

* **NestJS & TypeScript:** Modular core framework for API orchestration.
* **Prisma ORM (v7) & PostgreSQL:** Data persistence using the bleeding-edge *Driver Adapters* (`pg`) native to Node.js.
* **Docker & Testcontainers:** Programmatic management of Docker containers to create 100% isolated, deterministic, and disposable databases for each test run.
* **Jest & Supertest:** Test runner and HTTP request simulation for the API.
* **Zod:** Strict schema and contract validation at the application's edge (Pipes).

### 🏗️ Architecture and Engineering

This project breaks away from standard coupled structures. It strictly follows **Clean Architecture** and **SOLID** (Dependency Inversion) principles:
* **Core Layer (Domain):** Contains Use Cases and Repository Interfaces. Completely framework and database agnostic.
* **Infrastructure Layer:** Implements HTTP Controllers (NestJS), Validation Pipes (Zod), and the actual Repository implementation using Prisma.
* The flow is orchestrated so that the Controller has no knowledge of Prisma, delegating actions entirely to the Use Case.

### 🧪 Testing Strategy (TDD)

The QA approach actively avoids in-memory databases (like SQLite) to prevent parity false-positives. We use **Testcontainers**:
1. Jest triggers the test suite.
2. Testcontainers spins up a real `postgres:16-alpine` image on Docker.
3. Migrations are pushed to the container.
4. The API is tested against a real, fresh database.
5. The container is gracefully destroyed.

### 📥 How to Run the Project and Tests

**Prerequisites:** Node.js (v18+) and **Docker Desktop** running on your machine.

```bash
# 1. Clone the repository and switch to the v2 branch
git clone [https://github.com/YOUR_USER/petshop-cats-api-testing.git](https://github.com/YOUR_USER/petshop-cats-api-testing.git)
cd petshop-cats-api-testing
git checkout v2-nestjs-tdd

# 2. Install dependencies
npm install

# 3. Generate Prisma artifacts
npx prisma generate

# 4. Run the automated E2E test suite (Docker will do the magic!)
npm run test:e2e
```

*(Note: To access the legacy Postman and Zephyr Scale test planning, switch back to the `main` branch).*
