/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
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