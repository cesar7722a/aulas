import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Seja bem vindo a prativa 1");
});

app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "User não encontrado" });
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "User delete com sucesso", user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// aula 03
// como fazer paginacao
// como fazer ordenacao
// como saber a quantidade

app.get("/users-ordernados", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { name: "asc" },
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro a ordernar usuarios", error });
  }
});

app.get("/users-paginacao", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      skip: 0,
      take: 5,
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro na paginação os utilizadores", error });
  }
});

app.get("/users-total", async (req, res) => {
  try {
    const total = await prisma.user.count();
    res.json(total);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao carregar o total dos users", error });
  }
});

/// aula 04
// como fazer os relacionamentos entre as tabelas

// Relacionamento 1:1

//Criar um usuário com perfil junto
app.post("/users-profil", async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    const userProfile = await prisma.user.create({
      data: {
        name: name,
        email: email,
        profile: {
          create: {
            bio: bio,
          },
        },
      },
      include: {
        profile: true,
      },
    });
    res.json(userProfile);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar Profile", error });
  }
});

//Buscar usuário com perfil
app.get("/users-profil", async (req, res) => {
  try {
    const usersProfile = await prisma.user.findMany({
      include: { profile: true },
    });
    res.json(usersProfile);
  } catch (error) {
    res.status(500).json({ error: "Usuarios nao foram encontrados", error });
  }
});

//Criar perfil separado (ligando ao user existente)
app.post("/users-profil-user", async (req, res) => {
  try {
    const { bio, id } = req.body;
    const userProfile = await prisma.profile.create({
      data: {
        bio,
        user: { connect: { id: Number(id) } },
      },
    });
    res.json(userProfile);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar profile", error });
  }
});

//Buscar User por ID com Profile
app.get("/user-profil/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { profile: true },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuarios", error });
  }
});

// Atualizar Profile de um User
app.put("/user-profil/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { bio } = req.body;
    const user = await prisma.profile.update({
      where: { id: Number(id) },
      data: { bio },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Falha ao actualizar" });
  }
});

// Deletar um Profile
app.delete("/user-profil/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.profile.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "deletado com sucesso", user });
  } catch (error) {
    res.status(404).json({ error: "erro ao deletar user", error });
  }
});

// Deletar um User (e o Profile associado)
app.delete("/user-user-profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "User deletado com sucesso", user });
  } catch (error) {
    res.status().json({ error: "Falha ao deletar user", error });
  }
});

// Relacionamento 1:n
// criar post associado oa um user
app.post("/users/:id/posts", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        user: { connect: { id: Number(id) } },
      },
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: "Falha ao criar um post", error });
  }
});

// Buscar todos os Posts de um User
app.get("/users/:id/posts", async (req, res) => {
  const { id } = req.params;

  try {
    const userwithpost = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { posts: true },
    });
    res.json(userwithpost);
  } catch (error) {
    res.status(500).json({ error: "Falha ao encontrar user", error });
  }
});

// Relacionamento n:n

// Criar Tag
app.post("/tags", async (req, res) => {
  try {
    const tag = await prisma.tags.create({
      data: { name: req.body.name },
    });
    res.json({ message: "Tag criado com sucesso", tag });
  } catch (error) {
    res.status(400).json({ error: "Falha ao criar tags", error });
  }
});

// Criar Post com tags por nome (connectOrCreate)

app.post("/posts", async (req, res) => {
  const { title, content, tagsNames = [] } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        tags: {
          connectOrCreate: tagsNames.map((name) => ({
            where: { name },
            create: { name },
          })),
        },
      },
      include: { tags: true },
    });
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: "Falha ao criar post", error });
  }
});

app.listen(3333, () => {
  console.log("O servidor está a rodar na porta 3333");
});
