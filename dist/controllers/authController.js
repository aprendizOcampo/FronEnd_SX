import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import conexion from '../database/db.js';
import { promisify } from 'util';
export const register = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const contrasena = req.body.contrasena;
    let contrasenaHash = await bcryptjs.hash(contrasena, 8);
    conexion.query('INSERT INTO usuario SET ?', {
      nombre: nombre,
      contrasena: contrasenaHash
    }, (error, results) => {
      if (error) {
        console.log(error);
      }
      res.redirect('/');
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const contrasena = req.body.contrasena;
    if (!nombre || !contrasena) {
      res.render('login', {
        alert: true,
        alertTitle: 'Advertencia',
        alertMessage: 'Ingrese un usuario y contraseña',
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login'
      });
    } else {
      conexion.query('SELECT * FROM usuario WHERE nombre = ?', [nombre], (error, results) => {
        if (results.length == 0 || !bcryptjs.compare(contrasena, results[0].contrasena)) {
          res.render('login', {
            alert: true,
            alertTitle: 'Error',
            alertMessage: 'Usuario y/o contraseña incorrectas',
            alertIcon: 'error',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
          });
        } else {
          const id = results[0].id;
          const token = jwt.sign({
            id: id
          }, process.env.JWT_SECRETO, {
            expiresIn: process.env.JWT_TIEMPO_EXPIRA
          });
          const cookiesOptions = {
            expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
          };
          res.cookie('jwt', token, cookiesOptions);
          res.render('login', {
            alert: true,
            alertTitle: 'Conexión exitosa',
            alertMessage: '¡LOGIN CORRECTO!',
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 800,
            ruta: ''
          });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);
      conexion.query('SELECT * FROM usuario WHERE id = ?', [decodificada.id], (error, results) => {
        if (!results) {
          return next();
        }
        req.nombre = results[0];
        return next();
      });
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.redirect('/inicio');
  }
};
export const logout = (req, res) => {
  res.clearCookie('jwt');
  return res.redirect('/');
};