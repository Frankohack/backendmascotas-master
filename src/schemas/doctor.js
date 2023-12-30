const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  correo: String,
  especialidad: String,
  rut: String,
});

module.exports = mongoose.model('Doctor', doctorSchema);