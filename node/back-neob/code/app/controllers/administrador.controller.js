/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      administrador.controller.js
//Descripción:  Archivo con funciones para el control y manejo de la tabla administrador dentro de la BD */

const { admin, aula } = require("../models");
const db = require("../models");
const Administrador = db.admin;
const Administra = db.administra;
const Aula = db.aula;
const Op = db.Sequelize.Op;

//Encuentra un administrador por id
/*const FindAdministrador = async(req,res) => {
    const usuario = req.params.usuario;
    Administrador.findByPk(usuario)
    .then(admin => {
        console.log(admin)
        admin.getAulas().then(administ => {
            console.log(administ[0].administra.dataValues.fechafin)
            res.send({
                usuario: admin.usuario,
                contrasenya: admin.contrasenya,
                lastlogin: admin.lastlogin,
                rol: admin.rol,
                administra: administ
            });
        });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando administrador con id: " + usuario
        });
    });
}*/

const FindAdministradorMod = async(req,res) => {
    const usuario = req.params.usuario;
    try {
        const admin = await Administrador.findByPk(usuario)
        console.log(usuario)
        const salas_admin = await Administra.findAll(
            {   
                attributes: ['idaula','fechafin'], 
                where: {idadmin : { [Op.eq]: `${admin.usuario}`}}
            });
        
        var final_salas = []
        for (const sala of salas_admin){
            var acceso = checkDate(sala.fechafin)

            var aula = await Aula.findByPk(sala.idaula)
            
            aula.dataValues.activo = acceso
            final_salas.push(aula)
        }

        res.send({
            usuario: admin.usuario,
            contrasenya: admin.contrasenya,
            lastlogin: admin.lastlogin,
            rol: admin.rol,
            administra: final_salas
        });
    }catch(e){
        console.log(e)
        return res.status(500).send({message: err.message || "Error recuperando administrador",});
    }
}

const FindAdministradorAdm = async(req,res) => {
    const usuario = req.params.usuario;
    try {
        const admin = await Administrador.findByPk(usuario)
        console.log(usuario)
        const salas_admin = await Administra.findAll(
            {   
                attributes: ['idaula','fechafin'], 
                where: {idadmin : { [Op.eq]: `${admin.usuario}`}}
            });
        
        var final_salas = []
        for (const sala of salas_admin){
            var acceso = checkDate(sala.fechafin)
            if (acceso){
                var aula = await Aula.findByPk(sala.idaula)
                final_salas.push(aula)
            } 
        }
        res.send({
            usuario: admin.usuario,
            contrasenya: admin.contrasenya,
            lastlogin: admin.lastlogin,
            rol: admin.rol,
            administra: final_salas
        });
    }catch(e){
        console.log(e)
        return res.status(500).send({message: err.message || "Error recuperando administrador",});
    }
}


const FindAllAdministrador = async(req,res) => {
    const usuario = req.query.usuario;
    var condition = usuario ? { usuario: { [Op.iLike]: `%${usuario}%` } } : null;

    try{
        const admins = await  Administrador.findAll({ where: condition });

        return res.send(admins);
    }catch(err){
        return res.status(500).send({message:err.message || "Error recuperando aulas."});
    }   
}

const DeleteAdministrador = async(req,res) => {
    const usuario = req.params.usuario;

    try{
        const num = await Administrador.destroy({where: { usuario: usuario }});
        if(num === 1){
            return res.send({status: "Eliminado"})
        }else{
            return res.send({status:  "No se puede eliminar el administrador con id:" + usuario})
        }
    }catch(err){
        return  res.status(500).send({status: "Error eliminando el administrador con id: " + usuario})
    }
}

function checkDate(fechaFin){
    var hoy = new Date()
    hoy = hoy.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
    hoy = hoy.split("/")
    fechaFin = fechaFin.split("/")
  
    //Si el anyo de hoy es mayor
    if (hoy[2] > fechaFin[2]){
      return false
    }else if (hoy[2] == fechaFin[2] && hoy[1] > fechaFin[1]){
      //Si el anyo es el mismo pero el mes mayor
      return false
    }else if (hoy[2] == fechaFin[2] && hoy[1] == fechaFin[1] && hoy[0] > fechaFin[0]){
      //si mismo anyo y mes pero el dia es mayor
      return false
    }else{
      //Si la fecha es menor tiene acceso
      return true
    }
}

module.exports = {FindAdministradorMod,FindAdministradorAdm,FindAllAdministrador,DeleteAdministrador}
/*
// Crear y guardar un Administrador
exports.create = (req, res) => {

    // Crear un administrador
    const administrador = {
        usuario: req.body.usuario,
        contrasenya: req.body.contrasenya,
        lastlogin: req.body.lastlogin,
    };

    // Guardar en administrador en la base de datos
    Administrador.create(administrador)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error guardando administrador."
        });
    });
};

// Encuentra un administrador con un id
exports.find = (req, res) => {
    const usuario = req.params.usuario;

    Administrador.findByPk(usuario)
    .then(admin => {
        admin.getAulas().then(administ => {
            res.send({
                usuario: admin.usuario,
                contrasenya: admin.contrasenya,
                lastlogin: admin.lastlogin,
                rol: admin.rol,
                administra: administ
            });
        });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error recuperando administrador con id: " + usuario
        });
    });
};

// Recupera todos los administradores de la base de datos.
exports.findAll = (req, res) => {
    const usuario = req.query.usuario;
    var condition = usuario ? { usuario: { [Op.iLike]: `%${usuario}%` } } : null;
  
    Administrador.findAll({ where: condition })
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

// Elimina un administrador con un id concreto
exports.delete = (req, res) => {
    const usuario = req.params.usuario;

    Administrador.destroy({
      where: { usuario: usuario }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                status: "Eliminado"
            });
        } else {
            res.send({
                status:  `No se puede eliminar el administrador con id: ${usuario}. Puede que el administrador no se haya encontrado o que req.body este vacio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status: "Error eliminando el administrador con id: " + usuario
        });
    });
};

// Elimina todas las aulas de la base de datos
exports.deleteAll = (req, res) => {
    Administrador.destroy({
        where: {},
        truncate: false
      })
    .then(nums => {
        res.send({ message: `${nums} Administradores eliminados.` });
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Error eliminando administradores."
        });
    });
};

// Actualiza un administrador correspondiente a un id
exports.update = (req, res) => {
    const usuario = req.params.usuario;

    Administrador.update(req.body, {
        where: { usuario: usuario }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "administrador actualizada."
            });
        } else {
            res.send({
                message: `No se puede actualizar el administrador con id: ${usuario}. Puede que el administrador no se haya encontrado o que req.body este vacio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error actualizando administrador con id: " + usuario
        });
    });
};
*/