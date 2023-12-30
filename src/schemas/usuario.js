const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
  nombreMascota: String,
  tipoAnimal: String,
});

const usuarioSchema = new mongoose.Schema({
  nombresDueno: String,
  apellidosDueno: String,
  mascotas: [mascotaSchema], 
  nickname: String,
  contrasena: String,
  rutPropietario: String,
  correo: String,
  region: String,
  comuna: String,
  direccion: String,
  numero: Number,
  telefono: Number 
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;

