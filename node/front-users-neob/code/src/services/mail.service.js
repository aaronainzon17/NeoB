/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      mail.service.js
//Descripción:  Servicio MailDataService utilizado por el front-end para gestionar los envíos de 
                emails a través de operaciones del back-end*/


import axios from 'axios';
import AuthHeaderService from './auth-header.service';
import http from '../http-common';

class MailDataService {
  sendBookingRequest(data) {
    return axios.post(http.URL_MAIL_RES,data,AuthHeaderService.generalauthHeader());
  }

  sendBookingConfirmation(data) {
    return axios.post(http.URL_MAIL_CONF,data,AuthHeaderService.generalauthHeader());;
  }

  findAula(aula){
    return axios.get(http.URL_AULA + aula,AuthHeaderService.generalauthHeader());
  }
}

export default new MailDataService();