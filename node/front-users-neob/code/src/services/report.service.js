/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      report.service.js
//Descripción:  Servicio ReportDataService utilizado por el front-end para gestionar los "reports" de positivos  
                por covid a través de operaciones del back-end*/

import axios from 'axios';
import AuthHeaderService from './auth-header.service';
import http from '../http-common';

class ReportDataService {
  sendReport(data) { 
    return axios.post(http.URL_REPORT,data,AuthHeaderService.generalauthHeader());
  }
}

export default new ReportDataService();