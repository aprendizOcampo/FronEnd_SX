"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _ejs = _interopRequireDefault(require("ejs"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _homepageRoutes = _interopRequireDefault(require("./routes/homepage.routes.js"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _loginAdminRoutes = _interopRequireDefault(require("./routes/loginAdmin.routes.js"));
var _loginVendedorRoutes = _interopRequireDefault(require("./routes/loginVendedor.routes.js"));
var _loginRoutes = _interopRequireDefault(require("./routes/login.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//rutas del login

_dotenv["default"].config();
var app = (0, _express["default"])();
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);

//Configuración
app.set("view engine", "ejs");
app.set("views", _path["default"].resolve(_path["default"].join(_dirname, "views")));

//middleware
app.use(_express["default"]["static"]("./public"));

//sirve para procesar datos desde forms
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());

//funciona para poder usar las cookies
_dotenv["default"].config({
  path: '../env'
});
app.use((0, _cookieParser["default"])());

//settings
app.set("port", process.env.PORT || 10000);

//Routes
app.use("/", _loginRoutes["default"]);
app.use("/", _homepageRoutes["default"]);
app.use("/administrador", _loginAdminRoutes["default"]);
app.use("/vendedor", _loginVendedorRoutes["default"]);
app.use(function (req, res, next) {
  if (!req.user) res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});
app.get('/', function (req, res) {
  res.send({
    message: 'Bienvenido a mi app'
  });
});
var _default = app;
exports["default"] = _default;