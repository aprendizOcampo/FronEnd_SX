import { Router } from "express";
import * as authController from '../controllers/authController.js';
import router from "./router.js";
const home = Router();

//rutas a las que se puede acceder por botones desde el home
home.get("/", (req, res) => {
  res.render("home", {
    "title": "Bienvenido"
  });

  //rutas de acceso para los usuarios

  home.get('/inicio', authController.isAuthenticated, (req, res) => {
    res.render('dashMInicio', {
      nombre: req.nombre,
      title: "Inicio"
    });
  });
  home.get("/login-admin", (req, res) => {
    res.render("loginAdmin", {
      title: "Ingresar como administrador",
      alert: false
    });
  });
  home.get("/login-vendedor", (req, res) => {
    res.render("loginEstandar", {
      title: "Ingresar como vendedor"
    });
  });
  home.get("/crear-usuario-admin", (req, res) => {
    res.render("crearUsA", {
      title: "Crear usuario administrador"
    });
  });
  home.post("/crear-usuario-admin", (req, res) => {
    res.render("crearUsA");
  });
});

//rutas a las que se les puede acceder despues del log in
//solo se puede acceder a ellas escribiendo la ruta o por el menu
//pero para acceder al menu hay que escribir alguna ruta, log in en proceso

//ruta solo para el admin ---------------------------------------------------------------------------
home.get("/inventario", (req, res) => {
  res.render("dashInvent", {
    title: "Inventario"
  });
});
home.get("/operaciones-recientes", (req, res) => {
  res.render("dashOpeRe", {
    title: "Operaciones Recientes"
  });
});
home.get("/usuarios", (req, res) => {
  res.render("dashUsuario", {
    title: "Usuarios"
  });
});
home.get("/modificar-vendedor", (req, res) => {
  res.render("modUsuarioV", {
    title: "Modificar vendedor"
  });
});
home.get("/contabilidad", (req, res) => {
  res.render("dashCont", {
    title: "Contabilidad"
  });
  home.get("/crear-vendedor", (req, res) => {
    res.render("crearUsV", {
      title: "Crear nuevo vendedor"
    });
  });
});
home.get("/ventas-diarias", (req, res) => {
  res.render("ventasD", {
    title: "Ventas recientes"
  });
});
home.get("/reportes-vendedores", (req, res) => {
  res.render("reporUsuV", {
    title: "Reportes"
  });
});
home.get("/crear-producto", (req, res) => {
  res.render("crearProducto", {
    title: "Crear Producto"
  });
});
home.get("/contactos", (req, res) => {
  res.render("contactos", {
    title: "Contactos"
  });
});
home.get("/modificar-producto", (req, res) => {
  res.render("modProducto", {
    title: "Modificar Producto"
  });
});
home.get("/crear-registro", (req, res) => {
  res.render("crearRegistro", {
    title: "Crear nuevo registro"
  });
});
home.get("/modificar-contacto", (req, res) => {
  res.render("modContacto", {
    title: "Modificar Contacto"
  });
});
home.get("/crear-contacto", (req, res) => {
  res.render("crearContacto", {
    title: "Crear Contacto"
  });
});
home.get("/informes", (req, res) => {
  res.render("informes", {
    title: "Informes"
  });
});
home.get("/pagos-pendientes", (req, res) => {
  res.render("pagosP", {
    title: "Pagos Pendientes"
  });
});
home.get("/crear-pago", (req, res) => {
  res.render("crearPagoP", {
    title: "Crear Pago Pendiente"
  });
});
home.get("/modificar-pago", (req, res) => {
  res.render("modPagoP", {
    title: "Modificar Pago"
  });
});
home.get("/perfil", (req, res) => {
  res.render("perfilUsA", {
    title: "Perfil"
  });
});
home.get("/modificar-perfil", (req, res) => {
  res.render("modPerfilUA", {
    title: "Modificar Perfil"
  });
});
home.get("/otros", (req, res) => {
  res.render("dashOtro", {
    title: "Otras Opciones"
  });
});
home.get("/Inicio", (req, res) => {
  res.render("dashMInicio", {
    title: "Inicio"
  });
});
home.get("/calculadora", (req, res) => {
  res.render("calculadora", {
    title: "Calculadora"
  });
});
home.get("/historial-facturas", (req, res) => {
  res.render("facturas", {
    title: "Facturas"
  });
});
home.get("/ver-alertas", (req, res) => {
  res.render("dashAlertas", {
    title: "Ver Alertas"
  });
});
home.get("/Clientes", (req, res) => {
  res.render("dashCliente", {
    title: "Clientes"
  });
});
home.get("/crear-cliente", (req, res) => {
  res.render("dashCrearCli", {
    title: "Crear nuevo cliente"
  });
});
home.get("/modificar-cliente", (req, res) => {
  res.render("dashModCli", {
    title: "Modificar Cliente"
  });
});
home.get("/estanteria", (req, res) => {
  res.render("dashEstant", {
    title: "Estanterías"
  });
});
home.get("/crear-estanteria", (req, res) => {
  res.render("dashCrearEst", {
    title: "Crear Estantería"
  });
});
home.get("/modificar-estanteria", (req, res) => {
  res.render("dashModEst", {
    title: "Modificar Estantería"
  });
});

//Esta ruta le pertenece unicamente al usuario vendedor (estandar) ------------------------------------

home.get("/realizar-venta", (req, res) => {
  res.render("venta", {
    title: "Vender"
  });
});
home.get("/menu-vendedor", (req, res) => {
  res.render("dashInMUV", {
    title: "Menu del vendedor"
  });
});
home.get("/facturas", (req, res) => {
  res.render("dashUVFacturas", {
    title: "Facturas"
  });
});
home.get("/calculadora-sistema", (req, res) => {
  res.render("dashCalcUV", {
    title: "Calculadora"
  });
});
home.get("/perfil-vendedor", (req, res) => {
  res.render("dashPerfilV", {
    title: "Perfil Vendedor"
  });
});
home.get("/cambiar-datos", (req, res) => {
  res.render("dashmodPV", {
    title: "Modificar Perfil"
  });
});

//Esta ruta es solo para ver las plantillas de los PDF ----------------------------------------------
home.get("/factura-PDF", (req, res) => {
  res.render("facturaPDF", {
    title: "Factura PDF"
  });
});
home.get("/Reporte-Usuarios-PDF", (req, res) => {
  res.render("reportePDF", {
    title: "Reporte Usuarios PDF"
  });
});
home.get("/contabilidad-PDF", (req, res) => {
  res.render("contabilidadPDF", {
    title: "Contabilidad PDF"
  });
});

// router para metodos del controler

home.post('/register', authController.register);
home.post('/login', authController.login);
home.get('/logout', authController.logout);
home.post('/');
export default home;