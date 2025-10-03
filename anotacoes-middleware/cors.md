**CORS** significa Cross-Origin Resource Sharing (Compartilhamento de Recursos entre Origens Diferentes).
Serve para controlar quem pode acessar a tua API a partir do navegador.

# Problema sem CORS:

Imagina que a tua API está em http://localhost:3000, e um frontend (React, por exemplo) está em http://localhost:5173.
Por padrão, o navegador bloqueia requisições de domínios diferentes por questão de segurança.

É aí que entra o CORS: ele diz ao navegador “esse domínio pode consumir minha API”.

# Exemplo simples:

```javascript
import express from "express";
import cors from "cors";

const app = express();

// Permite qualquer origem acessar a API
app.use(cors());

app.get("/", (req, res) => {
  res.send("API com CORS liberado!");
});

app.listen(3000);
```

**Agora qualquer site pode consumir a API.**

# Configuração avançada

```javascript
// Apenas um domínio específico pode aceder
app.use(
  cors({
    origin: "http://meusite.com",
  })
);

// Vários domínios
app.use(
  cors({
    origin: ["http://meusite.com", "http://localhost:5173"],
  })
);

// Permitir headers/métodos específicos
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
```
