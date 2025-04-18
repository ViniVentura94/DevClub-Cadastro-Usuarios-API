# 📦 Cadastro de Usuários - API

API RESTful desenvolvida com **Node.js**, **Express** e **Prisma** conectando ao **MongoDB**.  
Permite o cadastro e listagem e gerenciar os usuários, integrando com o frontend React.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- Prisma ORM
- MongoDB
- Dotenv
- Cors

---

## 📁 Estrutura do Projeto

📦 raiz/ ┣ 📂node_modules ┣ 📂prisma ┃ ┗ 📜 schema.prisma ┣ 📜 .env (não versionado) ┣ 📜 .env.example ┣ 📜 .gitignore ┣ 📜 package.json ┣ 📜 server.js

## 📦 Instalação

```bash
git clone https://github.com/ViniVentura94/DevClub-Cadastro-Usuarios-API.git
cd DevClub-Cadastro-Usuarios-API
npm install
```
## ⚙️ Configuração
Crie um arquivo .env com base no .env.example:

```bash
PORT=3000
DATABASE_URL=mongodb+srv://usuario:senha@cluster.mongodb.net/nomeDoBanco
```
---

## 🧪 Executando o projeto

```bash
npx prisma db push
npm start
```
O servidor será iniciado em: http://localhost:3000

---

## 🛠️ Endpoints disponíveis

| Método | Rota | Descrição |
|--------|-----------|--------------|
| GET | /usuarios | Lista todos os usuários |
| POST | /usuarios | Cadastra um novo usuário |
| PUT | /usuarios/:id | Editar usuário |
| DELETE | /usuarios/:id | Deletar usuário |

---

## 🔗 Integração com o Frontend
Este projeto faz parte da aplicação completa com frontend React.

<br>
Frontend publicado em:
👉 https://cadastro-usuarios-vini.netlify.app/
<br>
Repositório do frontend:
🔗 https://github.com/ViniVentura94/DevClub-Cadastro-Usuarios

---

## 📚 Aprendizados

REST API com Node.js

Integração com MongoDB via Prisma

Boas práticas com .env e .gitignore

Separação clara entre front e back

Deploy escalável com Node e serviços externos

---

## 🤝 Agradecimentos
Projeto desenvolvido com base nos estudos da formação Full Stack do DevClub, com mentorias de Rodolfo Mori.

---

## 📫 Contato

Vinicius Ventura

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vinicius-ventura-passos/)
<br>
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat&logo=instagram&logoColor=white)](https://www.instagram.com/_viniventura_/)
<br>
📧 viniventura94@gmail.com
<br>
📱 (21) 96880-4224
