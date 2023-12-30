const Reservation = require('../schemas/reservation');
const Doctor = require('../schemas/doctor');

async function createReservation(doctorId, date) { // crear una reserva recibiendo el id de doctor, y la fecha con .populete 
  try {
    const respuestaGuardado = await Reservation.create({ doctorId, date });
    return respuestaGuardado;
  } catch (error) {
    throw new Error(`Error al crear la reserva: ${error.message}`);
  }
}

async function getReservationsWithDetails() { // para recuperar las reservas que estoy creando utilizando el .find() y el .populate
  const reservations = await Reservation.find()
    .populate({
      path: 'doctorId',
      select: 'nombres apellidos correo especialidad rut' 
    })
    .populate({
      path: 'userId',
      select: 'nombres apellidos correo otrosCampos' 
    })
    .populate({
      path: 'mascotaId',
      select: 'nombre tipo' 
    });
  return reservations; 
}

module.exports = { createReservation, getReservationsWithDetails };



