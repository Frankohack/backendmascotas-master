const { getReservationsWithDetails, traerReservasPorUsuario, traerReservasPorDoctor } = require('../models/reservation');

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
    const userId = req.query.userId;
    const reservations = await traerReservasPorUsuario(userId);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { obtenerReservaConDetalles, obtenerReservasPorUsuario };