/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      mail.controller.js
//Descripción:  Archivo con funciones para el envío de emails de distinto tipo a través del email oficial del sistema */

const nodemailer = require("nodemailer");
const {encrypt, decrypt} = require("../middleware/crypto");
const mailAccount = require("../config/mail.config");
const db = require("../models");
const Aula = db.aula;
const pug = require('pug');

const MailEnviarReserva = async(req,res) => {
    const mailCostumer = {
        hour: req.body.hourUser,
        seat: req.body.seatUser,
        name: req.body.nameUser,
        date: req.body.dateUser,
        mail: req.body.mailUser,
        hash: req.body.hash
    }
    console.log(mailCostumer);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.unizar.es",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: mailAccount.USER, // generated ethereal user
        pass: mailAccount.PASSWORD, // generated ethereal password
        },
    });
    let hashedReservation
    try{
        hashedReservation = encrypt(mailCostumer.hash.toString())
    }catch(e){
        console.log({err:e})
    }
    
    let idaula = req.body.idaula
    let foto,nombre;
    try{
        const data = await Aula.findByPk(idaula);
        foto = data.dataValues.imagen;
        nombre = data.dataValues.nombre;
    }catch(e){
        foto = "undefined";
        nombre = "undefined";
    }

    // send mail with defined transport object
    let mailOptions = {
        from: "NeoB 👻 <" + mailAccount.USER + mailAccount.DOMAIN + ">", // sender address
        to: mailCostumer.mail, // list of receivers
        subject: "Reserva", // Subject line
        text: "Reserva", // plain text body
        html: pug.renderFile(__dirname+'/../views/reservation_mail_template.pug',
                            {imgBiblioteca: foto, biblioteca: nombre,
                            nombre: mailCostumer.name, fecha: mailCostumer.date , sitio: mailCostumer.seat, 
                            hIni:mailCostumer.hour.split("-")[0], hFin: mailCostumer.hour.split("-")[1], 
                            hashId:hashedReservation,urlConfirmar: process.env.URL_BOTON_CONFIRMAR
                            ,urlNoConfirmar: process.env.URL_BOTON_NOCONFIRMAR})
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        
        if (error) {
            console.error(error)
            var data = {
                status: "No confirmado",
            };
            return res.send(data);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        var data = {
            status: "Confirmado",
        };
        return res.send(data);
    });
}

const MailEnviarConfirmacion = async(req,res) => {
    const mailCostumer = {
        user: req.body.hashUser,
        hash: req.body.hashId,
    }
    if (req.body.comesFrom === "escaner"){
        mailCostumer.hash = encrypt(mailCostumer.hash.toString())
    }

    // Generate test SMTP service account from ethereal.email    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.unizar.es",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: mailAccount.USER, // generated ethereal user
        pass: mailAccount.PASSWORD, // generated ethereal password
        },
    });

    var destination = mailCostumer.user.toString() + "@unizar.es";

    var idaula = req.body.idaula
    var foto,nombre;
    try{
        const data = await Aula.findByPk(idaula);
        foto = data.dataValues.imagen;
        nombre = data.dataValues.nombre;
    }catch(e){
        foto = "undefined";
        nombre = "undefined";
    }
    // send mail with defined transport object
    let mailOptions = {
        from: "NeoB 👻 <" + mailAccount.USER + mailAccount.DOMAIN + ">", // sender address
        to: destination, // list of receivers
        subject: "Reserva confirmada", // Subject line
        text: "Reserva confirmada", // plain text body
        html: pug.renderFile(__dirname+'/../views/confirmation_mail_template.pug',
                            {imgBiblioteca: foto, biblioteca: nombre
                            ,hashId:mailCostumer.hash,urlFinalizar: process.env.URL_BOTON_FINALIZAR})
    };
        // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            var data = {
                status: "Not sent",
            };
            return res.send(data);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        var data = {
            status: "Sent",
        };
        return res.send(data);
    });
}
module.exports = {MailEnviarReserva,MailEnviarConfirmacion}

/*

// Enviar un correo de confirmacion
exports.MailEnviarConfirmacion = (req, res) => {
    const mailCostumer = {
        user: req.body.hashUser,
        hash: req.body.hashId
    }
    // Generate test SMTP service account from ethereal.email    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
        user: mailAccount.USER, // generated ethereal user
        pass: mailAccount.PASSWORD, // generated ethereal password
        },
    });

    var destination = mailCostumer.user.toString() + "@unizar.es";

    var idaula = req.body.idaula
    var foto,nombre;
    Aula.findByPk(idaula)
    .then(data => {
        foto = data.dataValues.imagen;
        nombre = data.dataValues.nombre;
        // send mail with defined transport object
        let mailOptions = {
            from: "NeoB 👻 <" + mailAccount.USER + ">", // sender address
            to: destination, // list of receivers
            subject: "Reserva confirmada", // Subject line
            text: "Reserva confirmada", // plain text body
            html: pug.renderFile(__dirname+'/../views/confirmation_mail_template.pug',
                                {imgBiblioteca: foto, biblioteca: nombre
                                ,hashId:mailCostumer.hash,urlFinalizar: process.env.URL_BOTON_FINALIZAR})
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                var data = {
                    status: "Not sent",
                };
                res.send(data);
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            var data = {
                status: "Sent",
            };
            res.send(data);
        });
    })
    .catch(err => {
        foto = "undefined";
        nombre = "undefined";
        // send mail with defined transport object
        let mailOptions = {
            from: "NeoB 👻 <" + mailAccount.USER + ">", // sender address
            to: destination, // list of receivers
            subject: "Reserva confirmada", // Subject line
            text: "Reserva confirmada", // plain text body
            html: pug.renderFile(__dirname+'/../views/confirmation_mail_template.pug',
                                {imgBiblioteca: foto, biblioteca: nombre
                                ,hashId:mailCostumer.hash,urlFinalizar: process.env.URL_BOTON_FINALIZAR})
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                var data = {
                    status: "Not sent",
                };
                res.send(data);
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            var data = {
                status: "Sent",
            };
            res.send(data);
        });
    });

    
    
};

// Enviar un correo de reserva
exports.MailEnviarReserva = (req, res) => {
    const mailCostumer = {
        hour: req.body.hourUser,
        seat: req.body.seatUser,
        name: req.body.nameUser,
        date: req.body.dateUser,
        mail: req.body.mailUser,
        hash: req.body.hash
    }

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
        user: mailAccount.USER, // generated ethereal user
        pass: mailAccount.PASSWORD, // generated ethereal password
        },
    });

    const hashedReservation = encrypt(mailCostumer.hash.toString());

    var idaula = req.body.idaula
    var foto,nombre;
    Aula.findByPk(idaula)
    .then(data => {

        foto = data.dataValues.imagen;
        nombre = data.dataValues.nombre;

        // send mail with defined transport object
        let mailOptions = {
            from: "NeoB 👻 <" + mailAccount.USER + ">", // sender address
            to: mailCostumer.mail, // list of receivers
            subject: "Reserva", // Subject line
            text: "Reserva", // plain text body
            html: pug.renderFile(__dirname+'/../views/reservation_mail_template.pug',
                                {imgBiblioteca: foto, biblioteca: nombre,
                                nombre: mailCostumer.name, fecha: mailCostumer.date , sitio: mailCostumer.seat, 
                                hIni:mailCostumer.hour.split("-")[0], hFin: mailCostumer.hour.split("-")[1], 
                                hashId:hashedReservation,urlConfirmar: process.env.URL_BOTON_CONFIRMAR
                                ,urlNoConfirmar: process.env.URL_BOTON_NOCONFIRMAR})
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            
            if (error) {
                var data = {
                    status: "No confirmado",
                };
                res.send(data);
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            var data = {
                status: "Confirmado",
            };
            res.send(data);
        });
    })
    .catch(err => {
        foto = "undefined";
        nombre = "undefined";
        // send mail with defined transport object
        let mailOptions = {
            from: "NeoB 👻 <" + mailAccount.USER + ">", // sender address
            to: mailCostumer.mail, // list of receivers
            subject: "Reserva", // Subject line
            text: "Reserva", // plain text body
            html: pug.renderFile(__dirname+'/../views/reservation_mail_template.pug',
                                {imgBiblioteca: foto, biblioteca: nombre,
                                nombre: mailCostumer.name, fecha: mailCostumer.date , sitio: mailCostumer.seat, 
                                hIni:mailCostumer.hour.split("-")[0], hFin: mailCostumer.hour.split("-")[1], 
                                hashId:hashedReservation,urlConfirmar: process.env.URL_BOTON_CONFIRMAR
                                ,urlNoConfirmar: process.env.URL_BOTON_NOCONFIRMAR})
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            
            if (error) {
                var data = {
                    status: "No confirmado",
                };
                res.send(data);
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            var data = {
                status: "Confirmado",
            };
            res.send(data);
        });


    });
    // Generate test SMTP service account from ethereal.email
};
*/
