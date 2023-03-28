const { DataTypes, Sequelize } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const sequelize = new Sequelize("controle-rcn", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
});

const Promoter = sequelize.define(
  "promoter",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    nameSurname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trademarks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "promoter",
  }
);

module.exports = Promoter;
