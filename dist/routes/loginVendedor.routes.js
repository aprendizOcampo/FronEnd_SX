/*import { Router } from "express";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const vendedor = Router();

loginRouter.get("/login", (req, res)=>{
    var data ={
        "nombre" : req.user.displayName,
        "id" : req.user.id,
        "email": req.user.emails[0].value
    };
    let token = jwt.sign(data, process.env.SECRET_KEY, { "expiresIn" : process.env.EXPIRE_TOKEN });


    res.cookie("cookie1", token);

    res.redirect("/v1/");
});

vendedor.get("/realizar-venta", (req, res) => {
  res.render("venta", { title: "Vender" });
});

vendedor.get("/menu-vendedor", (req, res) => {
  res.render("dashInMUV", { title: "Menu del vendedor" });
})

vendedor.get("/facturas", (req, res) => {
  res.render("dashUVFacturas", { title: "Facturas" });
});

vendedor.get("/calculadora-sistema", (req, res) => {
  res.render("dashCalcUV", { title: "Calculadora" });
});

vendedor.get("/perfil-vendedor", (req, res) => {
  res.render("dashPerfilV", { title: "Perfil Vendedor" });
});

vendedor.get("/cambiar-datos", (req, res) => {
  res.render("dashmodPV", { title: "Modificar Perfil" });
});


export default vendedor; 
*/