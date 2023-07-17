"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var authController = _interopRequireWildcard(require("../controllers/authController.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
_dotenv["default"].config();
var administrador = (0, _express.Router)();
administrador.get("/", function (req, res) {
  /**var data = {
      "nombre" : req.user.displayName,
      "id" : req.user.id,
      "contraseña": req.user.password
  };**/
  // let token = jwt.sign(data, process.env.SECRET_KEY, { "expiresIn" : process.env.EXPIRE_TOKEN });

  res.redirect("/administrador/menu-inicio");
});
administrador.get("/crear-estanteria", function (req, res) {
  res.render("dashCrearEst", {
    title: "Crear Estantería"
  });
});
administrador.get("/crear-usuario", authController.isAuthenticated, function (req, res) {
  res.render("crearUsV", {
    title: "Crear Usuario Vendedor"
  });
});
administrador.get("/modificar-vendedor", authController.isAuthenticated, function (req, res) {
  res.render("modUsuarioV", {
    title: "Modificar vendedor"
  });
});

//cliente
administrador.get("/Clientes", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var rutaCliente, resultCliente, cliente;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          rutaCliente = process.env.API + '/cliente';
          _context.next = 3;
          return (0, _nodeFetch["default"])(rutaCliente);
        case 3:
          resultCliente = _context.sent;
          _context.next = 6;
          return resultCliente.json();
        case 6:
          cliente = _context.sent;
          res.render("dashCliente", {
            title: "Clientes",
            cliente: cliente
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
administrador.get("/crear-cliente", authController.isAuthenticated, function (req, res) {
  res.render("dashCrearCliente", {
    title: "Crear Cliente"
  });
});
administrador.get("/calculadora", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var rutaCalculo, resultCalculo, calculo;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          rutaCalculo = process.env.API + '/historialCalculos';
          _context2.next = 3;
          return (0, _nodeFetch["default"])(rutaCalculo);
        case 3:
          resultCalculo = _context2.sent;
          _context2.next = 6;
          return resultCalculo.json();
        case 6:
          calculo = _context2.sent;
          res.render("calculadora", {
            title: "Calculadora",
            calculo: calculo
          });
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
administrador.get("/crear-cliente", authController.isAuthenticated, function (req, res) {
  res.render("dashCrearCliente", {
    title: "Crear Cliente"
  });
});
administrador.get("/ventas-diarias", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var rutaVentas, resultVentas, ventas;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          rutaVentas = process.env.API + '/venta';
          _context3.next = 3;
          return (0, _nodeFetch["default"])(rutaVentas);
        case 3:
          resultVentas = _context3.sent;
          _context3.next = 6;
          return resultVentas.json();
        case 6:
          ventas = _context3.sent;
          res.render("ventasD", {
            title: "Ventas recientes",
            ventas: ventas
          });
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
administrador.get("/reportes-vendedores", authController.isAuthenticated, function (req, res) {
  res.render("reporUsuV", {
    title: "Reportes"
  });
});
administrador.get("/crear-compra", authController.isAuthenticated, function (req, res) {
  res.render("dashCrearCompra", {
    title: "Crear Compra"
  });
});
administrador.get("/perdidas", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var rutaPerdida, resultPerdida, perdida;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          rutaPerdida = process.env.API + '/perdidas';
          _context4.next = 3;
          return (0, _nodeFetch["default"])(rutaPerdida);
        case 3:
          resultPerdida = _context4.sent;
          _context4.next = 6;
          return resultPerdida.json();
        case 6:
          perdida = _context4.sent;
          res.render("dashPerdida", {
            title: "Perdidas",
            perdida: perdida
          });
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
administrador.get("/facturas", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var rutaFactura, resultFactura, factura;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          rutaFactura = process.env.API + '/factura';
          _context5.next = 3;
          return (0, _nodeFetch["default"])(rutaFactura);
        case 3:
          resultFactura = _context5.sent;
          _context5.next = 6;
          return resultFactura.json();
        case 6:
          factura = _context5.sent;
          res.render("facturas", {
            title: "Facturas",
            factura: factura
          });
        case 8:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
administrador.get("/crear-factura", authController.isAuthenticated, function (req, res) {
  res.render("dashCrearFactura", {
    title: "Crear Factura"
  });
});
administrador.get("/crear-producto", authController.isAuthenticated, function (req, res) {
  res.render("crearProducto", {
    title: "Crear Producto"
  });
});
administrador.get("/modificar-producto/:id", authController.isAuthenticated, function (req, res) {
  res.render("modProducto", {
    title: "Modificar Producto"
  });
});
administrador.get("/crear-registro", authController.isAuthenticated, function (req, res) {
  res.render("crearRegistro", {
    title: "Crear nuevo registro"
  });
});
administrador.get("/modificar-contacto/:id", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var rutaContacto, resultContacto, contacto;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          rutaContacto = process.env.API + '/proveedor/' + req.params.id;
          _context6.next = 3;
          return (0, _nodeFetch["default"])(rutaContacto);
        case 3:
          resultContacto = _context6.sent;
          _context6.next = 6;
          return resultContacto.json();
        case 6:
          contacto = _context6.sent;
          res.render("modContacto", {
            title: "Modificar Contacto",
            contacto: contacto
          });
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
administrador.get("/crear-contacto", authController.isAuthenticated, function (req, res) {
  res.render("crearContacto", {
    title: "Crear Contacto"
  });
});
administrador.get("/crear-perdida", authController.isAuthenticated, function (req, res) {
  res.render("dashCrearPerdida", {
    title: "Crear Perdida"
  });
});
administrador.get("/informes", authController.isAuthenticated, function (req, res) {
  res.render("informes", {
    title: "Informes"
  });
});
administrador.get("/crear-pago", authController.isAuthenticated, function (req, res) {
  res.render("crearPagoP", {
    title: "Crear Pago Pendiente"
  });
});
administrador.get("/modificar-pago", authController.isAuthenticated, function (req, res) {
  res.render("modPagoP", {
    title: "Modificar Pago"
  });
});
administrador.get("/perfil", authController.isAuthenticated, function (req, res) {
  res.render("perfilUsA", {
    title: "Perfil"
  });
});
administrador.get("/modificar-perfil", authController.isAuthenticated, function (req, res) {
  res.render("modPerfilUA", {
    title: "Modificar Perfil"
  });
});
administrador.get("/otros", authController.isAuthenticated, function (req, res) {
  res.render("dashOtro", {
    title: "Otras Opciones"
  });
});
administrador.get("/menu-inicio", authController.isAuthenticated, function (req, res) {
  res.render("dashMInicio", {
    title: "Menu Principal"
  });
});

//crud de los contactos

//get contacto
administrador.get("/contactos", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var rutaContacto, resultContacto, contacto;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          rutaContacto = process.env.API + '/proveedor';
          _context7.next = 3;
          return (0, _nodeFetch["default"])(rutaContacto);
        case 3:
          resultContacto = _context7.sent;
          _context7.next = 6;
          return resultContacto.json();
        case 6:
          contacto = _context7.sent;
          res.render("contactos", {
            title: "Contactos",
            contacto: contacto
          });
        case 8:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());

//post y put contacto
administrador.post("/saveContacto", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body, nombre, email, telefono, direccion, web, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, email = _req$body.email, telefono = _req$body.telefono, direccion = _req$body.direccion, web = _req$body.web;
          datos = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            direccion: direccion,
            web: web
          };
          _context8.prev = 2;
          metodo = 'post';
          url = process.env.API + "/proveedor";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              id: id,
              nombre: nombre,
              email: email,
              tele: telefono,
              direccion: direccion,
              web: web
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context8.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context8.sent;
          _context8.next = 12;
          return response.json();
        case 12:
          data = _context8.sent;
          if (data.message === "contacto añadido exitosamente") {
            console.log("El contacto ha sido añadido a la base de datos");
          } else {
            console.log("contacto insertado");
          }
          _context8.next = 19;
          break;
        case 16:
          _context8.prev = 16;
          _context8.t0 = _context8["catch"](2);
          console.log("Error al insertar el contacto:", _context8.t0);
        case 19:
          res.redirect('contactos');
        case 20:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 16]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());

//delete contacto

administrador.get("/borrar", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          id = req.query.id;
          url = process.env.API + "/proveedor/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context9.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context9.sent;
          _context9.next = 9;
          return response.json();
        case 9:
          data = _context9.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context9.next = 16;
          break;
        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          console.log("Error al borrar el registro:", _context9.t0);
        case 16:
          res.redirect('contactos');
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 13]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());

//crud de los productos

//get productos

administrador.get("/inventario", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var rutaProductos, resultProductos, productos;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          rutaProductos = process.env.API + '/productos';
          _context10.next = 3;
          return (0, _nodeFetch["default"])(rutaProductos);
        case 3:
          resultProductos = _context10.sent;
          _context10.next = 6;
          return resultProductos.json();
        case 6:
          productos = _context10.sent;
          res.render("dashInvent", {
            title: "Inventario",
            productos: productos
          });
        case 8:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}());

//post y put productos

administrador.post("/saveProducto", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body2, nombre, cantidad, precio, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$body2 = req.body, nombre = _req$body2.nombre, cantidad = _req$body2.cantidad, precio = _req$body2.precio;
          datos = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
          };
          _context11.prev = 2;
          metodo = 'post';
          url = process.env.API + "/productos";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              id: id,
              nombre: nombre,
              cantidad: cantidad,
              precio: precio
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context11.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context11.sent;
          _context11.next = 12;
          return response.json();
        case 12:
          data = _context11.sent;
          if (data.message === "producto añadido exitosamente") {
            console.log("El producto ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context11.next = 19;
          break;
        case 16:
          _context11.prev = 16;
          _context11.t0 = _context11["catch"](2);
          console.log("Error al insertar el producto:", _context11.t0);
        case 19:
          res.redirect('inventario');
        case 20:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 16]]);
  }));
  return function (_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}());

//delete contacto

administrador.get("/borrarProducto", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          id = req.query.id;
          url = process.env.API + "/productos/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context12.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context12.sent;
          _context12.next = 9;
          return response.json();
        case 9:
          data = _context12.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context12.next = 16;
          break;
        case 13:
          _context12.prev = 13;
          _context12.t0 = _context12["catch"](0);
          console.log("Error al borrar el registro:", _context12.t0);
        case 16:
          res.redirect('inventario');
        case 17:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 13]]);
  }));
  return function (_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}());

//crud usuario vendedor

//get usuario vendedor

administrador.get("/usuarios", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var rutaUsuario, resultUsuario, usuario;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          rutaUsuario = process.env.API + '/usuarioVendedor';
          _context13.next = 3;
          return (0, _nodeFetch["default"])(rutaUsuario);
        case 3:
          resultUsuario = _context13.sent;
          _context13.next = 6;
          return resultUsuario.json();
        case 6:
          usuario = _context13.sent;
          res.render("dashUsuario", {
            title: "Usuarios",
            usuario: usuario
          });
        case 8:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function (_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}());

//crear usuario vendedor

administrador.post("/saveVendedor", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$body3, usuario, nombres, apellidos, password, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _req$body3 = req.body, usuario = _req$body3.usuario, nombres = _req$body3.nombres, apellidos = _req$body3.apellidos, password = _req$body3.password;
          datos = {
            usuario: usuario,
            nombres: nombres,
            apellidos: apellidos,
            password: password
          };
          _context14.prev = 2;
          metodo = 'post';
          url = process.env.API + "/usuariovendedor";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              id: id,
              usuario: usuario,
              nombres: nombres,
              apellidos: apellidos,
              password: password
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context14.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context14.sent;
          _context14.next = 12;
          return response.json();
        case 12:
          data = _context14.sent;
          if (data.message === "usuario creado exitosamente") {
            console.log("El usuario ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó el usuario");
          }
          _context14.next = 19;
          break;
        case 16:
          _context14.prev = 16;
          _context14.t0 = _context14["catch"](2);
          console.log("Error al insertar el usuario:", _context14.t0);
        case 19:
          res.redirect('usuarios');
        case 20:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 16]]);
  }));
  return function (_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}());

//delete usuario vendedor

administrador.get("/borrarUsuario", /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.query.id;
          url = process.env.API + "/usuariovendedor/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context15.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context15.sent;
          _context15.next = 9;
          return response.json();
        case 9:
          data = _context15.sent;
          if (data.affectedRows > 0) {
            console.log("usuario borrado");
          }
          _context15.next = 16;
          break;
        case 13:
          _context15.prev = 13;
          _context15.t0 = _context15["catch"](0);
          console.log("Error al borrar el usuario:", _context15.t0);
        case 16:
          res.redirect('usuarios');
        case 17:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 13]]);
  }));
  return function (_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}());

//crud cliente

//post y put

administrador.post("/saveCliente", /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var _req$body4, cedula, nombres, apellidos, direccion, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _req$body4 = req.body, cedula = _req$body4.cedula, nombres = _req$body4.nombres, apellidos = _req$body4.apellidos, direccion = _req$body4.direccion;
          datos = {
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion
          };
          _context16.prev = 2;
          metodo = 'post';
          url = process.env.API + "/cliente";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              cedula: cedula,
              nombres: nombres,
              apellidos: apellidos,
              direccion: direccion
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context16.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context16.sent;
          _context16.next = 12;
          return response.json();
        case 12:
          data = _context16.sent;
          if (data.message === "cliente añadido exitosamente") {
            console.log("El cliente ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context16.next = 19;
          break;
        case 16:
          _context16.prev = 16;
          _context16.t0 = _context16["catch"](2);
          console.log("Error al insertar el cliente:", _context16.t0);
        case 19:
          res.redirect('Clientes');
        case 20:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[2, 16]]);
  }));
  return function (_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}());

//delete

administrador.get("/borrarCliente", /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          id = req.query.id;
          url = process.env.API + "/cliente/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context17.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context17.sent;
          _context17.next = 9;
          return response.json();
        case 9:
          data = _context17.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context17.next = 16;
          break;
        case 13:
          _context17.prev = 13;
          _context17.t0 = _context17["catch"](0);
          console.log("Error al borrar el registro:", _context17.t0);
        case 16:
          res.redirect('Clientes');
        case 17:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 13]]);
  }));
  return function (_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}());

//deuda crud

//get deuda
administrador.get("/pagos-pendientes", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var rutaPago, resultPago, pago;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          rutaPago = process.env.API + '/deuda';
          _context18.next = 3;
          return (0, _nodeFetch["default"])(rutaPago);
        case 3:
          resultPago = _context18.sent;
          _context18.next = 6;
          return resultPago.json();
        case 6:
          pago = _context18.sent;
          res.render("pagosP", {
            title: "Pagos Pendientes",
            pago: pago
          });
        case 8:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function (_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}());

//post y put deuda

administrador.post("/saveDeuda", /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$body5, valor_deuda, plazo_deuda, fecha, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _req$body5 = req.body, valor_deuda = _req$body5.valor_deuda, plazo_deuda = _req$body5.plazo_deuda, fecha = _req$body5.fecha;
          datos = {
            valor_deuda: valor_deuda,
            plazo_deuda: plazo_deuda,
            fecha: fecha
          };
          _context19.prev = 2;
          metodo = 'post';
          url = process.env.API + "/deuda";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              valor_deuda: valor_deuda,
              plazo_deuda: plazo_deuda,
              fecha: fecha
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context19.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context19.sent;
          _context19.next = 12;
          return response.json();
        case 12:
          data = _context19.sent;
          if (data.message === "deuda añadido exitosamente") {
            console.log("La deuda ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context19.next = 19;
          break;
        case 16:
          _context19.prev = 16;
          _context19.t0 = _context19["catch"](2);
          console.log("Error al insertar la deuda:", _context19.t0);
        case 19:
          res.redirect('pagos-pendientes');
        case 20:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[2, 16]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());

//delete deuda
administrador.get("/borrarPago", /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          id = req.query.id;
          url = process.env.API + "/deuda/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context20.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context20.sent;
          _context20.next = 9;
          return response.json();
        case 9:
          data = _context20.sent;
          if (data.affectedRows > 0) {
            console.log("deuda borrada");
          }
          _context20.next = 16;
          break;
        case 13:
          _context20.prev = 13;
          _context20.t0 = _context20["catch"](0);
          console.log("Error al borrar la deuda:", _context20.t0);
        case 16:
          res.redirect('Pagos-Pendientes');
        case 17:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 13]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());

//libro mayor crud

//get libro m
administrador.get("/contabilidad", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var rutaLibroMayor, resultLibroMayor, libro;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          rutaLibroMayor = process.env.API + '/libroMayor';
          _context21.next = 3;
          return (0, _nodeFetch["default"])(rutaLibroMayor);
        case 3:
          resultLibroMayor = _context21.sent;
          _context21.next = 6;
          return resultLibroMayor.json();
        case 6:
          libro = _context21.sent;
          res.render("dashCont", {
            title: "Contabilidad",
            libro: libro
          });
        case 8:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());

//post librom

administrador.post("/saveLibroM", /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _req$body6, fecha, tipo_accion, valor, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _req$body6 = req.body, fecha = _req$body6.fecha, tipo_accion = _req$body6.tipo_accion, valor = _req$body6.valor;
          datos = {
            valor: valor,
            tipo_accion: tipo_accion,
            fecha: fecha
          };
          _context22.prev = 2;
          metodo = 'post';
          url = process.env.API + "/libromayor";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              valor: valor,
              tipo_accion: tipo_accion,
              fecha: fecha
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context22.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context22.sent;
          _context22.next = 12;
          return response.json();
        case 12:
          data = _context22.sent;
          if (data.message === "registro añadido exitosamente") {
            console.log("el registro ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context22.next = 19;
          break;
        case 16:
          _context22.prev = 16;
          _context22.t0 = _context22["catch"](2);
          console.log("Error al insertar el registro: ", _context22.t0);
        case 19:
          res.redirect('contabilidad');
        case 20:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[2, 16]]);
  }));
  return function (_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}());

//delete librom

administrador.get("/borrarLibroM", /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          id = req.query.id;
          url = process.env.API + "/libromayor/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context23.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context23.sent;
          _context23.next = 9;
          return response.json();
        case 9:
          data = _context23.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context23.next = 16;
          break;
        case 13:
          _context23.prev = 13;
          _context23.t0 = _context23["catch"](0);
          console.log("Error al borrar el registro:", _context23.t0);
        case 16:
          res.redirect('contabilidad');
        case 17:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 13]]);
  }));
  return function (_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}());

//crud compra

//get compra

administrador.get("/compra", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var rutaCompra, resultCompra, compra;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          rutaCompra = process.env.API + '/compra';
          _context24.next = 3;
          return (0, _nodeFetch["default"])(rutaCompra);
        case 3:
          resultCompra = _context24.sent;
          _context24.next = 6;
          return resultCompra.json();
        case 6:
          compra = _context24.sent;
          res.render("dashCompra", {
            title: "Tus Compras",
            compra: compra
          });
        case 8:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function (_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}());

//post compra

administrador.post("/saveCompra", /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var _req$body7, fecha, valor, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _req$body7 = req.body, fecha = _req$body7.fecha, valor = _req$body7.valor;
          datos = {
            fecha: fecha,
            valor: valor
          };
          _context25.prev = 2;
          metodo = 'post';
          url = process.env.API + "/compra";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              fecha: fecha,
              valor: valor
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context25.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context25.sent;
          _context25.next = 12;
          return response.json();
        case 12:
          data = _context25.sent;
          if (data.message === "compra añadida exitosamente") {
            console.log("la compra ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context25.next = 19;
          break;
        case 16:
          _context25.prev = 16;
          _context25.t0 = _context25["catch"](2);
          console.log("Error al insertar la compra: ", _context25.t0);
        case 19:
          res.redirect('compra');
        case 20:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[2, 16]]);
  }));
  return function (_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}());

//delete compra

administrador.get("/borrarCompra", /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          id = req.query.id;
          url = process.env.API + "/compra/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context26.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context26.sent;
          _context26.next = 9;
          return response.json();
        case 9:
          data = _context26.sent;
          if (data.affectedRows > 0) {
            console.log("compra borrado");
          }
          _context26.next = 16;
          break;
        case 13:
          _context26.prev = 13;
          _context26.t0 = _context26["catch"](0);
          console.log("Error al borrar la compra:", _context26.t0);
        case 16:
          res.redirect('compra');
        case 17:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 13]]);
  }));
  return function (_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}());

//crud empresa

//get empresa
administrador.get("/empresa", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var rutaEmpresa, resultEmpresa, empresa;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          rutaEmpresa = process.env.API + '/empresa';
          _context27.next = 3;
          return (0, _nodeFetch["default"])(rutaEmpresa);
        case 3:
          resultEmpresa = _context27.sent;
          _context27.next = 6;
          return resultEmpresa.json();
        case 6:
          empresa = _context27.sent;
          res.render("dashEmpresa", {
            title: "Tu Empresa",
            empresa: empresa
          });
        case 8:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function (_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}());

//post empresa

administrador.post("/saveEmpresa", /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var _req$body8, NIT_empresa, direccion_empresa, nombre, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _req$body8 = req.body, NIT_empresa = _req$body8.NIT_empresa, direccion_empresa = _req$body8.direccion_empresa, nombre = _req$body8.nombre;
          datos = {
            nombre: nombre,
            NIT_empresa: NIT_empresa,
            direccion_empresa: direccion_empresa
          };
          _context28.prev = 2;
          metodo = 'post';
          url = process.env.API + "/empresa";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              nombre: nombre,
              NIT_empresa: NIT_empresa,
              direccion_empresa: direccion_empresa
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context28.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context28.sent;
          _context28.next = 12;
          return response.json();
        case 12:
          data = _context28.sent;
          if (data.message === "compra añadida exitosamente") {
            console.log("su empresa ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context28.next = 19;
          break;
        case 16:
          _context28.prev = 16;
          _context28.t0 = _context28["catch"](2);
          console.log("Error al insertar la empresa: ", _context28.t0);
        case 19:
          res.redirect('empresa');
        case 20:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[2, 16]]);
  }));
  return function (_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}());

//delete empresa

administrador.get("/borrarEmpresa", /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          id = req.query.id;
          url = process.env.API + "/empresa/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context29.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context29.sent;
          _context29.next = 9;
          return response.json();
        case 9:
          data = _context29.sent;
          if (data.affectedRows > 0) {
            console.log("compra borrado");
          }
          _context29.next = 16;
          break;
        case 13:
          _context29.prev = 13;
          _context29.t0 = _context29["catch"](0);
          console.log("Error al borrar la empresa:", _context29.t0);
        case 16:
          res.redirect('empresa');
        case 17:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 13]]);
  }));
  return function (_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}());

//añadir a empresa la vista para crearla

//crud deudor
//get deudor
administrador.get("/deudor", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var rutaDeudor, resultDeudor, deudor;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          rutaDeudor = process.env.API + '/deudores';
          _context30.next = 3;
          return (0, _nodeFetch["default"])(rutaDeudor);
        case 3:
          resultDeudor = _context30.sent;
          _context30.next = 6;
          return resultDeudor.json();
        case 6:
          deudor = _context30.sent;
          res.render("dashDeudor", {
            title: "Deudores",
            deudor: deudor
          });
        case 8:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function (_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}());

//post deudor

administrador.post("/saveDeudor", /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var _req$body9, nombres, apellidos, email, telefono, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _req$body9 = req.body, nombres = _req$body9.nombres, apellidos = _req$body9.apellidos, email = _req$body9.email, telefono = _req$body9.telefono;
          datos = {
            nombres: nombres,
            apellidos: apellidos,
            email: email,
            telefono: telefono
          };
          _context31.prev = 2;
          metodo = 'post';
          url = process.env.API + "/deudores";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              nombres: nombres,
              apellidos: apellidos,
              email: email,
              telefono: telefono
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context31.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context31.sent;
          _context31.next = 12;
          return response.json();
        case 12:
          data = _context31.sent;
          if (data.message === "deudor añadido exitosamente") {
            console.log("el deudor ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context31.next = 19;
          break;
        case 16:
          _context31.prev = 16;
          _context31.t0 = _context31["catch"](2);
          console.log("Error al insertar el deudor: ", _context31.t0);
        case 19:
          res.redirect('deudor');
        case 20:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[2, 16]]);
  }));
  return function (_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}());

//delete deudor

administrador.get("/borrarDeudor", /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          id = req.query.id;
          url = process.env.API + "/deudores/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context32.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context32.sent;
          _context32.next = 9;
          return response.json();
        case 9:
          data = _context32.sent;
          if (data.affectedRows > 0) {
            console.log("compra borrado");
          }
          _context32.next = 16;
          break;
        case 13:
          _context32.prev = 13;
          _context32.t0 = _context32["catch"](0);
          console.log("Error al borrar la empresa:", _context32.t0);
        case 16:
          res.redirect('deudor');
        case 17:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 13]]);
  }));
  return function (_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}());

//crud estanteria 
//get
administrador.get("/estanteria", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var rutaEstanteria, resultEstanteria, estanteria;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          rutaEstanteria = process.env.API + '/estanteria';
          _context33.next = 3;
          return (0, _nodeFetch["default"])(rutaEstanteria);
        case 3:
          resultEstanteria = _context33.sent;
          _context33.next = 6;
          return resultEstanteria.json();
        case 6:
          estanteria = _context33.sent;
          res.render("dashEstant", {
            title: "Estanteria",
            estanteria: estanteria
          });
        case 8:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function (_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}());

//post 

administrador.post("/saveEstanteria", /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var nombre, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          nombre = req.body.nombre;
          datos = {
            nombre: nombre
          };
          _context34.prev = 2;
          metodo = 'post';
          url = process.env.API + "/estanteria";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              id: id,
              nombre: nombre
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context34.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context34.sent;
          _context34.next = 12;
          return response.json();
        case 12:
          data = _context34.sent;
          if (data.message === "estanteria añadida exitosamente") {
            console.log("la estanteria ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context34.next = 19;
          break;
        case 16:
          _context34.prev = 16;
          _context34.t0 = _context34["catch"](2);
          console.log("Error al insertar la estanteria:", _context34.t0);
        case 19:
          res.redirect('estanteria');
        case 20:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[2, 16]]);
  }));
  return function (_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}());

//delete contacto

administrador.get("/borrarEstanteria", /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _context35.prev = 0;
          id = req.query.id;
          url = process.env.API + "/estanteria/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context35.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context35.sent;
          _context35.next = 9;
          return response.json();
        case 9:
          data = _context35.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context35.next = 16;
          break;
        case 13:
          _context35.prev = 13;
          _context35.t0 = _context35["catch"](0);
          console.log("Error al borrar el registro:", _context35.t0);
        case 16:
          res.redirect('estanteria');
        case 17:
        case "end":
          return _context35.stop();
      }
    }, _callee35, null, [[0, 13]]);
  }));
  return function (_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}());

//crud facturas
//get
administrador.get("/facturas", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    var rutaFactura, resultFactura, factura;
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          rutaFactura = process.env.API + '/factura';
          _context36.next = 3;
          return (0, _nodeFetch["default"])(rutaFactura);
        case 3:
          resultFactura = _context36.sent;
          _context36.next = 6;
          return resultFactura.json();
        case 6:
          factura = _context36.sent;
          res.render("facturas", {
            title: "Facturas",
            factura: factura
          });
        case 8:
        case "end":
          return _context36.stop();
      }
    }, _callee36);
  }));
  return function (_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}());

//post
administrador.post("/saveFacturas", /*#__PURE__*/function () {
  var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    var fecha, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          fecha = req.body.fecha;
          datos = {
            fecha: fecha
          };
          _context37.prev = 2;
          metodo = 'post';
          url = process.env.API + "/factura";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              id: id,
              factura: factura
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context37.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context37.sent;
          _context37.next = 12;
          return response.json();
        case 12:
          data = _context37.sent;
          if (data.message === "factura añadida exitosamente") {
            console.log("la factura ha sido añadido a la base de datos");
          } else {
            console.log("La base de datos no insertó los datos");
          }
          _context37.next = 19;
          break;
        case 16:
          _context37.prev = 16;
          _context37.t0 = _context37["catch"](2);
          console.log("Error al insertar la factura: ", _context37.t0);
        case 19:
          res.redirect('facturas');
        case 20:
        case "end":
          return _context37.stop();
      }
    }, _callee37, null, [[2, 16]]);
  }));
  return function (_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}());

//delete contacto

administrador.get("/borrarFacturas", /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          _context38.prev = 0;
          id = req.query.id;
          url = process.env.API + "/factura/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context38.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context38.sent;
          _context38.next = 9;
          return response.json();
        case 9:
          data = _context38.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context38.next = 16;
          break;
        case 13:
          _context38.prev = 13;
          _context38.t0 = _context38["catch"](0);
          console.log("Error al borrar la factura:", _context38.t0);
        case 16:
          res.redirect('facturas');
        case 17:
        case "end":
          return _context38.stop();
      }
    }, _callee38, null, [[0, 13]]);
  }));
  return function (_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}());

//crear empresa

administrador.get("/crear-empresa", authController.isAuthenticated, function (req, res) {
  res.render("dashCrearEmpresa", {
    title: "Crear Empresa"
  });
});
administrador.get("/borrarPerdida", /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    var id, url, options, response, data;
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          _context39.prev = 0;
          id = req.query.id;
          url = process.env.API + "/perdidas/".concat(id);
          options = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            }
          };
          _context39.next = 6;
          return (0, _nodeFetch["default"])(url, options);
        case 6:
          response = _context39.sent;
          _context39.next = 9;
          return response.json();
        case 9:
          data = _context39.sent;
          if (data.affectedRows > 0) {
            console.log("Registro borrado");
          }
          _context39.next = 16;
          break;
        case 13:
          _context39.prev = 13;
          _context39.t0 = _context39["catch"](0);
          console.log("Error al borrar el registro:", _context39.t0);
        case 16:
          res.redirect('perdidas');
        case 17:
        case "end":
          return _context39.stop();
      }
    }, _callee39, null, [[0, 13]]);
  }));
  return function (_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}());
administrador.get("/contactos", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    var rutaContacto, resultContacto, contacto;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          rutaContacto = process.env.API + '/proveedor';
          _context40.next = 3;
          return (0, _nodeFetch["default"])(rutaContacto);
        case 3:
          resultContacto = _context40.sent;
          _context40.next = 6;
          return resultContacto.json();
        case 6:
          contacto = _context40.sent;
          res.render("contactos", {
            title: "Contactos",
            contacto: contacto
          });
        case 8:
        case "end":
          return _context40.stop();
      }
    }, _callee40);
  }));
  return function (_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}());

//post y put contacto
administrador.post("/savePerdida", /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    var _req$body10, fecha, valor, datos, metodo, url, id, options, response, data;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          _req$body10 = req.body, fecha = _req$body10.fecha, valor = _req$body10.valor;
          datos = {
            fecha: fecha,
            valor: valor
          };
          _context41.prev = 2;
          metodo = 'post';
          url = process.env.API + "/perdidas";
          if (req.body.id) {
            id = req.body.id;
            metodo = "put";
            datos = {
              fecha: fecha,
              valor: valor
            };
            console.log("se ejecuto el put");
          }
          options = {
            method: metodo,
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json"
            }
          };
          _context41.next = 9;
          return (0, _nodeFetch["default"])(url, options);
        case 9:
          response = _context41.sent;
          _context41.next = 12;
          return response.json();
        case 12:
          data = _context41.sent;
          if (data.message === "contacto añadido exitosamente") {
            console.log("El contacto ha sido añadido a la base de datos");
          } else {
            console.log("contacto insertado");
          }
          _context41.next = 19;
          break;
        case 16:
          _context41.prev = 16;
          _context41.t0 = _context41["catch"](2);
          console.log("Error al insertar el contacto:", _context41.t0);
        case 19:
          res.redirect('perdidas');
        case 20:
        case "end":
          return _context41.stop();
      }
    }, _callee41, null, [[2, 16]]);
  }));
  return function (_x81, _x82) {
    return _ref41.apply(this, arguments);
  };
}());
administrador.get("/reporte-contabilidad", authController.isAuthenticated, /*#__PURE__*/function () {
  var _ref42 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee42(req, res) {
    var rutaLibroMayor, resultLibroMayor, libro;
    return _regeneratorRuntime().wrap(function _callee42$(_context42) {
      while (1) switch (_context42.prev = _context42.next) {
        case 0:
          rutaLibroMayor = process.env.API + '/libroMayor';
          _context42.next = 3;
          return (0, _nodeFetch["default"])(rutaLibroMayor);
        case 3:
          resultLibroMayor = _context42.sent;
          _context42.next = 6;
          return resultLibroMayor.json();
        case 6:
          libro = _context42.sent;
          res.render("contabilidadPDF", {
            title: "reporte",
            libro: libro
          });
        case 8:
        case "end":
          return _context42.stop();
      }
    }, _callee42);
  }));
  return function (_x83, _x84) {
    return _ref42.apply(this, arguments);
  };
}());
var _default = administrador;
exports["default"] = _default;