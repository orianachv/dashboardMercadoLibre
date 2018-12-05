var db = require('./db');
const Sequelize = require('sequelize');

const Snapshot = db.define('snapshot', {
  objeto: {
    type: Sequelize.JSON,
    allowNull: false
  },

});

module.exports = Snapshot;
