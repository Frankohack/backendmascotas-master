const { traerMascotasUsuario } = require("../models/mascotas");

async function traerMascotasUsuarioController(req, res) {
    try {
        const {usuarioId} = req.params;
        const mascotas = await traerMascotasUsuario(usuarioId);
        return res.status(200).json(mascotas); 
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = { traerMascotasUsuarioController };