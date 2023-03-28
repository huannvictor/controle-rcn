const { Sequelize, DataTypes } = require("sequelize");
const Promoter = require("./Promoter");
const { v4: uuidv4 } = require("uuid");

const sequelize = new Sequelize("controle-rcn", "postgres", "1234", {
  dialect: "postgres",
});

const Schools = sequelize.define("schools", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  schoolName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promoterName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promoterId: {
    type: DataTypes.UUID,
    references: {
      model: "Promoter",
      key: "id",
    },
  },
});

Schools.belongsTo(Promoter, {
  foreignKey: "promoterId",
  as: "promoter",
});

module.exports = Schools;
