const Usuario = require("../schemas/usuario");

const traerMascotasUsuario = async (idUsuario) => {
    const usuario = await Usuario.findById(idUsuario).select("mascotas");
    return usuario.mascotas;
};

module.exports = { traerMascotasUsuario };