# npm init -y

# criar o arquivo index.js na pasta raiz.

Instale o Express

# npm install express

Instale o Prisma

# npm install prisma @prisma/client

# npm install -D nodemon # Opcional: para reiniciar o servidor automaticamente durante o desenvolvimento

Inicialize o Prisma

# npx prisma init

Isso cria:
Uma pasta prisma/ com o arquivo schema.prisma (onde você define seus modelos de dados).
Um arquivo .env na raiz do projeto (para variáveis de ambiente, como a URL do banco).

criar o arquivo .env na raiz do projeto e defina a URL do banco.

# DATABASE_URL="mysql://user:password@localhost:porta_do_server/nome_da_dase_de_dados?charset=utf8mb4"

Definir um Modelo no Schema do Prisma

```javascript
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "a base de dados que sera usada"// ex:mysql
  url      = env("DATABASE_URL")
}
```

Gerar o Cliente Prisma e Migre o Banco

# npx prisma generate

# npx prisma migrate dev --name init

Crie o Servidor Express Básico

```javascript
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // Para parsear JSON no body das requisições

// Rota GET para listar usuários
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Rota POST para criar um usuário
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json(user);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

Adicione Scripts no **package.json**

```javascript
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "prisma:studio": "npx prisma studio"  // Opcional: abre uma UI para ver o banco
  }
}
```

# para usar cors

**CORS** é uma forma do servidor dizer ao navegador: "Está bem, este site pode aceder aos meus recursos.

# npm install cors

usar o cors no projecto

```javascript
import express from "express";
import cors from "cors";

const app = express();

// Configuração básica - permite todos os domínios
app.use(cors());

// Exemplo mais seguro - permite apenas um domínio específico
// app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api", (req, res) => {
  res.json({ message: "CORS está a funcionar 🚀" });
});

app.listen(5000, () => {
  console.log("Servidor a correr na porta 5000");
});
```
