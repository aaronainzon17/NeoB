/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      seat.service.js
//Descripción:  Servicio SeatService utilizado por el front-end para acceder al estado de los asientos
                de un aula en un momento determinado mediante operaciones del back-end*/


import axios from 'axios';
import AuthHeaderService from './auth-header.service';
import http from '../http-common';


class SeatService {

  async getSeatsStatus(data) 
  { var estados = new Map();
    const fecha = data.fecha;
    const horainicio = data.horainicio;
    const idaula = data.idaula;
    var dataaux = {
      idaula : idaula,
      horainicio: horainicio,
      fecha: fecha
    };
    try{
      const res1 = await axios.get(http.URL_AULA + idaula,AuthHeaderService.generalauthHeader());
      const aforoactual = res1.data.aforoactual;
      await axios.post(http.URL_RESERVA_CU,dataaux,AuthHeaderService.generalauthHeader());
      ////console.log(del);
      const resume = await axios.post(http.URL_RESERVA_FH,dataaux,AuthHeaderService.generalauthHeader());
      if(resume.status === 200){//todo ok
        var estado="";
        for (const fila in resume.data.filas){
          if(resume.data.filas[fila].estadoasiento === "O" ||resume.data.filas[fila].estadoasiento === "E" ){
            estado = "ocupado";
          }else if(resume.data.filas[fila].estadoasiento === "S"){
            estado = "sucio";
          }
          else if(resume.data.filas[fila].estadoasiento === "N"){
            estado = "no disponible";
          }else if(resume.data.filas[fila].estadoasiento === "L"){
            estado = "libre";
          }
          estados.set(resume.data.filas[fila].idasiento,estado);
        }
        return {
          estados: estados,
          aforoactual: aforoactual,
          status: "ok"
        };
      }
      return {
        estados: estados,
        status: "fail"
      };
    }catch(e){
      return {
        estados: estados,
        status: "fail"
      };
    }
  }
}

export default new SeatService();