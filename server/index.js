const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./models/db');
var path = require('path');
const modelos = require('./models');
const {
  shipment,
  adress,
  charges,
  tracking,
  shipment2,
  adress2,
  charges2,
  tracking2,
  shipment3,
  adress3,
  charges3,
  tracking3,
} = require('./objetos');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../dist'));

db.sync({ force: false }).then(function () {
  app.listen('3001', function () {
    console.log('listening at 3001');
  });
});

/*LAS SIGUIENTES RUTAS SOLO APLICAN A DESARROLLO PARA DEVOLVER LOS OBJETOS DUMMY*/

app.get('/shipment/:id', (req, res) => {
  if (req.params.id > 0) {
    if (req.params.id == 27658075111) {
      res.send(shipment);
    } else if (req.params.id == 27658075222) {
      res.send(shipment2);
    } else if (req.params.id == 27658075333) {
      res.send(shipment3);
    }
  }
});

app.get('/adress/:id', (req, res) => {
  if (req.params.id == 27658075111) {
    res.send(adress);
  } else if (req.params.id == 27658075222) {
    res.send(adress2);
  } else if (req.params.id == 27658075333) {
    res.send(adress3);
  }
});

app.get('/charges/:id', (req, res) => {
  if (req.params.id == 27658075111) {
    res.send(charges);
  } else if (req.params.id == 27658075222) {
    res.send(charges2);
  } else if (req.params.id == 27658075333) {
    res.send(charges3);
  }
});

app.get('/trackingObject/:id', (req, res) => {
  if (req.params.id == 27658075111) {
    res.send(tracking);
  } else if (req.params.id == 27658075222) {
    res.send(tracking2);
  } else if (req.params.id == 27658075333) {
    res.send(tracking3);
  }
});

/*FIN DE RUTAS DE DESARROLLO*/

app.use('/user', require('./routes/index'));

app.get('/*', function (req, res) {
  res.sendFile(path.resolve('../index.html'));
});
