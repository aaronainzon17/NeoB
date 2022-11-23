/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      mail.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de mail desde el front-end mediante operaciones del protocolo http*/

/*
const mail = require("../controllers/mail.controller.js");
const router = require("express").Router();

// Send a new mail
router.post("/reserva", mail.MailEnviarReserva);

// Send a new mail
router.post("/confirmacion", mail.MailEnviarConfirmacion);

module.exports = router*/

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