const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = new Sequelize("controle-rcn", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const Rcn = sequelize.define(
  "rcn",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    edition: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "rcn",
  }
);

module.exports = Rcn;
