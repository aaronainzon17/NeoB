/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      reserva.controller.js
//Descripción:  Archivo con funciones para el control y manejo de la tabla reserva dentro de la BD y para
                distintas funcionalidades necesarias para llevar a cabo la reserva de asientos */

const nodemailer = require("nodemailer");
const mailAccount = require("../config/mail.config");
const pug = require('pug');
const db = require("../models");
const Reserva = db.reserva;
const Usuario = db.usuario;
const Alumno = db.alumno;
const Aula = db.aula;
const Op = db.Sequelize.Op;
const {decrypt} = require("../middleware/crypto");

// Crear y guardar un reserva
const CreateReserva = async(req, res) => {
    const reserva = {
        idalumno: req.body.idalumno,
        idasiento: req.body.idasiento,
        idaula: req.body.idaula,
        fecha: req.body.fecha,
        horainicio: req.body.horainicio,
        horafin: req.body.horafin,
        estadoasiento: req.body.estadoasiento,
        confirmadaDeadline: req.body.confirmadaDeadline,
        confirmada: req.body.confirmada,
        horaconfirmacion: "NO CONFIRMADA",
        finalizada: req.body.finalizada,
        escaneada: req.body.escaneada,
        horaescaneo: "NO ESACANEADA"
    };
    console.log(reserva);
    const maxdiario = req.body.maxdiario;

    try {
        const user = await Usuario.findByPk(req.body.idalumno);
        if(user === null){
          const user2 = await Usuario.create({idusuario: req.body.idalumno});
        }
        const alumno =  await Alumno.findByPk(req.body.idalumno);
        if(alumno === null){
          const alumno2 = await Alumno.create({correo: req.body.idalumno,});
        }
        const num2 = await Reserva.count({where: {
            fecha : { [Op.eq]: reserva.fecha}, 
            idalumno: { [Op.eq]: reserva.idalumno},
            idaula: {[Op.eq]: reserva.idaula}, 
            horainicio: {[Op.eq]: reserva.horainicio}, 
            horafin: {[Op.eq]: reserva.horafin}, 
            confirmada: {[Op.not]: -1},
            finalizada: {[Op.eq]: 0}
        }});
        if (num2 >= 1 && reserva.idalumno !== "hypatia.partes") {
            return res.send({status: "Reserva_Duplicada"})
        }

        const num3 = await Reserva.count({where: {
            fecha : { [Op.eq]: reserva.fecha}, 
            idalumno: { [Op.eq]: reserva.idalumno},
            confirmada: {[Op.not]: -1},
        }});
        if (num3 >= maxdiario && reserva.idalumno !== "hypatia.partes") {
            return res.send({status: "Max_alcanzado"})
        }
        
        const existe = await Reserva.findOne({where: {
            fecha : { [Op.eq]: reserva.fecha}, 
            idalumno: { [Op.eq]: reserva.idalumno},
            horainicio: {[Op.eq]: reserva.horainicio},
            confirmada: {[Op.eq]: -1},
        }});
        let data = null
        if (existe !== null) {
            await Reserva.update(reserva,{where:{
                fecha: { [Op.eq]: reserva.fecha}, 
                idalumno: { [Op.eq]: reserva.idalumno},
                horainicio: {[Op.eq]: reserva.horainicio},
                confirmada: {[Op.eq]: -1}
            }})
            data = existe
        }else{
            data = await Reserva.create(reserva)
        }
        

        return res.send({status: "OK", idreserva: data.dataValues.idreserva});
    }catch(err){
        console.log(err);
        return res.send({status: "error guardando reserva",error: err});
    }
};

const ConfirmReserva = async(req, res) => {
    const idreserva = decrypt(req.body.idreserva.toString());
    try{
        const data = await Reserva.findOne({ where: {idreserva: { [Op.eq]: `${idreserva}`} } });
        if(data.dataValues.confirmada === -1){
            return res.send({status: "previamente cancelada",idalumno: null});
        }
        if(data.dataValues.confirmada === 1){//Reserva ya confirmada
            return res.send({status: "already confirmed",idalumno: null})
        }else{ 
            //NO está confirmada
            var dia = new Date()
            var horaConfirmacion = dia.getHours().toString() + ":" + dia.getMinutes().toString()

            if(data.dataValues.confirmadaDeadline < Date.now()){
                //Caducada
                const num = await Reserva.update({confirmada:-1, horaconfirmacion: horaConfirmacion},{where:{idreserva:{ [Op.eq]: `${idreserva}`}}})
                if (num === 1){
                    return  res.send({status: "Caducada",idalumno: null});
                }else{
                    return  res.send({status: "fail",idalumno: null});
                }
            }else{//No está caducada
                const num = await Reserva.update({confirmada:1, horaconfirmacion: horaConfirmacion},{where:{idreserva:{ [Op.eq]: `${idreserva}`}}})
                if (num.toString() === "1"){
                    return  res.send({status: "Confirmed",idalumno: data.dataValues.idalumno,idaula: data.dataValues.idaula,});
                }else{
                    return  res.send({status: "fail",idalumno: null});
                }
            }
        }   
    }catch(err){
        return  res.send({status: "fail",idalumno: null});
    }
};

const NoConfirmReserva = async(req, res) => {
    const idreserva = decrypt(req.body.idreserva.toString());
    try{
        const data = await Reserva.findOne({ where: {idreserva: { [Op.eq]: `${idreserva}`} } });
        if(data.dataValues.confirmada === -1){
            return res.send({status: "already deleted"});
        }
        if(data.dataValues.confirmada === 1){//Reserva ya confirmada
            return res.send({status: "already confirmed"});
        }else{//NO está confirmada
            var dia = new Date()
            var horaConfirmacion = dia.getHours().toString() + ":" + dia.getMinutes().toString()
            const num = await Reserva.update({confirmada: -1, horaconfirmacion: horaConfirmacion, estadoasiento: "L"},{where: { idreserva: { [Op.eq]: `${idreserva}`} } });
            if (num[0] === 1){
                return  res.send({status: "Deleted",idaula: data.dataValues.idaula,});
            }else{
                return  res.send({status: "fail"});
            }
        }   
    }catch(err){
        return  res.send({status: "fail"});
    }
};

const EndReserva = async(req, res) => {
    const idreserva = decrypt(req.body.idreserva.toString());
    const dateNow = new Date();
    try{
        const data = await Reserva.findOne({ where: {idreserva: { [Op.eq]: `${idreserva}`} } });
        if(data === null || data.dataValues.finalizada === 1){
            return res.send({status: "already ended"});
        }
        if(data.dataValues.confirmada === 0){//Reserva no confirmada
            return res.send({status: "not confirmed"});

        }else{
            //Está confirmada
            const horaIni = data.dataValues.horainicio.split(":")[0];
            const minIni = data.dataValues.horainicio.split(":")[1];
            const horaFin = data.dataValues.horafin.split(":")[0];
            const minFin = data.dataValues.horafin.split(":")[1];
            const dia = data.dataValues.fecha.split("/")[0];
            const mes = data.dataValues.fecha.split("/")[1]-1;
            const agno = data.dataValues.fecha.split("/")[2];
            const dateIni = new Date(agno,mes,dia,horaIni,minIni);
            const dateFin = new Date(agno,mes,dia,horaFin,minFin);

            if(dateNow<dateIni && data.dataValues.escaneada === 0 ){
                // No ha empezado
               const num = await Reserva.update({confirmada:-1, horaconfirmacion: horaConfirmacion},{where: { idreserva: { [Op.eq]: `${idreserva}`} } });
                if (num === 1){
                    return  res.send({status: "Ended"});
                }else{
                    return  res.send({status: "fail"});
                }
            }else{//Ha empezado
                var stringHoraFin
                var params = {
                    finalizada:1,
                    estadoasiento: "L", //Se ha cambiado de Sucio a Libre 
                    horafin: stringHoraFin
                };
                if(dateNow<dateFin){//Sale pronto
                    var aux = dateNow.toString().split(" ")[4];
                    stringHoraFin = aux.split(":")[0] + ":" + aux.split(":")[1];
                }else{
                    stringHoraFin =  data.horafin;
                }
                const num = await Reserva.update(params,{where:{idreserva:{ [Op.eq]: `${idreserva}`}}})
                if (num.toString() === "1"){
                    return  res.send({status: "Ended"});
                }else{
                    return  res.send({status: "fail"});
                }
            }
        }
    }catch(err){
        return  res.send({status: "fail"});
    }
}

const ScanReserva = async(req, res) => {
    const idalumno = req.body.idalumno
    const idaula = req.body.idaula
    const idasiento = req.body.idasiento
    const fecha = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const horainicio = req.body.horainicio
    console.log({hora: horainicio, fecha: fecha})
    var params = {
        escaneada:1,
        estadoasiento: "E",
    };
    //Reserva de un alumno en asiento, aula, fecha y franja dada
    try{
        const data = await Reserva.findOne({where: {
                //idalumno: { [Op.eq]: `${idalumno}`}, 
                idaula: { [Op.eq]: `${idaula}`},
                idasiento: { [Op.eq]: `${idasiento}`},
                fecha: { [Op.eq]: `${fecha}`},
                horainicio: { [Op.eq]: `${horainicio}`},}})
        console.log(data)
        if(data !== null){//Existe su reserva
            if (data.dataValues.idalumno !== idalumno){
                return res.send({status: "ya ocupado"});
            }
            if(data.dataValues.escaneada === 1){
                return res.send({status: "already scanned"});
            }
            if(data.dataValues.confirmada === 0){
                return res.send({status: "not confirmed"});
            }
            var dia = new Date()
            var horaEscaneo = dia.getHours().toString() + ":" + dia.getMinutes().toString()
            params.horaescaneo = horaEscaneo
            const num = await Reserva.update(params,{where:{idreserva:{ [Op.eq]: `${data.dataValues.idreserva}`}}})
            if (num.toString() === "1"){
                //console.log()
                return  res.send({status: "Scanned"});
            }else{
                return  res.status(500).send({status: "fail"});
            }
        }else{
            return res.send({status: "not found"});
        }

    }catch(err){
        console.log("scan");
        console.log(err)
        return res.status(500).send({status: "fail"});
    }

}

const ReservaStats = async(req, res) => {
    const idaula = req.body.idaula;
    const horainicio = req.body.horainicio;
    const fecha = req.body.fecha;
    try {
        //Contar reservas de asientos ocupados o escaneados en una sala para una fecha y franja horaria 
        //No cuenta las reservas de los admins: ID ALUMNO RESERVADO 0
        const ocupados = await Reserva.count({where: 
            {fecha : { [Op.eq]: `${fecha}`},horainicio: { [Op.eq]: `${horainicio}`},idalumno:{ [Op.ne]: '0'},idaula: { [Op.eq]: `${idaula}`},estadoasiento: { [Op.or]: ['O','E']}
            }
        })
        const escaneados = await Reserva.count({where: 
            {fecha : { [Op.eq]: `${fecha}`},horainicio: { [Op.eq]: `${horainicio}`},idalumno:{ [Op.ne]: '0'},
            idaula: { [Op.eq]: `${idaula}`},estadoasiento: { [Op.or]: ['E']}
            }
        })
        /*
        console.log("count reserva")
        console.log(ocupados)
        console.log(escaneados)*/
        return res.send({ocupados:ocupados,escaneados:escaneados});
    }catch (e){
        return res.send({status: 500});
    }
};

const ReservaCleanUP = async(req, res) => {
    var now =  Date.now();
    try{
        const num = await Reserva.destroy({   where: {confirmadaDeadline : { [Op.lt]: `${now}`},confirmada: { [Op.eq]: 0}}});
        /*console.log("destriy reserva")
        console.log(num)*/
        return res.send({ message: `${num} reservas eliminadas.` });
    }catch(err){
        return res.status(500).send({message:err.message || "Error eliminando reservas."});
    }
};

//Cambia estados de reservas, Los administradores realizan reservas con ID ALUMNO RESERVADO 0.
const ReservaChangeState = async(req, res) => {
    const NuevoEstado =  req.body.estadoNuevo;

    try{
        //Busca si existe la reserva
        const data = await Reserva.findOne(
            {   attributes: ['idreserva','fecha','idalumno','idaula','finalizada'],
                where: { idaula: { [Op.eq]: `${req.body.idaula}`},
                idasiento: { [Op.eq]: `${req.body.idasiento}` },
                fecha: { [Op.eq]: `${req.body.fecha}` },
                horainicio: { [Op.eq]: `${req.body.horaini}` } }
            
        });
        console.log("findone reserva")
        console.log(data)
        if(data !== null){ //Existe la reserva
            if (data.idalumno !== 0 && data.finalizada === 0 ){
                //Alumno con reserva en curso recibe email de cambio
                enviarMail(data.idalumno,data.fecha,NuevoEstado,data.idaula);
            }
            //if(NuevoEstado === 'L'){ //Si se quiere marcar asiendo como libre:
            //    //Borrar reserva antigua, (echar al alumno del asiento)
            //    const num = await Reserva.destroy({where: { idreserva: { [Op.eq]: `${data.idreserva}`} } });
            //}else{
                //Actualizar la reserva
                var cambios = {
                    estadoasiento: req.body.estadoNuevo,
                    confirmada: 1,
                    finalizada: req.body.estadoNuevo === "S" ? 1:0,
                    escaneada: req.body.estadoNuevo === "E" ? 1:0
                }
                const update = await Reserva.update(cambios, {where: { idreserva: { [Op.eq]: `${data.idreserva}`} } });
                return res.send({status: "ok"});
            //}  
        }else{//No existe reserva, Cambio de asiento Libre por parte del administrador
            const reserva = {
                idalumno: "ADMINISTRADOR",
                idasiento: req.body.idasiento,
                idaula: req.body.idaula,
                fecha: req.body.fecha,
                horainicio: req.body.horaini,
                horafin: req.body.horafin,
                estadoasiento: req.body.estadoNuevo,
                confirmadaDeadline: 0,
                confirmada: 1, 
                finalizada: req.body.estadoNuevo === "S" ? 1:0,
                escaneada: req.body.estadoNuevo === "E" ? 1:0, 
                horaconfirmacion: "MODIFICADA POR ADMIN",
                horaescaneo: "MODIFICADA POR ADMIN"
            }
            //Insertar el alumno 0 si no existe:
            const user = await Usuario.findByPk("ADMINISTRADOR");
            if(user === null){
                await Usuario.create({idusuario: "ADMINISTRADOR"});
                //const dataAlumn = await Alumno.create({correo: "hypatia.partes"});
            }
            await Reserva.create(reserva);
            return res.send({status: "ok"});
        }
    }catch(e){
        console.log(e)
        return res.send({status: "fail"});
    }
};

const GetReservas = async(req, res) => {
    const idAula = req.body.idaula;
    const horaIni = req.body.horainicio;
    const dia = req.body.fecha;
    try{
        //Buscar reservas por franja aula y día
        const data = await Reserva.findAll({attributes: ['idasiento','estadoasiento'],
            where: {
                fecha : { [Op.eq]: `${dia}`},
                horainicio: { [Op.eq]: `${horaIni}`}, 
                idaula: { [Op.eq]: `${idAula}`}
            }});
        
        console.log(data)
        return res.send({filas: data, status: 200});

    }catch{
        return  res.status(500).send({message: err.message || "Error recuperando reservas.",});
    }
};

const enviarMail = async(destinatario,fecha,estado,idaula) =>{
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

    var stringEstado;
    if(estado === "L"){
        stringEstado = "Libre";
    }else if(estado === "N"){
        stringEstado = "No disponible";
    }else if(estado === "O"){
        stringEstado = "Ocupado";
    }else if(estado === "E"){
        stringEstado = "Escaneado";
    }else if(estado === "S"){
        stringEstado = "Sucio";
    }

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
        to: destinatario.toString() + "@unizar.es", // list of receivers
        subject: "Modificación en la reserva", // Subject line
        text: "Modificación en la reserva", // plain text body
        html: pug.renderFile(__dirname+'/../views/cambiarEstado_mail_template.pug',
                            {imgBiblioteca: foto , fecha: fecha,nombre: nombre,
                            estado: stringEstado})
    };

    // Enviar los contactos del positivo al corresponsal de covid del campus correspondiente
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
};

module.exports = {CreateReserva,ConfirmReserva,NoConfirmReserva,EndReserva,ScanReserva,ReservaCleanUP,ReservaChangeState,GetReservas,ReservaStats}