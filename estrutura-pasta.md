project/
│── prisma/
│ └── schema.prisma
│── src/
│ ├── routes/
│ │ ├── users.routes.js
│ │ ├── products.routes.js
│ │ └── index.js
│ ├── controllers/
│ │ ├── users.controller.js
│ │ └── products.controller.js
│ ├── services/
│ │ ├── users.service.js
│ │ └── products.service.js
│ ├── lib/
│ │ └── prisma.js
│ ├── app.js
│── package.json

# Regras gerais

# Routes → só definem o caminho (/users, /products, etc.).

# Controllers → recebem req e res e chamam os services.

# Services (ou models) → têm a lógica de negócio e interação com BD.

# Database config → costuma ficar numa pasta config/ ou database/, onde defines a conexão (ex: mongoose.connect(...)).

# Assim consegues trocar a BD sem mexer nas rotas nem controllers. Se hoje usas MongoDB e amanhã MySQL, só precisas mudar os services.

configurações
**src/services/users.service.js**

```javascript
// Aqui ficaria a lógica real com a BD
// Exemplo fictício (sem BD ainda)

let users = [
  { id: 1, name: "João" },
  { id: 2, name: "Maria" },
];

export const findAllUsers = async () => {
  return users;
};

export const createUserDb = async (userData) => {
  const newUser = { id: users.length + 1, ...userData };
  users.push(newUser);
  return newUser;
};
```

**src/controllers/users.controller.js**

```javascript
import { findAllUsers, createUserDb } from "../services/users.service.js";

export const getUsers = async (req, res) => {
  const users = await findAllUsers();
  res.json(users);
};

export const createUser = async (req, res) => {
  const newUser = await createUserDb(req.body);
  res.status(201).json(newUser);
};
```

**src/routes/users.routes.js**

```javascript
import express from "express";
import { getUsers, createUser } from "../controllers/users.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;
```
