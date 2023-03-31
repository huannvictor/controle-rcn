const { Sequelize, DataTypes } = require("sequelize");
const Promoter = require("./Promoter");
const Protocol = require("./Protocol");

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
    type: DataTypes.TEXT,
    allowNull: false,
  },
  promoterName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  promoterId: {
    type: DataTypes.UUID,
    references: {
      model: "Promoter",
      key: "id",
    },
  },
  region: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  adopter: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Schools.belongsTo(Promoter, {
  foreignKey: "promoterId",
  as: "promoter",
});

Schools.belongsToMany(Protocol, { through: "protocolSchools" });

module.exports = Schools;
