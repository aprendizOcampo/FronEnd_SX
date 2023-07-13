import { Router } from "express";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import * as authController from "../controllers/authController.js"
import fetch from "node-fetch";

dotenv.config();

const vendedor = Router();

vendedor.get("/login", (req, res)=>{
    /*var data ={
        "nombre" : req.user.displayName,
        "id" : req.user.id,
        "email": req.user.emails[0].value
    };*/
    //let token = jwt.sign(data, process.env.SECRET_KEY, { "expiresIn" : process.env.EXPIRE_TOKEN });


    res.redirect("/vendedor/menu-vendedor")
});

vendedor.get("/login-vendedor", (req, res) => {
  res.render("loginEstandar", { title: "login del vendedor", alert:true });
});

vendedor.get("/realizar-venta", authController.isAuthenticated,  (req, res) => {
  res.render("venta", { title: "Vender" });
});

vendedor.get("/menu-vendedor", authController.isAuthenticated, (req, res) => {
  res.render("dashInMUV", { title: "Menu del vendedor" });
})

vendedor.get("/facturas", authController.isAuthenticated, async(req, res) => {

  let rutaFactura = process.env.API + '/factura'
  const resultFactura = await fetch(rutaFactura)
  const factura = await resultFactura.json();

  res.render("dashUVFacturas", {
     title: "Facturas",
     factura: factura });
});

vendedor.get("/calculadora-sistema", authController.isAuthenticated, async (req, res) => {

  let rutaCalculadora = process.env.API + '/historialCalculos'
  const resultCalculadora = await fetch(rutaCalculadora)
  const calculadora = await resultCalculadora.json();

  res.render("dashCalcUV", {
     title: "Calculadora",
     calculadora:calculadora });
});

vendedor.get("/perfil-vendedor", authController.isAuthenticated, async (req, res) => {

  let rutaVendedor = process.env.API + '/usuarioVendedor'
  const resultVendedor = await fetch(rutaVendedor)
  const vendedor = await resultVendedor.json();

  res.render("dashPerfilV", {
     title: "Perfil Vendedor",
     vendedor: vendedor });
});

vendedor.get("/cambiar-datos", authController.isAuthenticated,  (req, res) => {
  res.render("dashmodPV", { title: "Modificar Perfil" });
});


export default vendedor; 