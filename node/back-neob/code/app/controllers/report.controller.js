/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      report.controller.js
//Descripción:  Archivo con funciones para la implementación del servicio de "Reportar Positivo por covid" 
                proporcionado por el sistema de NeoB */

const nodemailer = require("nodemailer");
const mailAccount = require("../config/mail.config");
const pug = require('pug');
const reserva = require("./reserva.controller");
const db = require("../models");
const Aula = db.aula;
const Edificio = db.edificio;
const Campus = db.campus;
const Reserva = db.reserva;
const Op = db.Sequelize.Op;



// Reporta al responsable covid correspondiente un posible positivo con la información de
// los alumnos a los que afecta
const ReportarPositivo = async (req, res) => {
    const usuario = req.body.usuario;
    const fecha = req.body.fecha; //yyyy-mm-dd
    const auxdate = new Date(fecha.split("-")[0],fecha.split("-")[1]-1,fecha.split("-")[2]); //-1 por meses de 0-11
    auxdate.setDate(auxdate.getDate()-4);
    const auxdateS = auxdate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const fechaLim = (auxdateS.split("/")[1]) +"/"+(auxdateS.split("/")[0])+"/"+(auxdateS.split("/")[2]);

    try{
        // Todas las Aulas y asientos en las que estuvo el usuario en la última semana
        const aulas = await Reserva.findAll({attributes: ['idaula'], group : ['idaula'],where: {fecha : { [Op.gte]: `${fechaLim}`},idalumno: { [Op.eq]: `${usuario}`},}});

        for (const aula in aulas){
            //Buscar info del aula: edificio y coordinador covid del campus
            const data = await Aula.findByPk(aulas[aula].dataValues.idaula);
            var NombreAula = data.dataValues.nombre;
            var idAula = data.dataValues.idaula;
            var imagen = data.dataValues.imagen;
            var politicareport = data.dataValues.politicareport; 
            const edificio = await Edificio.findByPk(data.dataValues.edificio);
            const campus = await Campus.findByPk(edificio.dataValues.campus)
            var contacto_covid = campus.dataValues.contacto_covid;
            // Para un Aula todas las veces que ha estado 
            try{
                const reservas = await  Reserva.findAll({attributes: ['idasiento','horainicio','fecha'], 
                where:{fecha : { [Op.gte]: `${fechaLim}`},idalumno: { [Op.eq]: `${usuario}`},
                idaula: { [Op.eq]: `${idAula}`}}})
                
                for (const reserva in reservas){
                    //Calcular asientos en riesgo
                    var fechaContacto = reservas[reserva].dataValues.fecha;
                    var horaInicioContacto = reservas[reserva].dataValues.horainicio;
                    var sitio = reservas[reserva].dataValues.idasiento.toString();

                    var fila = parseInt(sitio[0]);
                    if(sitio.length > 2){
                    fila = fila*10 + parseInt(sitio[1]);
                    var columna = sitio[2].charCodeAt(0);
                    }else{
                    var columna = sitio[1].charCodeAt(0);
                    }

                    var auxDstReport = politicareport;
                    var columnas=[String.fromCharCode(columna)], filas = [fila];
                    var asientosRiesgo = [];
                    var aux;
                    //filas hacia atrás
                    while(auxDstReport>0){
                        if((fila - auxDstReport) > 0){
                        filas.push(fila-auxDstReport);
                        }
                        auxDstReport--;
                    };
                    auxDstReport = politicareport;
                    //filas hacia delante
                    while(auxDstReport>0){
                        filas.push(fila+auxDstReport);
                        auxDstReport--;                      
                    };
                    auxDstReport = politicareport;
                    //columnas hacia izda
                    while(auxDstReport>0){
                        aux=String.fromCharCode(columna - auxDstReport);
                        if(aux.match(/[A-Z]/i)){
                        columnas.push(aux);
                        }
                        auxDstReport--;
                    };
                    auxDstReport = politicareport;
                    //columnas hacia dcha
                    while(auxDstReport>0){
                    aux=String.fromCharCode(columna + auxDstReport);
                    if(aux.match(/[A-Z]/i)){
                        columnas.push(aux);
                    }
                    auxDstReport--;
                    };

                    for(var fila in filas){
                    for(var columna in columnas){
                        asientosRiesgo.push(filas[fila]+columnas[columna].toString());
                    }
                    }
                    //console.log(asientosRiesgo)
                    const data = await  Reserva.findAll(
                        {   attributes: ['idalumno','horafin'], 
                            where: {fecha : { [Op.eq]: `${fechaContacto}`},
                            idalumno: { [Op.ne]: `${usuario}`}, idalumno: {[Op.ne]: '0' },
                            idaula : {[Op.eq]: `${idAula}`},
                                    horainicio : {[Op.eq]: `${horaInicioContacto}`},idasiento : {[Op.any]: asientosRiesgo}}
                        });
                    var StringContactos = "";
                    for(const contacto in data){
                        StringContactos = StringContactos + data[contacto].dataValues.idalumno + ", fecha: "+
                        fechaContacto+ ", franja horaria: "+ horaInicioContacto+ " - " + data[contacto].dataValues.horafin + "\n";
                    }
                    if(StringContactos !== ""){
                        StringContactos= "Alumno informando de positivo por covid: " +usuario+"\n"+StringContactos;
                        enviarMail(contacto_covid,NombreAula,StringContactos,imagen);
                    }
                }
            }catch(err){
                console.log(err)
                var message = "Error intentando reportar positivo por covid del alumno: " + usuario +"\n";
                message = message + "Fecha del aviso: "+fecha+"\n";
                message = message + "Revise la incidencia manualmente.";
                enviarMail(contacto_covid,NombreAula,message,imagen);
                //return res.send(500).send({message: err.message || "Error reportando positivo." })
            }
        }
        return res.send({status: "REPORTADO"});
    }catch (err){
        console.log(err)
        return res.status(500).send({message: err.message || "Error reportando positivo." });
    }
};

function enviarMail(destinatario,biblioteca,stringContactos,imagen){
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
        to: destinatario, // list of receivers
        subject: "Protocolo de actuación", // Subject line
        text: "Protocolo de actuación", // plain text body
        html: pug.renderFile(__dirname+'/../views/positive_mail_template.pug',
                            {imgBiblioteca: imagen, biblioteca: biblioteca,
                            contactos: stringContactos})
    };

    // Enviar los contactos del positivo al corresponsal de covid del campus correspondiente
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return "error";
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        return "OK";
    });
};


module.exports = {ReportarPositivo}


/*
//Busca la aulas
Reserva.findAll(
    // Todas las Aulas y asientos en las que estuvo el usuario en la última semana
{   attributes: ['idaula'], 
    group : ['idaula'],
    where: 
    {
        fecha : { [Op.gte]: `${fechaLim}`},
        idalumno: { [Op.eq]: `${usuario}`}, 
    }
}).then(data =>{
    for (const aula in data){
        Aula.findByPk(data[aula].idaula)
        .then(data => { // Busco el edificio del aula
            var NombreAula = data.nombre;
            var idAula = data.idaula;
            var imagen = data.imagen;
            var politicareport = data.politicareport;
            Edificio.findByPk(data.edificio)
            .then(data => { //Busco Coordinador del campus
                Campus.findByPk(data.campus)
                .then(data3 => {
                    var contacto_covid = data3.contacto_covid;
                    // Para un Aula todas las veces que ha estado 
                    Reserva.findAll({attributes: ['idasiento','horainicio','fecha'], 
                        where:{fecha : { [Op.gte]: `${fechaLim}`},idalumno: { [Op.eq]: `${usuario}`},
                        idaula: { [Op.eq]: `${idAula}`}}})
                    .then(data =>{
                        for(const reserva in data){
                            var fechaContacto = data[reserva].dataValues.fecha;
                            var horaInicioContacto = data[reserva].dataValues.horainicio;
                            var sitio = data[reserva].dataValues.idasiento.toString();

                            var fila = parseInt(sitio[0]);
                            if(sitio.length > 2){
                              fila = fila*10 + parseInt(sitio[1]);
                              var columna = sitio[2].charCodeAt(0);
                            }else{
                              var columna = sitio[1].charCodeAt(0);
                            }

                            var auxDstReport = politicareport;
                            var columnas=[String.fromCharCode(columna)], filas = [fila];
                            var asientosRiesgo = [];
                            var aux;
                            //filas hacia atrás
                            while(auxDstReport>0){
                                if((fila - auxDstReport) > 0){
                                  filas.push(fila-auxDstReport);
                                }
                                auxDstReport--;
                            };
                            auxDstReport = politicareport;
                            //filas hacia delante
                            while(auxDstReport>0){
                                filas.push(fila+auxDstReport);
                                auxDstReport--;                      
                            };
                            auxDstReport = politicareport;
                            //columnas hacia izda
                            while(auxDstReport>0){
                                aux=String.fromCharCode(columna - auxDstReport);
                                if(aux.match(/[A-Z]/i)){
                                  columnas.push(aux);
                                }
                                auxDstReport--;
                            };
                            auxDstReport = politicareport;
                            //columnas hacia dcha
                            while(auxDstReport>0){
                              aux=String.fromCharCode(columna + auxDstReport);
                              if(aux.match(/[A-Z]/i)){
                                columnas.push(aux);
                              }
                              auxDstReport--;
                            };

                            for(var fila in filas){
                              for(var columna in columnas){
                                asientosRiesgo.push(filas[fila]+columnas[columna].toString());
                              };
                            };
                            //console.log(filas);
                            //console.log(columnas);
                            //console.log(auxDstReport);
                            //console.log(asientosRiesgo);
                            Reserva.findAll(
                            {   attributes: ['idalumno','horafin'], 
                                where: {fecha : { [Op.eq]: `${fechaContacto}`},idalumno: { [Op.ne]: `${usuario}`},idaula : {[Op.eq]: `${idAula}`},
                                        horainicio : {[Op.eq]: `${horaInicioContacto}`},idasiento : {[Op.any]: asientosRiesgo}}
                            }).then(data =>{
                                var StringContactos = "";
                                for(const contacto in data){
                                    StringContactos = StringContactos + data[contacto].dataValues.idalumno + ", fecha: "+
                                    fechaContacto+ ", franja horaria: "+ horaInicioContacto+ " - " + data[contacto].dataValues.horafin + "\n";
                                }
                                if(StringContactos !== ""){
                                    enviarMail(contacto_covid,NombreAula,StringContactos,imagen);
                                }
                            }).catch(err =>{
                                res.status(500).send({
                                    message:
                                    err.message || "Error buscando contactos"
                                });
                            });
                        } 
                    })
                    .catch(err =>{
                        res.status(500).send({
                            message:
                            err.message || "Error buscando las incidencia"
                        });
                    });
                })
                .catch(err =>{
                    res.status(500).send({
                        message:
                        err.message || "Error buscando contacto covid"
                    });
                });
            }).catch(err =>{
                res.status(500).send({
                message:
                        err.message || "Error buscando edificio"
                });
            });
        }).catch(err =>{
            res.status(500).send({
            message:
                    err.message || "Error buscando aula"
            });
        });
    }
    res.send({
        status: "REPORTADO"
    });
}).catch(err =>{
    res.status(500).send({
        message:
        err.message || "Error buscando las aulas.",
    });
});*/