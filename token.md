# 1. O que é Autenticação com Token?

Autenticação com token é uma forma de identificar e autorizar usuários em uma aplicação.
O token (ex: JWT – JSON Web Token) é um "cartão de acesso" temporário que o servidor gera e entrega ao cliente após o login.

Login: usuário envia credenciais (email/senha).

Servidor: valida os dados e devolve um token.

Cliente: guarda o token (localStorage, cookies, etc).

Requisição protegida: cliente envia o token no cabeçalho Authorization: Bearer <token>.

Servidor: middleware verifica se o token é válido antes de permitir o acesso.

# 2. Fluxo basic

```scss
[Cliente] -- login (email/senha) --> [Servidor]
[Servidor] -- gera token JWT --> [Cliente]
[Cliente] -- envia token --> [Servidor]
[Middleware] -- valida token --> [Controller]
```

# 3. Dependências Necessárias

Se estivermos em Node.js com Express, normalmente usamos:

**npm install jsonwebtoken bcryptjs**

jsonwebtoken → gerar e validar tokens JWT.

bcryptjs → hash de senhas.
