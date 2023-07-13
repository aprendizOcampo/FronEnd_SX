import { Router } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fetch from "node-fetch";
import * as authController from '../controllers/authController.js';


dotenv.config();

const administrador = Router();

administrador.get("/", (req, res) => {
  /**var data = {
      "nombre" : req.user.displayName,
      "id" : req.user.id,
      "contraseña": req.user.password
  };**/
  // let token = jwt.sign(data, process.env.SECRET_KEY, { "expiresIn" : process.env.EXPIRE_TOKEN });

  res.redirect("/administrador/menu-inicio");
});

administrador.get("/crear-usuario", authController.isAuthenticated, (req, res) => {
  res.render("crearUsV", { title: "Crear Usuario Vendedor" });
})

administrador.get("/modificar-vendedor", authController.isAuthenticated, (req, res) => {
  res.render("modUsuarioV", { title: "Modificar vendedor" });
})

administrador.get("/contabilidad", authController.isAuthenticated, async (req, res) => {

  let rutaLibroMayor = process.env.API + '/libroMayor'
  const resultLibroMayor = await fetch(rutaLibroMayor)
  const libro = await resultLibroMayor.json();

  res.render("dashCont", {
    title: "Contabilidad",
    libro: libro
  });
})
//cliente
administrador.get("/Clientes", authController.isAuthenticated, async (req, res) => {

  let rutaCliente = process.env.API + '/cliente'
  const resultCliente = await fetch(rutaCliente)
  const cliente = await resultCliente.json();

  res.render("dashCliente", {
    title: "Clientes",
    cliente: cliente
  });
});

administrador.get("/crear-cliente", authController.isAuthenticated, (req, res) => {
  res.render("dashCrearCliente", {
    title: "Crear Cliente"
  });
});

administrador.get("/empresa", authController.isAuthenticated, async (req, res) => {

  let rutaEmpresa = process.env.API + '/empresa'
  const resultEmpresa = await fetch(rutaEmpresa)
  const empresa = await resultEmpresa.json();

  res.render("dashEmpresa", {
    title: "Tu Empresa",
    empresa: empresa
  });
});

administrador.get("/calculadora", authController.isAuthenticated, async (req, res) => {

  let rutaCalculo = process.env.API + '/historialCalculos'
  const resultCalculo = await fetch(rutaCalculo)
  const calculo = await resultCalculo.json();

  res.render("calculadora", {
    title: "Calculadora",
    calculo: calculo
  });
});

administrador.get("/crear-cliente", authController.isAuthenticated, (req, res) => {
  res.render("dashCrearCliente", {
    title: "Crear Cliente"
  });
});

administrador.post("/saveCalculo", async (req, res) => {
  const { calculo } = req.body;
  let datos = {
    calculo: calculo
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/historialCalculos";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        calculo: calculo
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

    if (data.message === "cliente añadido exitosamente") {
      console.log("El cliente ha sido añadido a la base de datos");
    } else {
      console.log("La base de datos no insertó los datos");
    }
  } catch (error) {
    console.log("Error al insertar el cliente:", error);
  }

  res.redirect('Calculadora')

});

administrador.get("/borrarCalculo", async (req, res) => {
  try {
    const id = req.query.id;
    const url = process.env.API + `historialCalculos/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.affectedRows > 0) {
      console.log("Registro borrado");
    }
  } catch (error) {
    console.log("Error al borrar el registro:", error);
  }
  res.redirect('calculadora')
});

administrador.get("/ventas-diarias", authController.isAuthenticated, async (req, res) => {

  let rutaVentas = process.env.API + '/venta'
  const resultVentas = await fetch(rutaVentas)
  const ventas = await resultVentas.json();

  res.render("ventasD", {
    title: "Ventas recientes",
    ventas: ventas
  });
});

administrador.get("/estanteria", authController.isAuthenticated, async (req, res) => {

  let rutaEstanteria = process.env.API + '/estanteria'
  const resultEstanteria = await fetch(rutaEstanteria)
  const estanteria = await resultEstanteria.json();

  res.render("dashEstant", {
    title: "Estanteria",
    estanteria: estanteria
  });
})

administrador.get("/reportes-vendedores", authController.isAuthenticated, (req, res) => {
  res.render("reporUsuV", {
    title: "Reportes"
  });
});

administrador.get("/compra", authController.isAuthenticated, async (req, res) => {

  let rutaCompra = process.env.API + '/compra'
  const resultCompra = await fetch(rutaCompra)
  const compra = await resultCompra.json();

  res.render("dashCompra", {
    title: "Tus Compras",
    compra: compra
  });
})

administrador.get("/crear-compra", authController.isAuthenticated, (req, res) => {
  res.render("dashCrearCompra", { title: "Crear Compra" });
})

administrador.get("/deudor", authController.isAuthenticated, async (req, res) => {

  let rutaDeudor = process.env.API + '/deudores'
  const resultDeudor = await fetch(rutaDeudor)
  const deudor = await resultDeudor.json();

  res.render("dashDeudor", {
    title: "Deudores",
    deudor: deudor
  });
})

administrador.get("/facturas", authController.isAuthenticated, async (req, res) => {

  let rutaFactura = process.env.API + '/factura'
  const resultFactura = await fetch(rutaFactura)
  const factura = await resultFactura.json();

  res.render("facturas", {
    title: "Facturas",
    factura: factura
  });
});

administrador.get("/crear-factura", authController.isAuthenticated, (req, res) => {
  res.render("dashCrearFactura", {
    title: "Crear Factura"
  });
});

administrador.get("/crear-producto", authController.isAuthenticated, (req, res) => {
  res.render("crearProducto", { title: "Crear Producto" });
})

administrador.get("/modificar-producto/:id", authController.isAuthenticated, (req, res) => {
  res.render("modProducto", { title: "Modificar Producto" });
})

administrador.get("/crear-registro", authController.isAuthenticated, (req, res) => {
  res.render("crearRegistro", { title: "Crear nuevo registro" });
})

administrador.get("/modificar-contacto/:id", authController.isAuthenticated, async (req, res) => {

  let rutaContacto = process.env.API + '/proveedor/' + req.params.id
  const resultContacto = await fetch(rutaContacto)
  const contacto = await resultContacto.json();

  res.render("modContacto", { title: "Modificar Contacto", contacto: contacto });

})

administrador.get("/crear-contacto", authController.isAuthenticated, (req, res) => {
  res.render("crearContacto", { title: "Crear Contacto" });
})

administrador.get("/informes", authController.isAuthenticated, (req, res) => {
  res.render("informes", { title: "Informes" });
})

administrador.get("/crear-pago", authController.isAuthenticated, (req, res) => {
  res.render("crearPagoP", { title: "Crear Pago Pendiente" });
})

administrador.get("/modificar-pago", authController.isAuthenticated, (req, res) => {
  res.render("modPagoP", { title: "Modificar Pago" });
})

administrador.get("/perfil", authController.isAuthenticated, (req, res) => {
  res.render("perfilUsA", { title: "Perfil" });
})

administrador.get("/modificar-perfil", authController.isAuthenticated, (req, res) => {
  res.render("modPerfilUA", { title: "Modificar Perfil" });
})

administrador.get("/otros", authController.isAuthenticated, (req, res) => {
  res.render("dashOtro", { title: "Otras Opciones" });
});

administrador.get("/menu-inicio", authController.isAuthenticated, (req, res) => {
  res.render("dashMInicio", { title: "Menu Principal" });
})


//crud de los contactos

//get contacto
administrador.get("/contactos", authController.isAuthenticated, async (req, res) => {

  let rutaContacto = process.env.API + '/proveedor'
  const resultContacto = await fetch(rutaContacto)
  const contacto = await resultContacto.json();

  res.render("contactos", {
    title: "Contactos",
    contacto: contacto
  });
});

//post y put contacto
administrador.post("/saveContacto", async (req, res) => {
  const { nombre, email, telefono, direccion, web } = req.body;
  let datos = {
    nombre: nombre,
    email: email,
    telefono: telefono,
    direccion: direccion,
    web: web
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/proveedor";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        id: id,
        nombre: nombre,
        email: email,
        tele: telefono,
        direccion: direccion,
        web: web
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

    if (data.message === "proveedor añadido exitosamente") {
      console.log("El contacto ha sido añadido a la base de datos");
    } else {
      console.log("La base de datos no insertó los datos");
    }
  } catch (error) {
    console.log("Error al insertar el contacto:", error);
  }

  res.redirect('contactos')

});

//delete contacto

administrador.get("/borrar", async (req, res) => {
  try {
    const id = req.query.id;
    const url = process.env.API + `/proveedor/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.affectedRows > 0) {
      console.log("Registro borrado");
    }
  } catch (error) {
    console.log("Error al borrar el registro:", error);
  }
  res.redirect('contactos')
});

//crud de los productos

//get productos

administrador.get("/inventario", authController.isAuthenticated, async (req, res) => {
  let rutaProductos = process.env.API + '/productos'
  const resultProductos = await fetch(rutaProductos)
  const productos = await resultProductos.json();

  res.render("dashInvent", {
    title: "Inventario",
    productos: productos
  });
});

//post y put productos

administrador.post("/saveProducto", async (req, res) => {
  const { nombre, cantidad, precio } = req.body;
  let datos = {
    nombre: nombre,
    cantidad: cantidad,
    precio: precio
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/productos";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
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

    if (data.message === "producto añadido exitosamente") {
      console.log("El producto ha sido añadido a la base de datos");
    } else {
      console.log("La base de datos no insertó los datos");
    }
  } catch (error) {
    console.log("Error al insertar el producto:", error);
  }

  res.redirect('inventario')

});

//delete contacto

administrador.get("/borrarProducto", async (req, res) => {
  try {
    const id = req.query.id;
    const url = process.env.API + `/productos/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.affectedRows > 0) {
      console.log("Registro borrado");
    }
  } catch (error) {
    console.log("Error al borrar el registro:", error);
  }
  res.redirect('inventario')
});

//crud usuario vendedor


//get usuario vendedor

administrador.get("/usuarios", authController.isAuthenticated, async (req, res) => {

  let rutaUsuario = process.env.API + '/usuarioVendedor'
  const resultUsuario = await fetch(rutaUsuario)
  const usuario = await resultUsuario.json();

  res.render("dashUsuario", {
    title: "Usuarios",
    usuario: usuario
  });
});


//crear usuario vendedor

administrador.post("/saveVendedor", async (req, res) => {
  const { usuario, nombres, apellidos, password } = req.body;
  let datos = {
    usuario: usuario,
    nombres: nombres,
    apellidos: apellidos,
    password: password
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/usuariovendedor";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        id: id,
        usuario: usuario,
        nombres: nombres,
        apellidos: apellidos,
        password: password
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

    if (data.message === "usuario creado exitosamente") {
      console.log("El usuario ha sido añadido a la base de datos");
    } else {
      console.log("La base de datos no insertó el usuario");
    }
  } catch (error) {
    console.log("Error al insertar el usuario:", error);
  }

  res.redirect('usuarios')

});

//delete usuario vendedor

administrador.get("/borrarUsuario", async (req, res) => {
  try {
    const id = req.query.id;
    const url = process.env.API + `/usuariovendedor/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.affectedRows > 0) {
      console.log("usuario borrado");
    }
  } catch (error) {
    console.log("Error al borrar el usuario:", error);
  }
  res.redirect('usuarios')
});

//crud cliente

//post y put

administrador.post("/saveCliente", async (req, res) => {
  const { cedula, nombres, apellidos, direccion } = req.body;
  let datos = {
    cedula: cedula,
    nombres: nombres,
    apellidos: apellidos,
    direccion: direccion
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/cliente";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion
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

    if (data.message === "cliente añadido exitosamente") {
      console.log("El cliente ha sido añadido a la base de datos");
    } else {
      console.log("La base de datos no insertó los datos");
    }
  } catch (error) {
    console.log("Error al insertar el cliente:", error);
  }

  res.redirect('Clientes')

});

//delete

administrador.get("/borrarCliente", async (req, res) => {
  try {
    const id = req.query.id;
    const url = process.env.API + `/cliente/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.affectedRows > 0) {
      console.log("Registro borrado");
    }
  } catch (error) {
    console.log("Error al borrar el registro:", error);
  }
  res.redirect('Clientes')
});

//deuda crud

//get deuda
administrador.get("/pagos-pendientes", authController.isAuthenticated, async (req, res) => {

  let rutaPago = process.env.API + '/deuda'
  const resultPago = await fetch(rutaPago)
  const pago = await resultPago.json();

  res.render("pagosP", {
    title: "Pagos Pendientes",
    pago: pago
  });
})


//post y put deuda


administrador.post("/saveDeuda", async (req, res) => {
  const { valor_deuda, plazo_deuda, fecha } = req.body;
  let datos = {
    valor_deuda: valor_deuda,
    plazo_deuda: plazo_deuda,
    fecha: fecha
  }
  try {
    let metodo = 'post';
    const url = process.env.API + "/deuda";
    if (req.body.id) {
      const id = req.body.id;
      metodo = "put"
      datos = {
        valor_deuda: valor_deuda,
        plazo_deuda: plazo_deuda,
        fecha: fecha
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

    if (data.message === "deuda añadido exitosamente") {
      console.log("La deuda ha sido añadido a la base de datos");
    } else {
      console.log("La base de datos no insertó los datos");
    }
  } catch (error) {
    console.log("Error al insertar la deuda:", error);
  }

  res.redirect('pagos-pendientes')

});


//delete deuda
administrador.get("/borrarPago", async (req, res) => {
  try {
    const id = req.query.id;
    const url = process.env.API + `/deuda/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();

    if (data.affectedRows > 0) {
      console.log("Registro borrado");
    }
  } catch (error) {
    console.log("Error al borrar el registro:", error);
  }
  res.redirect('Pagos Pendientes')
});


export default administrador;