const Trabajador = require('../schemas/trabajador');

async function createTrabajador(nombres, apellidos, correo, especialidad, rut, contrasena) {
  const respuestaGuardado = await Trabajador.create({ nombres, apellidos, correo, especialidad, rut, contrasena });
  return respuestaGuardado;
}

async function obtenerTrabajador(user, password) {
  const respuesta = await Trabajador.findOne({correo: user, contrasena: password})
  return respuesta
}

module.exports = { createTrabajador, obtenerTrabajador };
