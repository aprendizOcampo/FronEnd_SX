import mysql from 'mysql';

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

conexion.connect((error) => {
  if (error) {
    console.log('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la base de datos MySQL!');
  
  // Seleccionar la base de datos antes de ejecutar consultas
  conexion.query('USE proyecto_sinvex', (error) => {
    if (error) {
      console.log('Error al seleccionar la base de datos: ' + error);
      return;
    }
    console.log('Base de datos seleccionada: proyecto_sinvex');
  });
});

export default conexion;
