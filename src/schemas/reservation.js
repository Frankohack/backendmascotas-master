const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    doctorId: {   //solicitar el id del doctor 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    userId: { // solicitar el id del usuario
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    mascotaId: { // solicitar el id de la mascota
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mascota'
    },
    
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;

