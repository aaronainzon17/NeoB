/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      user.service.js
//Descripción:  Servicio UserService utilizado por el front-end para acceder a la información de los moderadores
                y administradores del sistema*/

import axios from 'axios';
import AuthHeaderService from './auth-header.service';
import http from '../http-common';

class UserService {
  getModeratorBoard() {
    return axios.get(http.URL_ADMINISTRADOR , { headers: AuthHeaderService.authHeader() });
  }

  getAdminBoard(usuario) {
    return axios.get(http.URL_ADMINISTRADOR + "adm/" + usuario, { headers: AuthHeaderService.authHeader() });
  }

  getModBoard(usuario) {
    return axios.get(http.URL_ADMINISTRADOR + "mod/" + usuario, { headers: AuthHeaderService.authHeader() });
  }

  delUser(usuario) {
    return axios.delete(http.URL_ADMINISTRADOR + usuario, { headers: AuthHeaderService.authHeader() });
  }

}

export default new UserService();
