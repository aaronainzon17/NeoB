/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      report.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de report desde el front-end mediante operaciones del protocolo http*/

const { authJwt } = require("../middleware");
module.exports = app => {
    const report = require("../controllers/report.controller.js");
  
    var router = require("express").Router();
  
    // Send a new mail
    router.post("/", [authJwt.verifyGeneralToken],report.ReportarPositivo);

    app.use('/api/report', router);
  };