
const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
  nombre: String,
  tipo: String,
  run:  String,
});

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;
