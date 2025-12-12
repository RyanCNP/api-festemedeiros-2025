# 📘 API CRUD de Usuários

API simples construída com Node.js (CommonJS), Express, PostgreSQL, Sequelize e Swagger, seguindo a boa prática tradicional de um CRUD bem estruturado.

## ✨ Funcionalidades

🔹 Criar usuários

🔹 Listar usuários

🔹 Buscar usuário por ID

🔹 Atualizar informações

🔹 Remover usuários

🔹 Documentação com Swagger

## 🛠️ Tecnologias

Node.js

Express

PostgreSQL

Sequelize ORM

Swagger UI

Dotenv

CommonJS

## 📂 Estrutura do Projeto
```project/
│── src/
│   ├── app.js
│   ├── server.js
│   ├── swagger.js
│   │
│   ├── config/
│   │   └── database.js
│   │
│   ├── database/
│   │   ├── migrations/
│   │   └── models/
│   │       └── User.js
│   │
│   └── routes/
│       └── user.routes.js
│
│── .env
│── .gitignore
│── package.json
│── README.md
```
## ⚙️ Configuração
### 1. Instalar dependências
```
npm install
```

### 2. Configurar o arquivo .env

DB_HOST = localhost   
DB_USER = postgres    
DB_PASS = sua_senha   
DB_NAME = crud_db 
DB_PORT = 5432    
PORT = 3000   

### 3. Executar migrations
```
npx sequelize-cli db:migrate
```

#### ▶️ Iniciar o Servidor
```
npm start
```

### 📘 Documentação Swagger

Acesse: http://localhost:3000/api-docs

## 📚 Endpoints
```
POST    /users        → Criar usuário
GET     /users        → Listar usuários
GET     /users/:id    → Buscar por ID
PUT     /users/:id    → Atualizar usuário
DELETE  /users/:id    → Remover usuário
```

## 🏛️ Licença

Livre para estudos e aperfeiçoamentos.