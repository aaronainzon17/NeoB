/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      mail.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de mail desde el front-end mediante operaciones del protocolo http*/


const { authJwt } = require("../middleware");
module.exports = app => {
    const mail = require("../controllers/mail.controller.js");
  
    var router = require("express").Router();
  
    // Send a new mail
    router.post("/reserva",[authJwt.verifyGeneralToken], mail.MailEnviarReserva);

    // Send a new mail
    router.post("/confirmacion",[authJwt.verifyGeneralToken], mail.MailEnviarConfirmacion);

    app.use('/api/mail', router);
  };