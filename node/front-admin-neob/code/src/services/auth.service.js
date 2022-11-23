/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      auth.service.js
//Descripción:  Servicio AuthenticationDataService utilizado por el front-end para gestionar las operaciones
                de login, logout y signup de los administradores contra el back-end y para acceder a la información
                de los administadores con sesión iniciada*/

import axios from "axios";
import AuthHeaderService from './auth-header.service';
import http from '../http-common';

class AuthenticationDataService {
  login(usuario, contrasenya) {
    return axios.post(http.URL_AUTH_SIGNIN, {usuario,contrasenya})
      .then(response => {
        //console.log(response.data)
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      }).catch(e => {
        //console.log(e);
      });
  }

  signup(usuario,rol,fechaVencimiento) { //signup(usuario,contrasenya,rol) Contraseña se auto-genera y se envía por mail
    const data = {usuario: usuario, rol: rol, fechafin: fechaVencimiento}
    return axios.post(http.URL_AUTH_SIGNUP, data, { headers: AuthHeaderService.authHeader() }); 
  }

  changePassword(data) {
    return axios.post(http.URL_AUTH_CHANGEPASSWORD, data,{ headers: AuthHeaderService.authHeader() }); 
  }

  logout() {
    localStorage.removeItem("user");
    window.location.reload()
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthenticationDataService();