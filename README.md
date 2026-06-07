# 🐱 PetShop CatShop - API Automated Testing Suite

<p align="center">
  <a href="#-português">Português</a> • 
  <a href="#-english">English</a>
</p>

---

## 🇧🇷 Português

Repositório dedicado à automação de testes de API ponta a ponta para os fluxos de **Busca (GET)** e **Cadastro (POST)** de mercadorias da plataforma fictícia CatShop. O projeto simula um ambiente real de produção utilizando um Mock Server estruturado, garantindo a validação de contratos, resiliência de dados e tratamento completo de exceções de negócio.

### 🛠️ Tecnologias e Ferramentas Utilizadas

* **Postman:** Criação do ambiente de Mock Server, requisições e execução em lote (Runner).
* **JavaScript (Postman Sandbox):** Desenvolvimento dos scripts de asserção, validação de esquemas (schemas) e loops dinâmicos (`forEach`).
* **Jira & Zephyr Scale:** Planejamento estratégico, mapeamento de cenários (`CATQA-R1`) e gestão de evidências corporativas.
* **Git & GitHub:** Versionamento semântico e portfólio técnico.

### 📊 Matriz de Cenários Automatizados

| ID (Zephyr) | Método | Cenário de Teste | Status HTTP | Tipo de Validação / Asserção |
| :--- | :---: | :--- | :---: | :--- |
| **CATQA-T1** | `GET` | Busca Combinada por Tipo e Marca com Sucesso | `200 OK` | Validação de Contrato e Integridade do Payload |
| **CATQA-T2** | `GET` | Resiliência no Tratamento de Caixa (Case-Insensitive) | `200 OK` | Ignorar maiúsculas/minúsculas nos filtros |
| **CATQA-T3** | `GET` | Estouro do Limite de Paginação Permitido | `422 Unprocessable` | Regra de negócio (Limite máximo > 100) |
| **CATQA-T4** | `GET` | Filtros de Busca Inexistentes | `200 OK` | Retorno íntegro de Array Vazio (`[]`) |
| **CATQA-T5** | `GET` | Opcionalidade de Parâmetros na URL | `200 OK` | Loop dinâmico varrendo o array por tipo |
| **CATQA-T6** | `POST` | Cadastro de Mercadoria com Preço Inválido | `400 Bad Request` | Bloqueio de valor monetário negativo |
| **CATQA-T7** | `POST` | Cadastro Sem Campo Obrigatório | `400 Bad Request` | Validação de esquema (Preço ausente via header) |
| **CATQA-T8** | `POST` | Cadastro com Nome Acima do Limite | `400 Bad Request` | Proteção contra estouro de campo (> 255 carac.) |

### 🚀 Resultados da Execução (Postman Runner)

A suíte regressiva foi executada com **100% de aproveitamento** (18 asserções bem-sucedidas em lote através do Collection Runner).

![Resultado do Runner](./CATQA-Geral.png)

### 📁 Estrutura do Repositório

* `docs/`: Planejamento técnico e evidências de testes individuais.
* `postman/`: Arquivo JSON da Collection pronto para importação.
* `mocks/`: Payloads JSON estruturados divididos em contratos de sucesso e tratamento de erros.

### 📥 Como Executar este Projeto

1. Faça o clone deste repositório.
2. Abra o seu Postman.
3. Clique em **Import** e selecione o arquivo localizado em `postman/`.
4. Configure um Mock Server apontando para as rotas mapeadas.
5. Utilize o cabeçalho `x-mock-response-name` para chavear os fluxos alternativos de erro do POST.
6. Execute a collection via **Run Collection** para ver a esteira rodar em lote.

---

## 🇺🇸 English

This repository is dedicated to the end-to-end automated testing suite for the **Search (GET)** and **Registration (POST)** merchandise endpoints of the mock platform CatShop. The project simulates a real production environment using a structured Mock Server, ensuring contract validation, data resilience, and comprehensive business exception handling.

### 🛠️ Technologies and Tools Used

* **Postman:** Mock Server environment setup, request building, and batch execution (Runner).
* **JavaScript (Postman Sandbox):** Assertion script development, JSON Schema validation, and dynamic iteration loops (`forEach`).
* **Jira & Zephyr Scale:** Strategic planning, test scenario mapping (`CATQA-R1`), and corporate evidence management.
* **Git & GitHub:** Semantic versioning and technical portfolio structure.

### 📊 Automated Scenario Matrix

| ID (Zephyr) | Method | Test Scenario | HTTP Status | Validation / Assertion Type |
| :--- | :---: | :--- | :---: | :--- |
| **CATQA-T1** | `GET` | Combined Search by Type and Brand with Success | `200 OK` | Contract Validation & Payload Integrity |
| **CATQA-T2** | `GET` | Text Case Treatment Resilience (Case-Insensitive) | `200 OK` | Ignore upper/lowercase filtering |
| **CATQA-T3** | `GET` | Pagination Limit Exceeded | `422 Unprocessable` | Business Rule Validation (Max limit > 100) |
| **CATQA-T4** | `GET` | Search Filters with No Results | `200 OK` | Clean integrity check returning Empty Array (`[]`) |
| **CATQA-T5** | `GET` | URL Parameter Optionality | `200 OK` | Dynamic loop scanning array contents by type |
| **CATQA-T6** | `POST` | Merchandise Registration with Invalid Price | `400 Bad Request` | Blocking negative monetary values |
| **CATQA-T7** | `POST` | Registration Missing Required Field | `400 Bad Request` | Schema Validation (Missing price via custom header) |
| **CATQA-T8** | `POST` | Registration with Name Length Beyond Limit | `400 Bad Request` | Protection against database overflow (> 255 chars) |

### 🚀 Execution Results (Postman Runner)

The regression suite was executed with a **100% success rate** (18 successful assertions executed in batch via the Collection Runner).

![Runner Results](./CATQA-Geral.png)

### 📁 Repository Structure

* `docs/`: Technical planning and individual test execution evidence screenshots.
* `postman/`: Collection JSON files ready for quick environment importing.
* `mocks/`: Structured JSON payloads isolated into success contracts and error handling states.

### 📥 How to Run this Project

1. Clone this repository to your local environment.
2. Open your Postman application.
3. Click on **Import** and select the file from the `postman/` directory.
4. Set up a Mock Server pointing to the mapped routes.
5. Use the `x-mock-response-name` header to toggle and isolate the alternative POST error flows.
6. Right-click the collection and select **Run Collection** to witness the automated batch pipeline.
