import { config } from "dotenv";

config();

//se toman los datos de la bas ede datos que estan en el archivo .env
export default {
    host: process.env.HOST || "NO SE ENCUENTRA HOST",
    database: process.env.DATABASE || "NO SE ENCUENTRA DATABASE",
    user: process.env.USER || "NO SE ENCUENTRA USER",
    password: process.env.PASSWORD || "NO SE ENCUENTRA PASSWORD"
};