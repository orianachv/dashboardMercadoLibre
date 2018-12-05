const express = require('express');
const router = express.Router();
const models = require('../models/index').modelos;
module.exports = router;

router.post('/createUser', (req, res) => {
  models.User.findOrCreate({
    where: {
      nombre: req.body.nombre,
    },
  })
    .spread((user, created) => {
      console.log(
        user.get({
          plain: true,
        }),
      );
      console.log(created);
    })
    .then(() => res.send('ok'));
});

router.post('/fav', (req, res) => {
  models.Favoritos.findOrCreate({
    where: {
      shipment: req.body.id,
    },
  })
    .spread((fav, created) => {
      models.User.findOne({ where: { nombre: req.body.user } })
        .then((user) => fav.setUser(user.id))
    })
    .then(() => res.send('ok'));
});


router.delete('/fav', (req, res) => {
  models.Favoritos.destroy({
    where: {
      id: req.query.id,
    },
  }).then(() => res.send('delete ok'));
});

router.post('/snap', (req, res) => {
  models.Snapshot.create({ objeto: req.body.objeto })
    .then((snap) => models.User.findOne({ where: { nombre: req.body.nombre } })
      .then((user) => snap.setUser(user.id)))
});

router.delete('/snap', (req, res) => {
  models.Snapshot.destroy({
    where: {
      id: req.query.id,
    },
  }).then(() => res.send('delete ok'));
});

router.get('/snap/', (req, res) => {
  models.User.findOne({ where: { nombre: req.query.nombre } })
    .then((user) => user.getSnap()
      .then((re) => res.send(re)))
});

router.get('/fav/', (req, res) => {
  models.User.findOne({ where: { nombre: req.query.nombre } })
    .then((user) => user.getShipment()
      .then((re) => res.send(re)))
});
