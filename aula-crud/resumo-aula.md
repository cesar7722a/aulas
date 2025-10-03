# Resumo CRUD com Prisma + Express

POST /users → Criar utilizador

Usa prisma.user.create() para inserir no banco.

GET /users → Listar todos

Usa prisma.user.findMany() para buscar todos os registos.

GET /users/:id → Buscar por ID

Usa prisma.user.findUnique() para procurar um registo específico.

PUT /users/:id → Atualizar

Usa prisma.user.update() para atualizar os dados de um utilizador.

DELETE /users/:id → Apagar

Usa prisma.user.delete() para remover um utilizador.
