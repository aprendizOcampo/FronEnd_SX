import { config } from "dotenv";

config();

//se toman los datos de la bas ede datos que estan en el archivo .env
export default {
    host: process.env.DB_HOST || "NO SE ENCUENTRA HOST",
    database: process.env.DB_DATABASE || "NO SE ENCUENTRA DATABASE",
    user: process.env.DB_USER || "NO SE ENCUENTRA USER",
    password: process.env.DB_PASSWORD || ""
};