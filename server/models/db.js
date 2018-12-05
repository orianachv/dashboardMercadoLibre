const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ml');

module.exports = db;
