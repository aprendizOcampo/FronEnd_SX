"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();

//se toman los datos de la bas ede datos que estan en el archivo .env
var _default = {
  host: process.env.DB_HOST || "NO SE ENCUENTRA HOST",
  database: process.env.DB_DATABASE || "NO SE ENCUENTRA DATABASE",
  user: process.env.DB_USER || "NO SE ENCUENTRA USER",
  password: process.env.DB_PASSWORD || ""
};
exports["default"] = _default;