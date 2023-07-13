import express from 'express';
import * as authController from '../controllers/authController.js';

const log = express.Router();

log.get('/prueba', authController.isAuthenticated, (req, res) => {
  res.render('index', { nombre: req.nombre });
});

log.get('/login', (req, res) => {
  res.render('login', { alert: true, alertTitle: '', alertMessage: '', alertIcon: '', ruta: '', showConfirmButton: '', timer: '' });
});

log.get('/register', (req, res) => {
  res.render('register');
});

log.post('/register', authController.register);
log.post('/login', authController.login);
log.get('/logout', authController.logout);
log.post('/loginvendedor', authController.loginvendedor);

export default log;
