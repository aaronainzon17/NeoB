/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      administrador.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de administrador y el middleware de autenticación 
                desde el front-end mediante operaciones del protocolo http*/

const administrador = require("../controllers/administrador.controller.js");
const router = require("express").Router();  


/*
// Retrieve administrador
const adminfind = router.get("", administrador.FindAdministrador);
// Retrieve all published administrador
const adminfindA = router.get("", administrador.FindAllAdministrador);
// Delete a administrador with id
const admindel = router.delete("", administrador.DeleteAdministrador);

module.exports = {adminfind,adminfindA,admindel}*/

const { authJwt } = require("../middleware");
module.exports = app => {
    const administrador = require("../controllers/administrador.controller.js");
  
    var router = require("express").Router();
  
    // Create a new administrador
    //router.post("/",[authJwt.verifyToken, authJwt.isModerator], administrador.create);
  
    // Retrieve all administrador
    router.get("/mod/:usuario", [authJwt.verifyToken], administrador.FindAdministradorMod);

    // Retrieve all administrador
    router.get("/adm/:usuario", [authJwt.verifyToken], administrador.FindAdministradorAdm);
  
    // Retrieve all published administrador
    router.get("/", [authJwt.verifyToken, authJwt.isModerator], administrador.FindAllAdministrador);
    //router.get("/", administrador.findAll);
  
    // Delete a administrador with id
    router.delete("/:usuario",[authJwt.verifyToken, authJwt.isModerator], administrador.DeleteAdministrador);
  
    // delete administrador
    //router.delete("/", administrador.deleteAll);

    // Update a administrador with id
    //router.put("/:usuario", administrador.update);
  
    app.use('/api/administrador', router);
  };