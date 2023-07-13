/*
import { Router } from "express";
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const administrador = Router();

administrador.get("/login-admin", (req, res)=>{
    var data = {
        "nombre" : req.user.displayName,
        "id" : req.user.id,
        "contraseña": req.user.password
    };
    let token = jwt.sign(data, process.env.SECRET_KEY, { "expiresIn" : process.env.EXPIRE_TOKEN });

    res.redirect("/Inicio");
});

administrador.get("/inventario", (req, res) => {
  res.render("dashInvent", { title: "Inventario" });
});

administrador.get("/operaciones-recientes", (req, res) => {
  res.render("dashOpeRe", { title: "Operaciones Recientes" });
});

administrador.get("/usuarios", (req, res) => {
  res.render("dashUsuario", { title: "Usuarios" });
});

administrador.get("/modificar-vendedor", (req, res) => {
  res.render("modUsuarioV", { title: "Modificar vendedor" });
})

administrador.get("/contabilidad", (req, res) => {
  res.render("dashCont", { title: "Contabilidad" });

administrador.get("/crear-vendedor", (req, res) => {
    res.render("crearUsV", { title: "Crear nuevo vendedor" });
  })
});

administrador.get("/ventas-diarias", (req, res) => {
  res.render("ventasD", { title: "Ventas recientes" });
});

administrador.get("/reportes-vendedores", (req, res) => {
  res.render("reporUsuV", { title: "Reportes" });
})

administrador.get("/crear-producto", (req, res) => {
  res.render("crearProducto", { title: "Crear Producto" });
})

administrador.get("/contactos", (req, res) => {
  res.render("contactos", { title: "Contactos" });
});

administrador.get("/modificar-producto", (req, res) => {
  res.render("modProducto", { title: "Modificar Producto" });
})

administrador.get("/crear-registro", (req, res) => {
  res.render("crearRegistro", { title: "Crear nuevo registro" });
})

administrador.get("/modificar-contacto", (req, res) => {
  res.render("modContacto", { title: "Modificar Contacto" });
})

administrador.get("/crear-contacto", (req, res) => {
  res.render("crearContacto", { title: "Crear Contacto" });
})

administrador.get("/informes", (req, res) => {
  res.render("informes", { title: "Informes" });
})

administrador.get("/pagos-pendientes", (req, res) => {
  res.render("pagosP", { title: "Pagos Pendientes" });
})

administrador.get("/crear-pago", (req, res) => {
  res.render("crearPagoP", { title: "Crear Pago Pendiente" });
})

administrador.get("/modificar-pago", (req, res) => {
  res.render("modPagoP", { title: "Modificar Pago" });
})

administrador.get("/perfil", (req, res) => {
  res.render("perfilUsA", { title: "Perfil" });
})

administrador.get("/modificar-perfil", (req, res) => {
  res.render("modPerfilUA", { title: "Modificar Perfil" });
})

administrador.get("/otros", (req, res) => {
  res.render("dashOtro", { title: "Otras Opciones" });
});

administrador.get("/calculadora", (req, res) => {
  res.render("calculadora", { title: "Calculadora" });
});

administrador.get("/historial-facturas", (req, res) => {
  res.render("facturas", { title: "Facturas" });
});

administrador.get("/ver-alertas", (req, res) => {
  res.render("dashAlertas", { title: "Ver Alertas" });
})




export default administrador;
*/