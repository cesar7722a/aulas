**npm init -y** inicializa o projeto Node.js (gera package.json)
**npm install prisma @prisma/client** instala o Prisma e o cliente do Prisma
**npx prisma init** cria configuração inicial (pasta prisma + ficheiro .env)

# instalar Express (servidor web para criar APIs)

npm install express

# editar .env e configurar conexão MySQL

**DATABASE_URL="mysql://root:root@localhost:3306/aula_prisma"**
DATABASE_URL="nome_da_base_de_dados://nome_do_user:password@local_onde_roda_base_de_daos:port/nome_da_base_de_dad0s"

# schema.prisma

generator client {
provider = "prisma-client-js" // gera o cliente para usar no Node.js
}

datasource db {
provider = "mysql" // tipo da base de dados
url = env("DATABASE_URL") // usa a variável definida no .env
}

model User {
id Int @id @default(autoincrement()) // chave primária auto incremento
name String // campo texto obrigatório
email String @unique // campo texto único
createdAt DateTime @default(now()) // data de criação automática
}

# primeira migration

**npx prisma migrate dev -nome_migration init** # cria a primeira migration e aplica no MySQL
**npx prisma studio** # abre interface gráfica para visualizar os dados
