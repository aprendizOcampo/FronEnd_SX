import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const router = Router();

router.get('/', authController.isAuthenticated, (req, res) => {
  res.render('dashMInicio', { nombre: req.nombre });
});

// Rutas del administrador
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

// Rutas del vendedor
router.post('/registervendedor', authController.registervendedor);
router.post('/loginvendedor', authController.loginvendedor);

export default router;
