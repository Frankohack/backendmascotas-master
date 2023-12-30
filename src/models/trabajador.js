const doctor = require('../schemas/doctor');
const Trabajador = require('../schemas/trabajador');

async function createTrabajador(nombres, apellidos, correo, especialidad, rut, contrasena) {
  const respuestaGuardado = await Trabajador.create({ nombres, apellidos, correo, especialidad, rut, contrasena });
  return respuestaGuardado;
}

async function obtenerTrabajador(user, password) {
  const respuesta = await doctor.findOne({ correo: user, contrasena: password });
  return respuesta;
}

module.exports = { createTrabajador, obtenerTrabajador };
