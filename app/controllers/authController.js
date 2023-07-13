import jwt from 'jsonwebtoken';
import conexion from '../database/db.js';
import { promisify } from 'util';

export const register = async (req, res) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    conexion.query(
      'INSERT INTO usuario_admin SET ?',
      { usuario: usuario, password: password },
      (error, results) => {
        if (error) {
          console.log(error);
        }
        res.redirect('/administrador/menu-inicio');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    if (!usuario || !password) {
      res.render('login', {
        alert: true,
        alertTitle: 'Advertencia',
        alertMessage: 'Ingrese un usuario y contraseña',
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login',
      });
    } else {
      conexion.query(
        'SELECT * FROM usuario_admin WHERE usuario = ?',
        [usuario],
        async (error, results) => {
          if (results.length === 0 || password !== results[0].password) {
            res.render('login', {
              alert: true,
              alertTitle: 'Error',
              alertMessage: 'Usuario y/o contraseña incorrectas',
              alertIcon: 'error',
              showConfirmButton: true,
              timer: false,
              ruta: 'login',
            });
          } else {
            const id = results[0].id;
            const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
              expiresIn: process.env.JWT_TIEMPO_EXPIRA,
            });

            const cookiesOptions = {
              expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
              httpOnly: true,
            };

            res.cookie('jwt', token, cookiesOptions);
            res.render('dashMInicio', {
              alert: true,
              alertTitle: 'Conexión exitosa',
              alertMessage: '¡LOGIN CORRECTO!',
              alertIcon: 'success',
              showConfirmButton: false,
              timer: 800,
              ruta: '',
              title: 'Menu Principal',
            });
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);

      conexion.query('SELECT * FROM usuario_admin WHERE id = ?', [decodificada.id], (error, results) => {
        if (!results) {
          return next();
        }
        req.usuario = results[0];
        return next();
      });
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.redirect('/login');
  }
};

export const registervendedor = async (req, res) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    conexion.query(
      'INSERT INTO usuario_vendedor SET ?',
      { usuario: usuario, password: password },
      (error, results) => {
        if (error) {
          console.log(error);
        }
        res.redirect('/vendedor/menu-vendedor');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const loginvendedor = async (req, res) => {
  try {
    const usuario = req.body.usuario;
    const password = req.body.password;

    if (!usuario || !password) {
      res.render('loginEstandar', {
        alert: true,
        alertTitle: 'Advertencia',
        alertMessage: 'Ingrese un usuario y contraseña',
        alertIcon: 'info',
        showConfirmButton: true,
        timer: false,
        ruta: 'login-vendedor',
      });
    } else {
      conexion.query(
        'SELECT * FROM usuario_vendedor WHERE usuario = ?',
        [usuario],
        async (error, results) => {
          if (results.length === 0 || password !== results[0].password) {
            res.render('loginEstandar', {
              alert: true,
              alertTitle: 'Error',
              alertMessage: 'Usuario y/o contraseña incorrectas',
              alertIcon: 'error',
              showConfirmButton: true,
              timer: false,
              ruta: '',
            });
          } else {
            const id = results[0].id;
            const token = jwt.sign({ id: id }, process.env.JWT_SECRETO, {
              expiresIn: process.env.JWT_TIEMPO_EXPIRA,
            });

            const cookiesOptions = {
              expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
              httpOnly: true,
            };

            res.cookie('jwt', token, cookiesOptions);
            res.render('dashInMUV', {
              alert: true,
              alertTitle: 'Conexión exitosa',
              alertMessage: '¡LOGIN CORRECTO!',
              alertIcon: 'success',
              showConfirmButton: false,
              timer: 800,
              ruta: '',
              title: 'Menu Principal',
            });
          }
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};

export const isAuthenticatedvendedor = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRETO);

      conexion.query('SELECT * FROM usuario_vendedor WHERE id = ?', [decodificada.id], (error, results) => {
        if (!results) {
          return next();
        }
        req.usuario = results[0];
        return next();
      });
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    res.redirect('/login-vendedor');
  }
};

export const logout = (req, res) => {
  res.clearCookie('jwt');
  return res.redirect('/');
};
