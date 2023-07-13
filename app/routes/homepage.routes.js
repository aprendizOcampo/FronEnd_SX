import { Router, response } from "express";
import * as authController from '../controllers/authController.js';
import fetch from "node-fetch";

const home = Router();

//rutas a las que se puede acceder por botones desde el home
home.get("/", (req, res) => {res.render("home", {
    "title": "Bienvenido",
  });

  //si se quita se daña, no tocar
  home.get('/bienvenido', (req, res) => {
    res.render('home', { title: "Inicio" });
  });
});

/** 
//ruta solo para el admin ---------------------------------------------------------------------------
home.get("/inventario", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/productos');
  const data = await response.json();
  res.render("dashInvent", {
    title: "Inventario",
    "element": data
  }
  );

  home.get("/borrar", async (req, res)=>{
    const id = req.query.id;
    const url = "http://localhost:7000/api/sinvex/productos/:id " + id;
    const option = {
        method : "delete",
        headers : {
            'Content-Type':'application/json'
        }
    }

    const result = await fetch(url, option)
    .then(response=>response.json())
    .then(data=>{
        if(data.affectedRows > 0){
            console.log("registro borrado");
        }
    })
    res.redirect("/inventario")
})

});

home.get("/usuarios", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/usuarioVendedor');
  const data = await response.json();

  res.render("dashUsuario", {
    title: "Usuarios",
    "element": data
  });

  home.get("/borrar", async (req, res)=>{
    const id = req.query.id;
    const url = "http://localhost:7000/api/sinvex/usuarioVendedor"+id;
    const option = {
        method : "delete",
        headers : {
            'Content-Type':'application/json'
        }
    }

    const result = await fetch(url, option)
    .then(response=>response.json())
    .then(data=>{
        if(data.affectedRows > 0){
            console.log("registro borrado");
        }
    })
    res.redirect("/usuarios")
})
});

home.get("/modificar-vendedor", (req, res) => {
  res.render("modUsuarioV", { title: "Modificar vendedor" });
})

home.get("/contabilidad", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/libroMayor');
  const data = await response.json();

  res.render("dashCont", {
    title: "Contabilidad",
    "element": data
  });

  home.get("/crear-vendedor", (req, res) => {
    res.render("crearUsV", { title: "Crear nuevo vendedor" });
  })
});

home.get("/ventas-diarias", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/entrada');
  const data = await response.json();

  res.render("ventasD", {
    title: "Ventas recientes",
    "element": data
  });
});

home.get("/reportes-vendedores", (req, res) => {
  res.render("reporUsuV", { title: "Reportes" });
})



home.get("/crear-registro", (req, res) => {
  res.render("crearRegistro", { title: "Crear nuevo registro" });
})

home.get("/informes", (req, res) => {
  res.render("informes", { title: "Informes" });
})

home.get("/pagos-pendientes", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/acreedor');
  const data = await response.json();

  res.render("pagosP", {
    title: "Pagos Pendientes",
    "element": data
  });

  home.get("/borrar", async (req, res)=>{
    const id = req.query.id;
    const url = "http://localhost:7000/api/sinvex/acreedor"+id;
    const option = {
        method : "delete",
        headers : {
            'Content-Type':'application/json'
        }
    }

    const result = await fetch(url, option)
    .then(response=>response.json())
    .then(data=>{
        if(data.affectedRows > 0){
            console.log("registro borrado");
        }
    })
    res.redirect("/pagos-pendientes")
})
})

home.get("/crear-pago", (req, res) => {
  res.render("crearPagoP", { title: "Crear Pago Pendiente" });
})

home.get("/modificar-pago", (req, res) => {
  res.render("modPagoP", { title: "Modificar Pago" });
})

home.get("/perfil", (req, res) => {
  res.render("perfilUsA", { title: "Perfil" });
})

home.get("/modificar-perfil", (req, res) => {
  res.render("modPerfilUA", { title: "Modificar Perfil" });
})

home.get("/otros", (req, res) => {
  res.render("dashOtro", { title: "Otras Opciones" });
});

home.get("/Inicio", (req, res) => {
  res.render("dashMInicio", { title: "Inicio" });
});

home.get("/calculadora", (req, res) => {
  res.render("calculadora", { title: "Calculadora" });
});

home.get("/historial-facturas", (req, res) => {
  res.render("facturas", { title: "Facturas" });
});

home.get("/ver-alertas", (req, res) => {
  res.render("dashAlertas", { title: "Ver Alertas" });
})

home.get("/Clientes", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/cliente');
  const data = await response.json();

  res.render("dashCliente", {
    title: "Clientes",
    "element": data
  });

  home.get("/borrar", async (req, res)=>{
    const id = req.query.id;
    const url = "http://localhost:7000/api/sinvex/cliente"+id;
    const option = {
        method : "delete",
        headers : {
            'Content-Type':'application/json'
        }
    }

    const result = await fetch(url, option)
    .then(response=>response.json())
    .then(data=>{
        if(data.affectedRows > 0){
            console.log("registro borrado");
        }
    })
    res.redirect("/Clientes")
})
});

home.get("/crear-cliente", (req, res) => {
  res.render("dashCrearCli", { title: "Crear nuevo cliente" });
});

home.get("/modificar-cliente", (req, res) => {
  res.render("dashModCli", { title: "Modificar Cliente" });
});

home.get("/estanteria", async (req, res) => {
  const response = await fetch('http://localhost:7000/api/sinvex/estanteria');
  const data = await response.json();

  res.render("dashEstant", {
    title: "Estanterías",
    "element": data
  });

  home.get("/borrar", async (req, res)=>{
    const id = req.query.id;
    const url = "http://localhost:7000/api/sinvex/estanteria"+id;
    const option = {
        method : "delete",
        headers : {
            'Content-Type':'application/json'
        }
    }

    const result = await fetch(url, option)
    .then(response=>response.json())
    .then(data=>{
        if(data.affectedRows > 0){
            console.log("registro borrado");
        }
    })
    res.redirect("/estanteria")
})
});

home.get("/crear-estanteria", (req, res) => {
  res.render("dashCrearEst", { title: "Crear Estantería" });
});

home.get("/modificar-estanteria", (req, res) => {
  res.render("dashModEst", { title: "Modificar Estantería" });
});

//Esta ruta le pertenece unicamente al usuario vendedor (estandar) ------------------------------------

home.get("/realizar-venta", (req, res) => {
  res.render("venta", { title: "Vender" });
});

home.get("/menu-vendedor", (req, res) => {
  res.render("dashInMUV", { title: "Menu del vendedor" });
})

home.get("/facturas", (req, res) => {
  res.render("dashUVFacturas", { title: "Facturas" });
});

home.get("/calculadora-sistema", (req, res) => {
  res.render("dashCalcUV", { title: "Calculadora" });
});

home.get("/perfil-vendedor", (req, res) => {
  res.render("dashPerfilV", { title: "Perfil Vendedor", });
});

home.get("/cambiar-datos", (req, res) => {
  res.render("dashmodPV", { title: "Modificar Perfil" });
});

//Esta ruta es solo para ver las plantillas de los PDF ----------------------------------------------
home.get("/factura-PDF", (req, res) => {
  res.render("facturaPDF", { title: "Factura PDF" });
})

home.get("/Reporte-Usuarios-PDF", (req, res) => {
  res.render("reportePDF", { title: "Reporte Usuarios PDF" });
})

home.get("/contabilidad-PDF", (req, res) => {
  res.render("contabilidadPDF", { title: "Contabilidad PDF" });
})
*/
// router para metodos del controler

home.post('/register', authController.register);
home.post('/login', authController.login);
home.get('/logout', authController.logout);

home.post('/');
export default home;