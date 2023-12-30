const Usuario = require("../schemas/usuario");

const traerMascotasUsuario = async (idUsuario) => {
    try {
        const usuario = await Usuario.findById(idUsuario).populate("mascotas");
        return usuario.mascotas;
    } catch (error) {
        console.log(error);
    }
};

module.exports = { traerMascotasUsuario };