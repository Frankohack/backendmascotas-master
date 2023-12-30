const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    nombreMascota: String,
    tipoAnimal: String,
  });

const Mascotas = mongoose.model('Mascotas', mascotaSchema);

module.exports = Mascotas;