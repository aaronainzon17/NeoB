/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      reserva.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de reserva desde el front-end mediante operaciones del protocolo http*/

const { authJwt } = require("../middleware");
module.exports = app => {
    const reserva = require("../controllers/reserva.controller.js");
  
    var router = require("express").Router();
    // Create a new reserva
    router.post("/", [authJwt.verifyGeneralToken],reserva.CreateReserva);

    // Confirm reserva
    router.post("/confirmar",[authJwt.verifyGeneralToken], reserva.ConfirmReserva);
    
    // Don't Confirm reserva
    router.post("/noconfirmar",[authJwt.verifyGeneralToken], reserva.NoConfirmReserva);

    // End reserva
    router.post("/finalizar",[authJwt.verifyGeneralToken], reserva.EndReserva);

    // Scan reserva
    router.post("/escanear",[authJwt.verifyGeneralToken], reserva.ScanReserva);

    //Cleanup de reservas caducadas
    router.post("/cleanUp",[authJwt.verifyGeneralToken], reserva.ReservaCleanUP);

    //get all resevation por fecha y hora
    router.post("/fechaHora",[authJwt.verifyGeneralToken], reserva.GetReservas);
    
    //estadisticas de la sala
    router.post("/stats", [authJwt.verifyGeneralToken],reserva.ReservaStats);

    //Cambia estado de un asiento con una reserva "ficticia" ES DECIR, de admin
    router.post("/changeState",[authJwt.verifyGeneralToken], reserva.ReservaChangeState);
  
    app.use('/api/reserva', router);
  };
