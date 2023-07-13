import express from 'express';
import { Router } from 'express';
import * as authController from '../controllers/authController.js';
const router = Router();
router.get('/', authController.isAuthenticated, (req, res) => {
  res.render('dashMInicio', {
    nombre: req.nombre
  });
});

/*router.get('/login-admin', (req, res) => {
  res.render('loginAdmin', { alert: false });
});*/

/*router.get('/crear-usuario-admin', (req, res) => {
  res.render('crearUsA');
}); */

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
export default router;