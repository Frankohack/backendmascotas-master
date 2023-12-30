const mongoose = require('mongoose');

const trabajadorSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  correo: String,
  especialidad: String,
  rut: String,
  contrasena: String
});

const Trabajador = mongoose.model('trabajador', trabajadorSchema);

module.exports = Trabajador;
