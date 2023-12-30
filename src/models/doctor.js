const Doctor = require('../schemas/doctor')

async function createDoctor(nombres, apellidos, correo, especialidad,rut) {
  const respuestaGuardado = await Doctor.create({nombres,apellidos,correo,especialidad,rut})
  return respuestaGuardado
};

async function getDoctors() {
  const respuesta = await Doctor.find()
  return respuesta
}

module.exports = {createDoctor, getDoctors};