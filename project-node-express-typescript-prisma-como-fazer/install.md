# Guia Completo: Criar Projeto Node.js com TypeScript, Express e Prisma

## 1. Criar a Pasta do Projeto

```bash
mkdir api-bank
cd api-bank
```

## 2. Inicializar o Projeto Node.js

```bash
npm init -y
```

## 3. Instalar TypeScript e Dependências de Desenvolvimento

```bash
npm install -D typescript @types/node tsx nodemon
```

- **typescript**: Compilador TypeScript
- **@types/node**: Tipos do Node.js
- **tsx**: Executar TypeScript diretamente (alternativa ao ts-node)
- **nodemon**: Reiniciar automaticamente o servidor

## 4. Criar o Ficheiro de Configuração TypeScript

```bash
npx tsc --init
```

### Editar o `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "moduleDetection": "force"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## 5. Instalar Express e seus Tipos

```bash
npm install express
npm install -D @types/express
```

## 6. Criar a Estrutura de Pastas

```bash
mkdir src
mkdir src/controllers
mkdir src/routes
mkdir src/models
mkdir src/middlewares
mkdir src/services
mkdir src/config
mkdir src/utils
```

## 7. Criar o Ficheiro Principal `src/index.ts`

```typescript
import express from "express";

const app = express();
const port = 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "API Bank is running",
    version: "1.0.0",
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
```

## 8. Configurar Scripts no `package.json`

Adiciona o campo `"type": "module"` e atualiza os scripts:

```json
{
  "name": "api-bank",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

## 9. Testar o Servidor

```bash
npm run dev
```

Acede a `http://localhost:4000` no navegador ou Postman.

---

## 10. Instalar e Configurar Prisma

### Instalar Prisma

```bash
npm install prisma --save-dev
npm install @prisma/client
```

### Inicializar Prisma

```bash
npx prisma init
```

Isto cria:

- Pasta `prisma/` com `schema.prisma`
- Ficheiro `.env`

## 11. Configurar Variáveis de Ambiente

### Instalar dotenv

```bash
npm install dotenv
```

### Editar o `.env`:

**Para PostgreSQL:**

```env
PORT=4000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/api_bank?schema=public"
```

**Para MySQL:**

```env
DATABASE_URL="mysql://user:password@localhost:3306/api_bank"
```

**Para SQLite (desenvolvimento):**

```env
DATABASE_URL="file:./dev.db"
```

## 12. Configurar o Schema do Prisma

Edita `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // ou "mysql" ou "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id        String    @id @default(uuid())
  email     String    @unique
  name      String
  password  String
  accounts  Account[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@map("users")
}

model Account {
  id            String        @id @default(uuid())
  accountNumber String        @unique
  balance       Decimal       @default(0) @db.Decimal(15, 2)
  userId        String
  user          User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  transactions  Transaction[]
  createdAt     DateTime      @default(now())
  updatedAt     DateTime      @updatedAt

  @@map("accounts")
}

model Transaction {
  id          String   @id @default(uuid())
  amount      Decimal  @db.Decimal(15, 2)
  type        String   // "deposit", "withdrawal", "transfer"
  description String?
  accountId   String
  account     Account  @relation(fields: [accountId], references: [id], onDelete: Cascade)
  createdAt   DateTime @default(now())

  @@map("transactions")
}
```

## 13. Criar a Migração Inicial

```bash
npx prisma migrate dev --name init
```

Este comando:

- Cria a base de dados
- Aplica a migração
- Gera o Prisma Client

## 14. Criar o Cliente Prisma

Cria `src/config/database.ts`:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export default prisma;
```

## 15. Atualizar o `src/index.ts` para usar Prisma

```typescript
import express from "express";
import dotenv from "dotenv";
import prisma from "./config/database.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "API Bank is running",
    version: "1.0.0",
  });
});

// Rota de teste com Prisma
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

// Graceful shutdown
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
```

## 16. Adicionar Scripts Úteis ao `package.json`

```json
{
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "prisma:studio": "prisma studio",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:seed": "tsx prisma/seed.ts"
  }
}
```

## 17. Criar um Ficheiro `.gitignore`

```
node_modules/
dist/
.env
*.log
.DS_Store
```

## 18. Estrutura Final do Projeto

```
api-bank/
├── node_modules/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── config/
│   │   └── database.ts
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── services/
│   ├── utils/
│   └── index.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 19. Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build
npm start

# Prisma
npm run prisma:studio      # Interface visual da BD
npm run prisma:generate    # Gerar cliente Prisma
npm run prisma:migrate     # Criar nova migração
```

## 20. Próximos Passos Recomendados

1. **Segurança**: Instalar `helmet` e `cors`
2. **Validação**: Instalar `zod` ou `joi`
3. **Autenticação**: Instalar `bcrypt` e `jsonwebtoken`
4. **Logging**: Instalar `winston` ou `pino`
5. **Testes**: Instalar `jest` ou `vitest`

---

## Resumo dos Comandos na Ordem

```bash
# 1. Criar projeto
mkdir api-bank && cd api-bank
npm init -y

# 2. Instalar dependências
npm install express dotenv
npm install -D typescript @types/node @types/express tsx nodemon

# 3. Configurar TypeScript
npx tsc --init

# 4. Criar estrutura
mkdir -p src/{config,controllers,routes,models,middlewares,services,utils}

# 5. Instalar Prisma
npm install prisma --save-dev
npm install @prisma/client
npx prisma init

# 6. Configurar .env e schema.prisma

# 7. Criar migração
npx prisma migrate dev --name init

# 8. Iniciar desenvolvimento
npm run dev
```

Boa sorte com o teu projeto!
