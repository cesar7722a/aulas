npx prisma migrate dev --name <descrição>
npx prisma migrate reset # atenção: apaga dados
npx prisma generate
npx prisma studio

```javascript
{
"scripts": {
"dev": "node index.js",
"dev:watch": "nodemon index.js",
"prisma:generate": "prisma generate",
"prisma:migrate": "prisma migrate dev --name init",
"prisma:studio": "prisma studio",
"prisma:reset": "prisma migrate reset"
}
}
```

mkdir project-middleware && cd project-middleware
npm init -y
npm install express morgan cors
