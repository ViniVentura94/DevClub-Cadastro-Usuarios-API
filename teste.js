import { MongoClient } from "mongodb";

const uri = "mongodb+srv://viniventura94:TNFilhos1519@userdevclub.pgosdla.mongodb.net/Users?retryWrites=true&w=majority&appName=UserDevClub";

async function testConnection() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log("✅ Conectado ao MongoDB com sucesso!");
        await client.close();
    } catch (error) {
        console.error("❌ Erro ao conectar:", error);
    }
}

testConnection();


import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criando um usuário de teste
  const newUser = await prisma.user.create({
    data: {
      email: "teste@email.com",
      name: "Usuário Teste",
      age: 25,
    },
  });
  console.log("Usuário criado:", newUser);

  // Buscando usuários no banco
  const users = await prisma.user.findMany();
  console.log("Usuários cadastrados:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
