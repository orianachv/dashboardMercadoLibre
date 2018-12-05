var db = require('./db');
const Sequelize = require('sequelize');

const Favoritos = db.define('favoritos', {
  shipment: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

module.exports = Favoritos;
