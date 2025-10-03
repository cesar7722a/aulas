# 1. Instalar dependências

npm install @prisma/client
npm install -D prisma

# 2. Inicializar o Prisma

npx prisma init

# 2.1 configurar o env

# 3. Definir o modelo no schema.prisma

generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "mysql"
url = env("DATABASE_URL")
}

model User {
id Int @id @default(autoincrement())
name String
email String @unique
}

# 4. Criar e aplicar a migração

npx prisma migrate dev --name init

# 5 Gerar o Prisma Client

npx prisma generate
