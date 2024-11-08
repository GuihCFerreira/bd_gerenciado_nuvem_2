const Sequelize = require("sequelize");
const db = require("../config/db");

const Produto = db.define(
  "produto",
  {
    descricao: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    categoria: {
      type: Sequelize.STRING(10),
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    criado_por: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    criado_em: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "produto",
    timestamps: false,
  }
);

module.exports = Produto;
