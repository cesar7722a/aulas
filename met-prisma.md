**findMany()**
é um método do Prisma Client para buscar vários registros da tabela.
O retorno é sempre um array de objetos JSON.

# 2. Buscar com condições (where)

```javascript
const users = await prisma.user.findMany({
  where: { email: "teste@email.com" },
});
```

# 3. Escolher só alguns campos (select)

```javascript
const users = await prisma.user.findMany({
  select: { id: true, name: true },
});
```

# 4. Ordenar os resultados (orderBy)

```javascript
const users = await prisma.user.findMany({
  orderBy: { name: "asc" },
});
```

# 5. Limitar a quantidade (take)

```javascript
const users = await prisma.user.findMany({
  take: 5
});
Retorna só os 5 primeiros usuários.
```

**findUnique()**
é um método do Prisma Client para buscar um unico registros da tabela.
O retorno é sempre um objetos JSON.

```javascript
const user = await prisma.user.findUnique({
  where: { id: Number(id) },
});
```
