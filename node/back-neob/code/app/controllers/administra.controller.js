/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      administra.controller.js
//Descripción:  Archivo con funciones para el control y manejo de la tabla administra dentro de la BD */

const db = require("../models");
const Administra = db.administra;
const Op = db.Sequelize.Op;

//Guarda un nuevo administra
const CreateAdministra = async(req,res) => {
    var hoy = new Date()
    const administra = {
        idadmin: req.body.idadmin,
        idaula: req.body.idaula,
        fechaini: req.body.fechaini,
        fechafin: req.body.fechafin
    };
    try{
        const find = await Administra.findOne({where: administra})
        if (find !== null){
            return res.send({message:"Already exists"})
        }
        const data = await Administra.create(administra)
        /*console.log("añadir aula")
        console.log(data)*/
        return res.send({data,message:"Correcto"})
    }catch(err){
        return res.send({message: "Incorrecto"});
    }
}

const DeleteAdministra = async(req,res) => {
    const idadmin = req.params.idadmin;
    const idaula = req.params.idaula;

    try{
        const num = await Administra.destroy({ where: { idadmin: idadmin , idaula: idaula}})
        /*console.log("eliminar aula")
        console.log(num)*/
        if(num === 1){
            return  res.send({message: "Eliminado"});
        }else{
            return res.send({message:  "No se puede eliminar el administra con id:"+ idadmin})
        }
    }catch(err){
        return  res.status(500).send({ message: "Error eliminando el administra con id: " + idadmin})
    }
}

module.exports = {CreateAdministra,DeleteAdministra}
/*
// Crear y guardar una tupla en la tabla administra
exports.create = (req, res) => {
    // Crear un administra
    const administra = {
        idadmin: req.body.idadmin,
        idaula: req.body.idaula,
    };

    // Guardar en administra en la base de datos
    Administra.create(administra)
    .then(data => {
        res.send({data,message:"Correcto"});
    })
    .catch(err => {
        res.send({
            message: "Incorrecto"
        });
    });
};

// Encuentra un administra con un id
exports.find = (req, res) => {
    const idadmin = req.params.idadmin;
    const idaula = req.params.idaula;

    Administra.findOne({ where: { idadmin: idadmin, idaula: idaula } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando administra con id: " + idadmin
        });
    });
};

// Recupera todas las administras de la base de datos.
exports.findAll = (req, res) => {
    const idadmin = req.query.idadmin;
    var condition = idadmin ? { idadmin: { [Op.iLike]: `%${idadmin}%` } } : null;
  
    Administra.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error recuperando administras."
        });
    });
};

// Elimina un administra con un id concreto
exports.delete = (req, res) => {
    const idadmin = req.params.idadmin;
    const idaula = req.params.idaula;

    Administra.destroy({
      where: { idadmin: idadmin , idaula: idaula}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Eliminado"
            });
        } else {
            res.send({
                message:  `No se puede eliminar el administra con id: ${idadmin}. Puede que el administra no se haya encontrado o que req.body este vacio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error eliminando el administra con id: " + idadmin
        });
    });
};

// Elimina todas las administras de la base de datos
exports.deleteAll = (req, res) => {
    Administra.destroy({
        where: {},
        truncate: false
      })
    .then(nums => {
        res.send({ message: `${nums} administras eliminadas.` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error eliminando administras."
        });
    });
};

// Actualiza un administra correspondiente a un id
exports.update = (req, res) => {
    const idadmin = req.params.idadmin;

    Administra.update(req.body, {
        where: { idadmin: idadmin }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "administra actualizada."
            });
        } else {
            res.send({
                message: `No se puede actualizar el administra con id: ${idadmin}. Puede que el administra no se haya encontrado o que req.body este vacio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando administra con id: " + idadmin
        });
    });
};

*/