/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      aula.routes.js
//Descripción:  Archivo para la definición de rutas para el acceso a las funciones del 
                controlador de aula desde el front-end mediante operaciones del protocolo http*/

/*
const aula = require("../controllers/aula.controller.js");
const router = require("express").Router();
       
// Retrieve one Aula
router.get("/:idaula",aula.FindAula);
  
// Retrieve all published aula
router.get("/",aula.FindAllAula);

// Update a Aula with id
router.put("/:idaula",aula.UpdateAula);

module.exports = router;*/


const { authJwt } = require("../middleware");
module.exports = app => {
    const aula = require("../controllers/aula.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Aula
    //router.post("/", aula.create);
  
    // Retrieve one Aula
    router.get("/:idaula",[authJwt.verifyGeneralToken],aula.FindAula);
  
    // Retrieve all published aula
    router.get("/",[authJwt.verifyGeneralToken], aula.FindAllAula);
  
    // Delete a Aula with id
    //router.delete("/:idaula", aula.delete);
  
    // Create a new Aula
    //router.delete("/", aula.deleteAll);

    // Update a Aula with id
    router.put("/:idaula", [authJwt.verifyGeneralToken],aula.UpdateAula);
  
    app.use('/api/aula', router);
  };