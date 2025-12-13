const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/user.routes');
const setupSwagger = require('../swagger');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
setupSwagger(app);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Swagger: http://localhost:${PORT}/docs`);
    });

  } catch (err) {
    console.error('Erro ao conectar ao banco:', err);
  }
}

start();