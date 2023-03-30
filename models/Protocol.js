const { Sequelize, DataTypes } = require("sequelize");
const Promoter = require("./Promoter");
const Schools = require("./Schools");
const Rcn = require("./Rcn");
const { v4: uuidv4 } = require("uuid");

const sequelize = new Sequelize("controle-rcn", "postgres", "1234", {
  dialect: "postgres",
});

const Protocol = sequelize.define("protocol", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  rcnId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Rcn",
      key: "id",
    },
  },
  rcnEdition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promoterId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: "Promoter",
      key: "id",
    },
  },
  promoterName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Protocol.belongsTo(Rcn, {
  foreignKey: "rcnId",
  as: "rcn",
});
Protocol.belongsTo(Promoter, {
  foreignKey: "promoterId",
  as: "promoter",
});
Protocol.belongsToMany(Schools, {
  foreignKey: "promoterId",
  through: "ProtocolSchools",
  as: "promoter",
});

module.exports = Protocol;
