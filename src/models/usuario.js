const Usuario = require('../schemas/usuario');
const Mascotas = require('../schemas/mascotas');

async function crearUsuario(datosUsuario) {
  // Crear mascotas y obtener sus _id
  const mascotas = datosUsuario.mascotas;
  const idsMascotas = [];
  for (let i = 0; i < mascotas.length; i++) {
    const mascota = await Mascotas.create(mascotas[i]);
    idsMascotas.push(mascota._id);
  }

  // Agregar los _id de las mascotas al usuario
  datosUsuario.mascotas = idsMascotas;

  const usuario = await Usuario.create(datosUsuario);
  return usuario;
}

async function obtenerUsuario(user, password) {
  try {
    const respuesta = await Usuario.findOne({ correo: user, contrasena: password }).populate('Mascotas');
    return respuesta;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
}

module.exports = { crearUsuario, obtenerUsuario };
