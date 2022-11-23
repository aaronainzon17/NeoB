/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      aulas.service.js
//Descripción:  Servicio AulasService utilizado por el front-end el cual permite acceder a la información de las aulas 
                administradas por un administrador mediante operaciones del back-end*/

import axios from 'axios';
import http from '../http-common';
import AuthHeaderService from './auth-header.service';

class AulasService {
    getAulas() {
        return axios.get(http.URL_AULA,AuthHeaderService.generalauthHeader());
    }

    delAula(idadmin,idaula) {
        return axios.delete(http.URL_ADMINISTRA + idadmin + "/" + idaula, { headers: AuthHeaderService.authHeader() });
    }

    addAula(idadmin,idaula,fechaini,fechafin) {
        return axios.post(http.URL_ADMINISTRA , {idadmin,idaula,fechaini,fechafin}, { headers:  AuthHeaderService.authHeader() });
    }
};

export default new AulasService();