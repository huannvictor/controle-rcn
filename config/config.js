require("dotenv").config();

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "1234",
  database: "controle-rcn",
  define: {
    timestamps: true,
  },
  development: {
    username: "DB_USERNAME",
    password: "DB_PASSWORD",
    database: "controle-rcn",
    host: "127.0.0.1:5432",
    dialect: "postgres",
  },
  test: {
    username: "DB_USERNAME",
    password: "DB_PASSWORD",
    database: "controle-rcn",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
};
