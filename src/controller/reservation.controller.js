const {
  getReservationsWithDetails,
  traerReservasPorUsuario,
  traerReservasPorDoctor,
  traerHistorialMedico,
  agregarDescripcionAReserva,
} = require('../models/reservation');

async function obtenerReservaConDetalles(req, res) {
  try {
    const userId = req.query.userId;
    const reservations = await getReservationsWithDetails(userId);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerReservasPorUsuario(req, res) {
  try {
    const { usuarioId } = req.params;
    const reservations = await traerReservasPorUsuario(usuarioId);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function obtenerReservasPorDoctor(req, res) {
  try {
    const { doctorId } = req.params;
    const reservations = await traerReservasPorDoctor(doctorId);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function traerHistorialMedicoController(req, res) {
  try {
    const { id } = req.params;
    const medicalHistory = await traerHistorialMedico(id);
    res.json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function agregarDescripcionAReservaController(req, res) {
  try {
    const { id } = req.params;
    const { descripcion } = req.body;
    const medicalHistory = await agregarDescripcionAReserva(id, descripcion);
    res.json(medicalHistory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  obtenerReservaConDetalles,
  obtenerReservasPorUsuario,
  obtenerReservasPorDoctor,
  traerHistorialMedicoController,
  agregarDescripcionAReservaController,
};
