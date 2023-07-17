import mysql from 'mysql';
import config from "../config.js";

const conexion = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password
});

conexion.connect((error) => {
  if (error) {
    console.log('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la base de datos MySQL!');
  
  // Seleccionar la base de datos antes de ejecutar consultas
  conexion.query(`USE ${process.env.DB_DATABASE}`, (error) => {
    if (error) {
      console.log('Error al seleccionar la base de datos: ' + error);
      return;
    }
    console.log('Base de datos seleccionada: ' + process.env.DB_DATABASE);
  });
});

export default conexion;
