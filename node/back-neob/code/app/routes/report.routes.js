/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      report.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de report desde el front-end mediante operaciones del protocolo http*/

/*
const report = require("../controllers/report.controller.js");
const router = require("express").Router();

// Reportar positivo
router.post("/", report.ReportarPositivo);

module.exports = router;*/

const { authJwt } = require("../middleware");
module.exports = app => {
    const report = require("../controllers/report.controller.js");
  
    var router = require("express").Router();
  
    // Send a new mail
    router.post("/", [authJwt.verifyGeneralToken],report.ReportarPositivo);

    app.use('/api/report', router);
  };