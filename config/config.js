require("dotenv").config();

const env = process.env.NODE_ENV || "development";

let config;

if (env === "test") {
  config = {
    dialect: "sqlite",
    storage: "database.sqlite",
    logging: false,
  };

} else if (env === "development") {
  config = {
    dialect: "postgres",
    use_env_variable: "DB_URL",
    logging: true,
  };

} else if (env === "production") {
  if (!process.env.DB_URL) {
    throw new Error("DB_URL é necessário para ambiente de produção");
  }

  config = {
    dialect: "postgres",
    use_env_variable: "DB_URL",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  };

} else {
  throw new Error(`Ambiente desconhecido: ${env}`);
}

module.exports = config;