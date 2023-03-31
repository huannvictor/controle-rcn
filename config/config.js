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
    username: "postgres",
    password: "1234",
    database: "controle-rcn",
    host: "localhost",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "1234",
    database: "controle-rcn",
    host: "localhost",
    dialect: "postgres",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
};
