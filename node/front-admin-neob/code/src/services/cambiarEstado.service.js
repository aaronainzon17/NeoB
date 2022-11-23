/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García, Arturo Calvera Tonin
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      cambiarEstado.service.js
//Descripción:  Servicio CambiarEstadoDataService utilizado por el front-end para que los administradores cambien
                el estado de los asientos de un aula*/

import axios from 'axios';
import AuthHeaderService from './auth-header.service';
import http from '../http-common'

class ChangeSeatAulaState {
    updateSeat(idaula,idasiento,estadoNuevo,idadmin,fecha,horaini,horafin) {
        var data = {
            idaula,
            idasiento,
            estadoNuevo,
            idadmin,
            fecha,
            horaini,
            horafin
        };
        console.log({'Cambio de estado':data});
        return axios.post(http.URL_RESERVA_CS,data,AuthHeaderService.generalauthHeader());
    }

    updateAula(idaula,data){
        return axios.put(http.URL_AULA + idaula,data,AuthHeaderService.generalauthHeader());
    }
}
                
export default new ChangeSeatAulaState();