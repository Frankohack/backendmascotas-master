const Usuario = require('../schemas/usuario'); 

async function crearUsuario(datosUsuario) {
  const usuario = await Usuario.create(datosUsuario);
  return usuario;
}

async function obtenerUsuario(user, password) {
  try {
    const respuesta = await Usuario.findOne({ correo: user, contrasena: password }).populate('mascotas');
    return respuesta;
  } catch (error) {
    throw new Error('Error al obtener el usuario');
  }
}

module.exports = { crearUsuario, obtenerUsuario };

