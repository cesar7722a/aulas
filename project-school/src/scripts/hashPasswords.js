import bcrypt from "bcryptjs";
import prisma from "../libs/prisma.js";
// import prisma from "../src/database/prismaClient.js";

async function main() {
  const users = await prisma.user.findMany();

  for (const user of users) {
    // Se a senha ainda não estiver encriptada
    // (senhas bcrypt começam sempre com "$2a$" ou "$2b$")
    if (
      !user.password.startsWith("$2a$") &&
      !user.password.startsWith("$2b$")
    ) {
      const hashed = bcrypt.hashSync(user.password, 10);

      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashed },
      });

      console.log(
        `🔑 Senha do usuário ${user.email} foi encriptada com sucesso.`
      );
    }
  }
}

main()
  .then(() => {
    console.log("✅ Todas as senhas foram migradas.");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Erro na migração:", err);
    process.exit(1);
  });
