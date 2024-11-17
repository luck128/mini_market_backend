# Mini Market - Backend

API REST para o gerenciamento do estoque do Mini Market, permitindo a realização de operações CRUD (criação, leitura, atualização e exclusão) para os produtos disponíveis no sistema.

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/):** Ambiente para execução de código JavaScript no servidor.
- **[Express](https://expressjs.com/):** Framework para criação de APIs.
- **[SQLite](https://www.sqlite.org/):** Banco de dados leve e eficiente.
- **[Prisma](https://www.prisma.io/):** ORM para gerenciamento do banco de dados.
- **[Nodemon](https://nodemon.io/):** Atualização automática do servidor em tempo real.
- **[Express Session](https://www.npmjs.com/package/express-session):** Middleware para gerenciamento de sessões.

## 📂 Funcionalidades da API

| Método  | Endpoint         | Descrição                                     | Body (JSON)                                                                         |
|---------|------------------|-----------------------------------------------|-------------------------------------------------------------------------------------|
| `GET`   | `/products`      | Retorna todos os produtos do estoque.         |                                                                                     |
| `GET`   | `/products/:id`  | Retorna informações de um produto específico. |                                                                                     |
| `POST`  | `/products`      | Cadastra um novo produto no estoque.          | `{ "name": "Desodorante", "category": "MERCEARIA", "price": 10.49, "quantity": 1 }` |
| `PUT`   | `/products/:id`  | Atualiza informações de um produto existente. | `{ "id": 1, "price": 10.99, "quantity": 20 }`                                       |
| `DELETE`| `/products`      | Remove um produto do estoque.                 | `{ "id": 1 }`                                                                       |

## 💻 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado.
- Gerenciador de pacotes (npm ou yarn).

### Passos para execução

1. Clone o repositório:
```bash
git clone https://github.com/luck128/mini_market_backend.git
cd backend

Instale as dependências:
npm install

Migrações do banco de dados:
npx prisma migrate dev

Inicie o servidor:
npm start

Acesse a API no endereço:
http://localhost:3030
```

## 📂 Estrutura do Projeto
src/

├── routes/          # Rotas da API

├── prisma/          # Modelo de dados Prisma para o banco de dados

├── controllers/     # Controladores dos produtos e estoque

└── server.js        # Configuração do servidor
