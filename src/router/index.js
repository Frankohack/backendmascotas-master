const { createDoctor, getDoctors } = require('../models/doctor');
const { Router } = require('express');
const { crearUsuario } = require('../models/usuario');
const { createReservation, getReservationsWithDetails } = require('../models/reservation');
const { createTrabajador, obtenerTrabajador } = require('../models/trabajador');
const {
  obtenerReservaConDetalles,
  obtenerReservasPorUsuario,
  obtenerReservasPorDoctor,
  traerHistorialMedicoController,
  agregarDescripcionAReservaController,
} = require('../controller/reservation.controller');
const { traerMascotasUsuarioController } = require('../controller/mascotas');
const Usuario = require('../schemas/usuario');
const router = new Router();

router.post('/login', async function (req, res) {
  const { correo, contrasena } = req.body;
  const usuario = await Usuario.findOne({ correo, contrasena });
  if (usuario) {
    res.json({ userId: usuario._id });
  } else {
    res.status(401).send('Credenciales incorrectas');
  }
});

router.get('/usuarios/:usuarioId/mascotas', traerMascotasUsuarioController);

router.get('/', function (req, res) {
  res.send('Bienvenido a la API de Franco');
});

router.post('/crear-trabajador', async function (req, res) {
  const data = req.body;
  const { nombres, apellidos, correo, especialidad, rut, contrasena } = data;

  const respuestaCrear = await createTrabajador(nombres, apellidos, correo, especialidad, rut, contrasena);
  res.json(respuestaCrear);
});

router.post('/trabajador', async function (req, res) {
  const { correo, contrasena } = req.body;

  const respuestaObtener = await obtenerTrabajador(correo, contrasena);

  if (respuestaObtener) {
    res.json({ id: respuestaObtener._id });
  } else {
    res.json(null);
  }
});

router.get('/reserva-detallada', obtenerReservaConDetalles);

router.get('/usuario/:usuarioId/reservas', obtenerReservasPorUsuario);
router.get('/doctor/:doctorId/reservas', obtenerReservasPorDoctor);

router.post('/crear', async function (req, res) {
  const data = req.body;
  const respuestaCrear = await crearUsuario(data);
  res.json(respuestaCrear);
});

router.post('/usuario', async function (req, res) {
  const { correo, contraseña } = req.body;

  try {
    const usuario = await Usuario.findOne({ correo, contrasena: contraseña });

    if (usuario) {
      res.json({ id: usuario._id });
    } else {
      res.json(null);
    }
  } catch (error) {
    console.error('Error al verificar usuario:', error);
    res.status(500).json({ error: 'Error al verificar el usuario' });
  }
});

router.post('/doctors', async function (req, res) {
  const { nombres, apellidos, correo, especialidad, rut } = req.body;

  const respuestaCrear = await createDoctor(nombres, apellidos, correo, especialidad, rut);
  res.json(respuestaCrear);
});

router.get('/doctors', async function (req, res) {
  const respuestaObtener = await getDoctors();

  res.json(respuestaObtener);
});

router.post('/reservations', async function (req, res) {
  const body = req.body;
  const respuestaCrear = await createReservation(body);
  res.json(respuestaCrear);
});

router.get('/reservations-doctor-details', async function (req, res) {
  try {
    const userId = req.query.userId;
    const reservations = await getReservationsWithDetails(userId);
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/doctor/:id/medical-records', traerHistorialMedicoController);
router.put('/reserva/:id/descripcion', agregarDescripcionAReservaController);

module.exports = router;
