/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      auth.controller.js
//Descripción:  Archivo con funciones para el control de las acciones de sign-up y sign-in
                para los administradores del sistema NeoB*/

const db = require("../models");
const config = require("../config/auth.config");
const passwordGenerator = require('generate-password');
const Admin = db.admin;
const Usuario = db.usuario;
const nodemailer = require("nodemailer");
const mailAccount = require("../config/mail.config");
const pug = require('pug');

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const AuthSignUp = async(req,res) => {
  // Save User to Database
  //TODO: Autogenerar contraseña
  try{
    const user = await Usuario.findByPk(req.body.usuario);
    if(user === null){
      const user2 = await Usuario.create({idusuario: req.body.usuario});
    }
    const admin =  await Admin.findByPk(req.body.usuario);
    if(admin === null){
      var passwd = passwordGenerator.generate({
        length: 7,
        numbers: true
      })
      const mailerror = await enviarMail(req.body.usuario,passwd)
      if(!mailerror){
        const admin2 = await Admin.create({usuario: req.body.usuario,
          contrasenya: bcrypt.hashSync(passwd, 8),
          rol: req.body.rol,
          fechafin: req.body.fechafin,
          lastlogin: (new Date()).toUTCString()})
        return res.send({ message: "User was registered successfully!" });
      }
    }else{
      return res.send({ message: "User ya existe" });
    }
  }catch(err){
    console.log(err);
    return res.status(500).send({ message: "server error" });
  }
}

const AuthSignIn = async(req,res) => {
  try{
   
    const admin = await Admin.findOne({where: {usuario: req.body.usuario}});
    //console.log(admin);
    if (admin === null){
      return res.status(404).send({ message: "User Not found." });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.contrasenya,
      admin.dataValues.contrasenya
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    var cuentaActiva = true
    if (admin.dataValues.fechafin !== "PERMANENTE"){
      cuentaActiva = checkDate(admin.dataValues.fechafin)
    }

    if (!cuentaActiva) {
      return res.status(401).send({
        accessToken: null,
        message: `Cuenta cadudada el dia ${admin.dataValues.fechafin}`
      });
    }
    
    var token = jwt.sign({ usuario: admin.dataValues.usuario }, config.secret, {expiresIn: 25200 }); // 7 hours, all journey

    var timeStamp = (new Date()).toUTCString();
    
    const update = await Admin.update({lastlogin: timeStamp},{ where: { usuario: req.body.usuario}});

    return res.status(200).send({
      usuario: admin.dataValues.usuario,
      roles: admin.dataValues.rol,
      fechafin: admin.dataValues.fechafin,
      accessToken: token
    });
  }catch(err){
    return res.status(500).send({ message: err});
  }
}

const ChangePassword = async(req,res) => {

  try{
    const admin = await Admin.findOne({where: {usuario: req.body.usuario}});
    //console.log(admin);
    if (admin === null){
      return res.status(404).send({ message: "Usuario no encontrado" });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.currentContrasenya,
      admin.dataValues.contrasenya
    );

    if (!passwordIsValid) {
      return res.status(200).send({ message: "La contraseña introducida es incorrecta" });
    }
    let passwd = req.body.newContrasenya.toString()
    passwd = bcrypt.hashSync(passwd, 8)
    
    const update = await Admin.update({contrasenya: passwd},{ where: { usuario: req.body.usuario}});

    return res.status(200).send({message: "Contraseña cambiada correctamente"});
  }catch(err){
    return res.status(500).send({ message: err});
  }
}

const enviarMail = async(destinatario,passwd) => {
   // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.unizar.es",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    user: mailAccount.USER, // generated ethereal user
    pass: mailAccount.PASSWORD, // generated ethereal password
    }
  });

   // send mail with defined transport object
  let mailOptions = {
  from: "NeoB 👻 <" + mailAccount.USER + mailAccount.DOMAIN + ">", // sender address
  to: destinatario.toString() + "@unizar.es", // list of receivers
  subject: "Nueva cuenta en NeoB", // Subject line
  text: "Nueva cuenta en NeoB", // plain text body
  html: pug.renderFile(__dirname+'/../views/new_admin.pug',
                      {user: destinatario , passwd: passwd})
  };

  // Enviar los contactos del positivo al corresponsal de covid del campus correspondiente
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error)
          return true
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });

  return false;

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

module.exports = {AuthSignUp,AuthSignIn,ChangePassword}
/*
exports.signup = (req, res) => {
  // Save User to Database
  console.log(req.body);
  Usuario.create({
    idusuario: req.body.usuario
  })
  .then(user => {
    Admin.create({
      usuario: req.body.usuario,
      contrasenya: bcrypt.hashSync(req.body.contrasenya, 8),
      rol: req.body.rol
    })
    .then(user => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  })
  .catch(err => {
    Admin.create({
      usuario: req.body.usuario,
      contrasenya: bcrypt.hashSync(req.body.contrasenya, 8),
      rol: req.body.rol
    })
    .then(user => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  });
};

exports.signin = (req, res) => {
  Admin.findOne({
    where: {
      usuario: req.body.usuario
    }
  })
    .then(admin => {
      if (!admin) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.contrasenya,
        admin.contrasenya
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ usuario: admin.usuario }, config.secret, {
        expiresIn: 3600 // 1 hours
      });

      var timeStamp = (new Date()).toUTCString();
      //console.log(timeStamp);
      Admin.update(
        {lastlogin: timeStamp},
        { where: { usuario: req.body.usuario}})
      .then(data =>{
        
      }).catch(err =>{
        res.status(500).send({ message: err.message });
      });

      res.status(200).send({
        usuario: admin.usuario,
        roles: admin.rol,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
*/