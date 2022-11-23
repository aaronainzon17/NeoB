/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      aula.controller.js
//Descripción:  Archivo con funciones para el control y manejo de la tabla aula dentro de la BD */

const db = require("../models");
const Aula = db.aula;
const Op = db.Sequelize.Op;

//Devuelve un aula buscando por id
const FindAula = async(req,res) => {
    const idaula = req.params.idaula;

    try{
        const data = await Aula.findByPk(idaula);
        /*console.log("findbypk aula")
        console.log(data)*/
        return res.send(data.dataValues);
    }catch(err){
        return res.status(500).send({message: "Error recuperando aula con id: " + idaula});
    }
}

 // Recupera todas las aulas de la base de datos.
const FindAllAula = async(req,res) => {
    const idaula = req.query.idaula;
    var condition = idaula ? { idAula: { [Op.iLike]: `%${idaula}%` } } : null;

    try{
        const data = await Aula.findAll({ where: condition })
        /*console.log("findall aula")
        console.log(data)*/
        return res.send(data);
    }catch(err){
        return res.status(500).send({ message: err.message || "Error recuperando aulas."});
    }
}

//Actualiza aula correspondiente a un id
const UpdateAula = async(req,res) => {
    const idaula = req.params.idaula;
    try{
        const num = await Aula.update(req.body, {where: { idaula: idaula }})
        /*console.log("update aula")
        console.log(num)*/
        if (num == 1) {
            return res.send({message: "Aula actualizada."});
        }else{
            return res.send({ message: `No se puede actualizar el Aula con id: ${idaula}. `});
        }   
        
    }catch(err){
        return res.status(500).send({ message: "Error actualizando aula con id: " + idaula });
    }
}


module.exports = {FindAula,FindAllAula,UpdateAula}

/*
// Crear y guardar un Aula
exports.create = (req, res) => {
    // Validar la peticion
    if (!req.body.nombre) {
        res.status(400).send({
        message: "Nombre no puede ser nulo"
        });
        return;
    }

    // Crear un Aula
    const aula = {
        nombre: req.body.nombre,
        aforomax: req.body.aforomax
    };

    // Guardar en aula en la base de datos
    Aula.create(aula)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error guardando aula."
        });
    });
};

// Encuentra un aula con un id
exports.find = (req, res) => {
    const idaula = req.params.idaula;

    Aula.findByPk(idaula)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando aula con id: " + idaula
        });
    });
};

// Recupera todas las aulas de la base de datos.
exports.findAll = (req, res) => {
    const idaula = req.query.idaula;
    var condition = idaula ? { idAula: { [Op.iLike]: `%${idaula}%` } } : null;
  
    Aula.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error recuperando aulas."
        });
    });
};

// Elimina un aula con un id concreto
exports.delete = (req, res) => {
    const idaula = req.params.idaula;

    Aula.destroy({
      where: { idAula: idaula }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Aula eliminada."
            });
        } else {
            res.send({
                message:  `No se puede eliminar el Aula con id: ${idaula}. Puede que el Aula no se haya encontrado o que req.body este vacio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error eliminando el aula con id: " + idaula
        });
    });
};

// Elimina todas las aulas de la base de datos
exports.deleteAll = (req, res) => {
    Aula.destroy({
        where: {},
        truncate: false
      })
    .then(nums => {
        res.send({ message: `${nums} Aulas eliminadas.` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error eliminando aulas."
        });
    });
};

// Actualiza un aula correspondiente a un id
exports.update = (req, res) => {
    const idaula = req.params.idaula;
    Aula.update(req.body, {
        where: { idaula: idaula }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Aula actualizada."
            });
        } else {
            res.send({
                message: `No se puede actualizar el Aula con id: ${idaula}. Puede que el Aula no se haya encontrado o que req.body este vacio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando aula con id: " + idaula
        });
    });
};
*/