/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      administra.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de administra desde el front-end mediante operaciones del protocolo http*/

           
const { authJwt } = require("../middleware");
module.exports = app => {
    const administra = require("../controllers/administra.controller.js");
  
    var router = require("express").Router();
  
    // Create a new administra
    router.post("/",[authJwt.verifyToken, authJwt.isModerator], administra.CreateAdministra);
  
    // Retrieve all administra
    //router.get("/:idadmin/:idaula", administra.find);
  
    // Retrieve all published administra
    //router.get("/",[authJwt.verifyToken], administra.findAll);
  
    // Delete a administra with id
    router.delete("/:idadmin/:idaula",[authJwt.verifyToken, authJwt.isModerator], administra.DeleteAdministra);
  
    // Create a new administra
    //router.delete("/", administra.deleteAll);

    // Update a administra with id
    //router.put("/:idadmin/:idaula", administra.update);
  
    app.use('/api/administra', router);
  };