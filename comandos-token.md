npm install express cors
jsonwebtoken
bcryptjs

# Senhas

    bcryptjs

    Para encriptar senhas ao salvar no banco e comparar no login.

    Exemplo:

```javascript
import bcrypt from "bcryptjs";
const hash = await bcrypt.hash("123456", 8);
const valid = await bcrypt.compare("123456", hash);
```

# Autenticação & Token

jsonwebtoken

    Para gerar e validar tokens JWT.

    Exemplo:

```javascript
import bcrypt from "bcryptjs";
const hash = await bcrypt.hash("123456", 8);
const valid = await bcrypt.compare("123456", hash);
```
