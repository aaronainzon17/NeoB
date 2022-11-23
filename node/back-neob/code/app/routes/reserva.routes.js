/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
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

                /*
const reserva = require("../controllers/reserva.controller.js");
const router = require("express").Router();

 // Create a new reserva
 router.post("/", reserva.CreateReserva);

 // Confirm reserva
 router.post("/confirmar", reserva.ConfirmReserva);
  
 // Don't Confirm reserva
 router.post("/noconfirmar", reserva.NoConfirmReserva);

 // End reserva
 router.post("/finalizar", reserva.EndReserva);

 // Scan reserva
 router.post("/escanear", reserva.ScanReserva);

 //Cleanup de reservas caducadas
 router.post("/cleanUp", reserva.ReservaCleanUP);

 //get all resevation por fecha y hora
 router.post("/fechaHora", reserva.GetReservas);
 
 //estadisticas de la sala
 router.post("/stats", reserva.ReservaStats);

 //Cambia estado de un asiento con una reserva "ficticia"
 router.post("/changeState", reserva.ReservaChangeState);

////////////////////////////////////////////////////////////////////////

 // Retrieve one reserva by id
 //router.get("/:idreserva", reserva.FindReserva);

 // Retrieve one reserva by idhora,idasiento,user,hora
 //router.post("/finder", reserva.FindReservaByUserDate);

 //count reservas for an alumno in a given day
 //router.post("/countByUser_Date", reserva.CountReservaByUserDate)

 // Delete a reserva with id
 //router.delete("/:idreserva", reserva.DeleteReserva);

 // Update a reserva with id
 //router.put("/:idreserva", reserva.UpdateReserva);


module.exports = router;*/