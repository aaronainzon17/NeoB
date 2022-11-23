/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
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