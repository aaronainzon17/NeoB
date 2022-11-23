/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      reservation.service.js
//Descripción:  Servicio ReservationService utilizado por el front-end para gestionar la creación, confirmación 
                y finalización de reservas de asientos para los alumnos mediante operaciones del back-end*/

import axios from 'axios';
import AuthHeaderService from './auth-header.service';
import http from '../http-common';


class ReservationService {
    async createNewReservation(dataIN,MaxReservations) {
        dataIN.maxdiario=MaxReservations;
        //console.log(dataIN);
        try {
            return axios.post(http.URL_RESERVA,dataIN,AuthHeaderService.generalauthHeader());
        } catch (e){
            return {data:{status:"Failed"}};
        }
    }

    async confirmReservation(data) {
        const body = {
            idreserva: data.hash.toString()
        }
        try{
            const res1 = await axios.post(http.URL_RESERVA_CONFIRMAR,body,AuthHeaderService.generalauthHeader());
            return res1.data;
        }
        catch(e){
            return {status: "fail",idalumno: null};
        }
    }
    async dontConfirmReservation(data) {
        const body = {
            idreserva: data.hash.toString()
        }
        try{
            const res1 = await axios.post(http.URL_RESERVA_NOCONFIRMAR,body,AuthHeaderService.generalauthHeader());
            return res1.data;
        }
        catch(e){
            return {status: "fail"};
        }
    }

    async endReservation(data) {
        const body = {
            idreserva: data.hash.toString()
        }
        try{
            const res1 = await axios.post(http.URL_RESERVA_FINALIZAR,body,AuthHeaderService.generalauthHeader());
            return res1.data;
        }
        catch(e){
            return {status: "fail"};
        }
    }

    async scanReservation(data) {
        try{
            const res1 = await axios.post(http.URL_RESERVA_ESCANEAR,data,AuthHeaderService.generalauthHeader());
            return res1.data;
        }
        catch(e){
            return {status: "fail"};
        }
    }

    findAula(aula){
        return axios.get(http.URL_AULA + aula,AuthHeaderService.generalauthHeader());
    }
}

export default new ReservationService();


/*
async confirmReservation(data) {
    const body = {
        idreserva = data.hash.toString()
    }
    var idreserva = data.hash.toString();
    var path = http.URL_RESERVA + idreserva;
    try{
        const res1 = await axios.get(path,AuthHeaderService.generalauthHeader());
        if(res1.data.status === 500){//Error
            return{
                status: "deleted",
                idalumno: null
            };
        }else if(res1.data.confirmada === 1){//Ya confirmada
            return{
                status: "already confirmed",
                idalumno: null
            };
        }else if(res1.data.idalumno !== null){//encontrada correctamente  
            if(res1.data.confirmadaDeadline < Date.now()){//Caducada
                const res3 = await axios.delete(path,AuthHeaderService.generalauthHeader());
                if(res3.status === 500){//algo ha ido mal
                    ////console.log("fail");
                    return{
                        status: "fail",
                        idalumno: null
                    };
                }else if(res3.data.message === "reserva eliminada."){//ahora está confirmada
                    return{
                        status: "Caducada",
                        idalumno: null
                    };
                }
            }else
            {
                const res2 = await axios.put(path,{confirmada:1},AuthHeaderService.generalauthHeader());
                if(res2.status === 500){//algo ha ido mal
                    ////console.log("fail");
                    return{
                        status: "fail",
                        idalumno: null
                    };
                }else if(res2.data.message === "reserva actualizada."){//ahora está confirmada
                    return {
                        status: "Confirmed",
                        idalumno: res1.data.idalumno,
                        idaula: res1.data.idaula,
                    };
                }
            }
        }else{
            return{
                status: "fail",
                idalumno: null
            };  
        } 
    }
    catch(e){
        //console.log(e);
        return e;
    }
}
async dontConfirmReservation(data) {
        var idreserva = data.hash.toString();
        var path = http.URL_RESERVA  + idreserva;
        try{
            const res1 = await axios.get(path,AuthHeaderService.generalauthHeader());
            ////console.log(res1);
            if(res1.data.status === 500){//Error
                //console.log("already deleted");
                return{
                    status: "already deleted",
                };
            }else if(res1.data.confirmada === 1){//Ya confirmada
                return{
                    status: "already confirmed",
                };
            }else if(res1.data.idalumno !== null){//encontrada correctamente  
                const res2 = await axios.delete(path,AuthHeaderService.generalauthHeader());
                if(res2.status === 500){//algo ha ido mal
                    return{
                        status: "fail",
                    };
                }else if(res2.data.message === "reserva eliminada."){//ahora está eliminada
                    return {
                        status: "Deleted",
                        idaula: res1.data.idaula,
                    };
                }
            }else{
                return{
                    status: "fail",
                };  
            } 
        }
        catch(e){
            //console.log(e);
            return e;
        }
    }
    
async endReservation(data) {
        var idreserva = data.hash.toString();
        var path = http.URL_RESERVA  + idreserva;
        var dateNow = new Date(); 
        try{
            const res1 = await axios.get(path,AuthHeaderService.generalauthHeader());
            if(res1.data.status === 500){//Error
                ////console.log("already ended");
                return{
                    status: "already ended",
                };
            }else if(res1.data.finalizada === 1){//Ya finalizada
                return{
                    status: "already ended",
                };
            }else if(res1.data.confirmada === 0){//NO confirmada
                return{
                    status: "not confirmed",
                };
            }else if(res1.data.idalumno !== null){//encontrada correctamente
                var horaIni = res1.data.horainicio.split(":")[0];
                var minIni = res1.data.horainicio.split(":")[1];
                var horaFin = res1.data.horafin.split(":")[0];
                var minFin = res1.data.horafin.split(":")[1];
                var dia = res1.data.fecha.split("/")[0];
                var mes = res1.data.fecha.split("/")[1]-1;
                var agno = res1.data.fecha.split("/")[2];
                var dateIni = new Date(agno,mes,dia,horaIni,minIni);
                var dateFin = new Date(agno,mes,dia,horaFin,minFin);
                if(dateNow<dateIni && res1.data.escaneada === 0 ){//no ha empezado
                    const res2 = await axios.delete(path,AuthHeaderService.generalauthHeader());
                    ////console.log("deleted");
                    if(res2.status === 500){//algo ha ido mal
                        return{
                            status: "fail",
                        };
                    }else if(res2.data.message === "reserva eliminada."){
                        return {
                            status: "Ended",
                        };
                    }
                }else{//Ha empezado
                    var stringHoraFin;
                    if(dateNow<dateFin){//Sale pronto
                        ////console.log("sale pronto");
                        var aux = dateNow.toString().split(" ")[4];
                        stringHoraFin = aux.split(":")[0] + ":" + aux.split(":")[1];
                        ////console.log(stringHoraFin);
                    }else{
                        ////console.log("sale ontime");
                        stringHoraFin =  res1.data.horafin;
                    }
                    var params = {
                        finalizada:1,
                        estadoasiento: "S",
                        horafin: stringHoraFin
                    };
                    const res2 = await axios.put(path,params,AuthHeaderService.generalauthHeader());
                    if(res2.status === 500){//algo ha ido mal
                        ////console.log("fail");
                        return{
                            status: "fail",
                        };
                    }else if(res2.data.message === "reserva actualizada."){//ahora está finalizada
                        return {
                            status: "Ended",
                        };
                    }
                }
            }
        }catch(e){
            //console.log(e);
            return e;
        }
    }
async scanReservation(data) {
        //var idreserva = data.hash.idreserva; //Debe venir encriptado
        //var path = http.URL_RESERVA  + idreserva;
        try{
            const res = await axios.post(http.URL_RESERVA_FU,data,AuthHeaderService.generalauthHeader());
            if(res.data.status === "not found"){//Error
                return{
                    status: "not found",
                };
            }else{
                var path = http.URL_RESERVA  + res.data.idreserva;
                const res1 = await axios.get(path,AuthHeaderService.generalauthHeader());
                ////console.log(res1);
                if(res1.data.status === 500){//Error
                    return{
                        status: "fail",
                    };
                }else if(res1.data.escaneada === 1){//Ya escaneada
                    return{
                        status: "already scanned",
                    };
                }else if(res1.data.confirmada === 0){//no confirmada
                    return{
                        status: "not confirmed",
                    };
                }else if(res1.data.idalumno !== null){//encontrada correctamente  
                    var params = {
                        escaneada:1,
                        estadoasiento: "E",
                    };
                    const res2 = await axios.put(path,params,AuthHeaderService.generalauthHeader());
                    if(res2.status === 500){//algo ha ido mal
                        return{
                            status: "fail",
                        };
                    }else if(res2.data.message === "reserva actualizada."){//ahora está escaneada
                        return {
                            status: "Ended",
                        };
                    }
                }else{
                    return{
                        status: "fail",
                    };  
                } 
            }
        }
        catch(e){
            //console.log(e);
            return e;
        }
    }
*/