var db = require('./db');

const Favoritos = require('./Favoritos');
const User = require('./Users');
const Snapshot = require('./Snapshot');

const modelos = {
  Favoritos,
  User,
  Snapshot,
};

User.hasMany(Snapshot, { as: 'snap' });

User.hasMany(Favoritos, { as: 'shipment' });

Snapshot.belongsTo(User);
Favoritos.belongsTo(User);

module.exports = {
  modelos,
};
