const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombresDueno: String,
  apellidosDueno: String,
  mascotas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mascotas' }],
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

