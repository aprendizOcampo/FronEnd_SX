/*import { pool } from "../config/database/db";
import message from "../config/message";
import jwt from "jsonwebtoken";

export const createUser = async(req, res) => { //PARA HACER POST EN THUNDER CLIENT LA RUTA ES HTTP://LOCALHOST:3000/API//
    try {
        const name = req.body.name;
        // const result = await pool.query(`INSERT INTO users (name) VALUES ('${name}')`)
        const result = await pool.query(`call spInsertarUser ('${name}')`);
        if (result[0].affectedRows = 1) {
            res.json(result);
        } else {
            res.json({ "error": "registro no agregado" });
        }
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const listuser = async(req, res) => { //PARA HACER POST EN THUNDER CLIENT LA RUTA ES HTTP://LOCALHOST:3000/API//
    try {
        const result = await pool.query(`call spListarUser ()`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const searchUser = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(`call spBuscarUsers (${id})`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const pingUser = async(req, res) => {
    try {
        const result = await pool.query(`SELECT 'HOLA USUARIO' AS result `);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const UpdateUser = async(req, res) => {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const result = await pool.query(`call spModificarUser (${id},'${name}')`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const DeleteUser = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(`call spEliminarUser(${id})`);
        res.json(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
    }
}
export const isValidToken = (req, res, next) => {

    // const tokenClient = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21icmUiOiJMVUlTIEJFQ0VSUlJBIiwiaWQiOiIxMDQyMzc2MjAxNDg2MTQ0MTA0NDQiLCJlbWFpbCI6ImVsaW5nZW5pZXJvcHJvZmVzb3JAZ21haWwuY29tIiwiaWF0IjoxNjgwMDQzMTQ1LCJleHAiOjE2ODAwNDY3NDV9.CN8oJ3L2Gbc4-HYf9-T2-zTFEyeTMDLe0y4bLAPmGlM";
    const tokenClient = req.cookies.eib_per;
    console.log(tokenClient);
    try {
        jwt.verify(tokenClient, process.env.SECRET_KEY, (err, decoded) => {
            if (!err) {
                // res.send("todo bien");
                next();
            } else {
                res.send({ "error": "El token es errado o ha caducado " })
            }
            // console.log(err);
        })   
    } catch (error) {
        res.send({ "error": "El token es errado o ha caducado " })
    }
} */