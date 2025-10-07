Perfeito 👌
Vamos fazer **um passo a passo completo** e limpo para começar um **projeto Node.js + TypeScript**, totalmente configurado e pronto para rodar.

> 🎯 Objetivo: criar uma base sólida para futuros projetos com Express, Prisma, JWT, etc.

---

## 🚀 **1️⃣ Cria a pasta do projeto**

Abre o terminal e executa:

```bash
mkdir meu-projeto-ts
cd meu-projeto-ts
```

---

## 🚀 **2️⃣ Inicializa o projeto**

Isto cria o ficheiro `package.json`:

```bash
npm init -y
```

---

## 🚀 **3️⃣ Instala as dependências principais**

Aqui instalas o **TypeScript**, tipos, e utilitários básicos para desenvolvimento.

```bash
npm install typescript tsx @types/node --save-dev
```

---

## 🚀 **4️⃣ Inicializa o TypeScript**

Cria automaticamente o ficheiro `tsconfig.json`:

```bash
npx tsc --init
```

Agora abre o ficheiro `tsconfig.json` e ajusta as configurações principais assim 👇

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
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

> ✅ Isto garante compatibilidade com módulos ES, Express e Prisma.

---

## 🚀 **5️⃣ Cria a estrutura de pastas**

Cria a pasta onde o código ficará:

```bash
mkdir src
```

E dentro dela, o ficheiro principal:

```bash
echo "console.log('Servidor TypeScript pronto!');" > src/index.ts
```

---

## 🚀 **6️⃣ Ajusta os scripts no `package.json`**

Abre o `package.json` e adiciona isto 👇

```json
"scripts": {
  "dev": "tsx watch src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

- `dev` → roda com **auto reload**
- `build` → compila o código
- `start` → roda o código compilado

---

## 🚀 **7️⃣ (Opcional) Adiciona Express**

Se quiseres criar API:

```bash
npm install express
npm install --save-dev @types/express
```

E substitui o conteúdo de `src/index.ts` por:

```ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Servidor com TypeScript está a funcionar!");
});

app.listen(port, () => {
  console.log(`🚀 Servidor iniciado em http://localhost:${port}`);
});
```

---

## 🚀 **8️⃣ Executa o servidor**

Agora basta rodar:

```bash
npm run dev
```

Saída esperada:

```
🚀 Servidor iniciado em http://localhost:3000
```

---

## 🚀 **9️⃣ (Opcional) Adiciona Prisma depois**

Se quiseres base de dados:

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

---

Queres que eu te monte um **template completo de base** (com Express, Prisma e estrutura organizada por módulos, controladores e middlewares)?
Assim podes clonar e usar como base para todos os teus próximos projetos.
