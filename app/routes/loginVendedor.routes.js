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

vendedor.get("/realizar-venta", authController.isAuthenticatedvendedor,  (req, res) => {
  res.render("venta", { title: "Vender" });
});

vendedor.get("/menu-vendedor", authController.isAuthenticatedvendedor, (req, res) => {
  res.render("dashInMUV", { title: "Menu del vendedor" });
})

vendedor.get("/facturas", authController.isAuthenticatedvendedor, async(req, res) => {

  let rutaFactura = process.env.API + '/factura'
  const resultFactura = await fetch(rutaFactura)
  const factura = await resultFactura.json();

  res.render("dashUVFacturas", {
     title: "Facturas",
     factura: factura });
});

vendedor.get("/calculadora-sistema", authController.isAuthenticatedvendedor, async (req, res) => {

  let rutaCalculadora = process.env.API + '/historialCalculos'
  const resultCalculadora = await fetch(rutaCalculadora)
  const calculadora = await resultCalculadora.json();

  res.render("dashCalcUV", {
     title: "Calculadora",
     calculadora:calculadora });
});

vendedor.get("/perfil-vendedor", authController.isAuthenticatedvendedor, async (req, res) => {

  let rutaVendedor = process.env.API + '/usuarioVendedor'
  const resultVendedor = await fetch(rutaVendedor)
  const vendedor = await resultVendedor.json();

  res.render("dashPerfilV", {
     title: "Perfil Vendedor",
     vendedor: vendedor });
});

vendedor.get("/cambiar-datos", authController.isAuthenticatedvendedor,  (req, res) => {
  res.render("dashmodPV", { title: "Modificar Perfil" });
});

vendedor.get("/crear-factura", authController.isAuthenticatedvendedor, (req, res) => {
  res.render("dashCrearFactura", {
    title: "Crear Factura"
  });
});

vendedor.post("/saveVenta", async (req, res) => {
  const { fecha, total, cantidad } = req.body;
  let datos = {
    fecha: fecha,
    total: total,
    cantidad, cantidad
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/venta";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        fecha: fecha,
        total: total,
        cantidad, cantidad
      }
      console.log("se ejecuto el put")
    }
    const options = {
      method: metodo,
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.message === "venta añadida exitosamente") {
      console.log("La venta ha sido añadida a la base de datos");
    } else {
      console.log("venta insertada");
    }
  } catch (error) {
    console.log("Error al insertar la venta:", error);
  }

  res.redirect('realizar-venta')

});

export default vendedor; 