Claro! Aqui está o apontamento em formato **Markdown (md)** para ficares com um guia organizado sobre relacionamentos no **Prisma**:

````md
# Apontamentos sobre Relacionamentos no Prisma

## 1. Conceito Geral

Em bases de dados relacionais, os relacionamentos ligam informações entre tabelas.  
No **Prisma**, os relacionamentos são declarados diretamente no **schema.prisma**, permitindo que o ORM crie as conexões necessárias entre os modelos.

Existem três tipos principais:

- **1:1 (Um para Um)**
- **1:N (Um para Muitos)**
- **N:M (Muitos para Muitos)**

---

## 2. Passos Gerais para Criar Relacionamentos

Sempre que fores modelar relacionamentos no Prisma, pensa nestas etapas:

1. **Identificar a relação** → Perguntar se é 1:1, 1:N ou N:M.
2. **Localizar a tabela dependente** → É a tabela que precisa de guardar a chave estrangeira (FK).
   - Exemplo: Em `User` e `Post`, o **Post** é dependente porque precisa de saber a quem pertence.
3. **Criar o campo FK na tabela dependente**.
   - Este campo vai guardar o `id` da tabela principal.
4. **Definir os atributos `@relation` e `@id` quando necessário**.
   - É através deles que o Prisma entende como as tabelas se conectam.
5. **Criar o campo que representa a ligação na tabela principal**.
   - Esse campo é normalmente uma lista (`[]`) ou um objeto único.

---

## 3. Relacionamento 1:N (Um para Muitos)

### 3.1. Estrutura

- **Um registro de uma tabela** pode estar ligado a **vários registros de outra tabela**.
- Exemplo clássico:
  - Um **User** pode ter vários **Posts**.
  - Mas cada **Post** pertence a apenas um **User**.

### 3.2. Passos Detalhados

1. **Localizar a tabela dependente**
   - É a tabela que vai guardar a chave estrangeira.
   - Neste caso: `Post` é dependente do `User`.
2. **Criar o campo FK no lado dependente**
   ```prisma
   userId   Int
   user     User   @relation(fields: [userId], references: [id])
   ```
````

- `userId` é a chave estrangeira.
- `fields: [userId]` indica qual campo guarda a FK.
- `references: [id]` mostra qual campo da tabela `User` é referenciado.

3. **Criar o campo do lado principal**

   ```prisma
   posts    Post[]
   ```

   - O Prisma entende que um `User` pode ter vários `Posts`.

### 3.3. Exemplo Completo

```prisma
model User {
  id      Int     @id @default(autoincrement())
  name    String
  posts   Post[]   // Um User pode ter muitos Posts
}

model Post {
  id      Int     @id @default(autoincrement())
  title   String
  userId  Int
  user    User    @relation(fields: [userId], references: [id])
}
```

---

## 4. Relacionamento 1:1 (Um para Um)

### 4.1. Estrutura

- **Um registro de uma tabela** está ligado a **um único registro de outra tabela**.
- Exemplo:

  - Um **User** tem apenas um **Profile**.
  - E um **Profile** pertence a apenas um **User**.

### 4.2. Exemplo Completo

```prisma
model User {
  id      Int     @id @default(autoincrement())
  name    String
  profile Profile?
}

model Profile {
  id      Int     @id @default(autoincrement())
  bio     String
  userId  Int     @unique
  user    User    @relation(fields: [userId], references: [id])
}
```

- O `@unique` em `userId` garante que cada perfil pertence a apenas um usuário.

---

## 5. Relacionamento N\:M (Muitos para Muitos)

### 5.1. Estrutura

- **Vários registros de uma tabela** podem estar relacionados a **vários registros de outra tabela**.
- Exemplo:

  - Um **Aluno** pode estar em várias **Turmas**.
  - E cada **Turma** pode ter vários **Alunos**.

### 5.2. Exemplo Completo

```prisma
model Aluno {
  id     Int      @id @default(autoincrement())
  nome   String
  turmas Turma[]  // Muitos para muitos
}

model Turma {
  id     Int      @id @default(autoincrement())
  nome   String
  alunos Aluno[]  // Muitos para muitos
}
```

- O Prisma cria automaticamente uma **tabela intermediária** para gerir a relação.

---

## 6. Resumo Visual

- **1:1** → Cada registro se liga a apenas **um** registro.
- **1\:N** → Um registro se liga a **vários** registros, mas cada dependente só liga a **um** principal.
- **N\:M** → Vários registros se ligam a vários registros.

# iniciar (uma vez)

npx prisma init

# definir schema.prisma e .env

# criar e aplicar migration (dev)

npx prisma migrate dev --name init

# gerar client

npx prisma generate

# abrir studio

npx prisma studio
