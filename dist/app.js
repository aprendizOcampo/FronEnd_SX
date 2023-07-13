import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import home from "./routes/homepage.routes.js";
import cookieParser from "cookie-parser";
import router from './routes/router.js';
//import administrador from "./routes/loginAdmin.routes.js";
//import vendedor from "./routes/loginVendedor.routes.js";

dotenv.config();
const app = express();
const __dirname = path.resolve();

//Configuración
app.set("port", process.env.PORT);
app.set("view engine", "ejs");
app.set("views", path.resolve(path.join(__dirname, "app", "views")));

//middleware
app.use(express.static("./public"));

//sirve para procesar datos desde forms
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//funciona para poder usar las cookies
dotenv.config({
  path: '../env'
});
app.use(cookieParser());

//settings
app.set("PORT", process.env.PORT || 10000);

//Routes
app.use("/", home);
//app.use('/', router);
//app.use("/Inicio", admnistrador);
//app.use("/menu-vendedor", vendedor);

app.use((req, res, next) => {
  if (!req.user) res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

//app.use ("/v1/dash", dash);
app.get('/', (req, res) => {
  res.send({
    message: 'Bienvenido a mi app'
  });
});
export default app;