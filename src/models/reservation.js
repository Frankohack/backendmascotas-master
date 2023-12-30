const Reservation = require('../schemas/reservation');
const Doctor = require('../schemas/doctor');

async function createReservation(dataReserva) {
  // crear una reserva recibiendo el id de doctor, y la fecha con .populete
  try {
    console.log(dataReserva);
    const respuestaGuardado = await Reservation.create(dataReserva);
    return respuestaGuardado;
  } catch (error) {
    throw new Error(`Error al crear la reserva: ${error.message}`);
  }
}

async function getReservationsWithDetails() {
  // para recuperar las reservas que estoy creando utilizando el .find() y el .populate
  const reservations = await Reservation.find().populate('doctorId').populate('userId').populate('mascotaId');

  const reservationsMap = reservations.map((reservation) => {
    return {
      id: reservation._id,
      usuario: reservation.userId,
      doctor: reservation.doctorId,
      mascota: reservation.mascotaId,
      hora: reservation.hora,
    };
  });
  return reservationsMap;
}

async function traerReservasPorUsuario(idUsuario) {
  const reservations = await Reservation.find({ userId: idUsuario })
    .populate('doctorId')
    .populate('userId')
    .populate('mascotaId');

  const reservationsMap = reservations.map((reservation) => {
    return {
      id: reservation._id,
      usuario: reservation.userId,
      doctor: reservation.doctorId,
      mascota: reservation.mascotaId,
      hora: reservation.hora,
    };
  });

  return reservationsMap;
}

async function traerReservasPorDoctor(idDoctor) {
  const reservations = await Reservation.find({ doctorId: idDoctor })
    .populate('doctorId')
    .populate('userId')
    .populate('mascotaId');

  const reservationsMap = reservations.map((reservation) => {
    return {
      id: reservation._id,
      usuario: reservation.userId,
      doctor: reservation.doctorId,
      mascota: reservation.mascotaId,
      hora: reservation.hora,
    };
  });

  return reservationsMap;
}

async function traerHistorialMedico(idDoctor) {
  const reservas = await Reservation.find({ doctorId: idDoctor, descripcion: { $ne: null } })
    .populate('mascotaId')
    .populate('userId');

  const reservasMap = reservas.map((reserva) => {
    return {
      _id: reserva._id,
      usuario: reserva.userId,
      mascota: reserva.mascotaId,
      descripcion: reserva.descripcion,
    };
  });

  return reservasMap;
}

async function agregarDescripcionAReserva(idReserva, descripcion) {
  const respuesta = await Reservation.updateOne({ _id: idReserva }, { descripcion });
  return respuesta;
}

module.exports = {
  createReservation,
  getReservationsWithDetails,
  traerReservasPorUsuario,
  traerReservasPorDoctor,
  traerHistorialMedico,
  agregarDescripcionAReserva,
};
