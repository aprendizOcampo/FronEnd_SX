"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mysql = _interopRequireDefault(require("mysql"));
var _config = _interopRequireDefault(require("../config.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var conexion = _mysql["default"].createConnection({
  host: _config["default"].host,
  database: _config["default"].database,
  user: _config["default"].user,
  password: _config["default"].password
});
conexion.connect(function (error) {
  if (error) {
    console.log('El error de conexión es: ' + error);
    return;
  }
  console.log('¡Conectado a la base de datos MySQL!');

  // Seleccionar la base de datos antes de ejecutar consultas
  conexion.query("USE ".concat(process.env.DB_DATABASE), function (error) {
    if (error) {
      console.log('Error al seleccionar la base de datos: ' + error);
      return;
    }
    console.log('Base de datos seleccionada: ' + process.env.DB_DATABASE);
  });
});
var _default = conexion;
exports["default"] = _default;