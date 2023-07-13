import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import home from "./routes/homepage.routes.js";
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser'
import cors from 'cors';
import administrador from "./routes/loginAdmin.routes.js";
import vendedor from "./routes/loginVendedor.routes.js";

//rutas del login
import log from "./routes/login.routes.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Configuración
app.set("view engine", "ejs");
app.set("views", path.resolve(path.join(__dirname, "views")));

//middleware
app.use(express.static("./public"));

//sirve para procesar datos desde forms
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());

//funciona para poder usar las cookies
dotenv.config({ path: '../env' });
app.use(cookieParser())

//settings
app.set("port", process.env.PORT || 10000);

//Routes
app.use("/", log);
app.use("/", home);
app.use("/administrador", administrador);
app.use("/vendedor", vendedor);

app.use((req, res, next) => {
  if (!req.user)
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.get('/', (req, res) => {
  res.send({ message: 'Bienvenido a mi app' });
})

export default app;