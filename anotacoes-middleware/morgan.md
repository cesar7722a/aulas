Morgan é um middleware de logging (registo de requisições).
Ele serve para mostrar no console detalhes das requisições HTTP que chegam na tua API.

## Formatos disponíveis:

"dev" → mostra método, rota, status e tempo (ideal para desenvolvimento).

"tiny" → mostra bem resumido.

"combined" → formato estilo Apache (mais detalhado, bom para produção).

"common" → outro formato padrão de logs.

## exemplo pratico

```javascript
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
```

**Agora, sempre que fizeres uma requisição, ele mostra no console algo assim:**

```sql
GET / 200 5.123 ms - 11
```
