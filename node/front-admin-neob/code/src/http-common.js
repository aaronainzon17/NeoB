const BACK_IP = process.env.REACT_APP_BACKEND_IP || "localhost";
const BACK_PORT = process.env.REACT_APP_BACKEND_PORT || "8080";
const BACK_PROTOCOL = process.env.REACT_APP_HTTP_PROTOCOL || "http";
const BASE_URL = BACK_PROTOCOL+"://"+BACK_IP+":"+BACK_PORT+"/api/";
module.exports = {
  URL_ADMINISTRA: BASE_URL + "administra/",
  URL_ADMINISTRADOR: BASE_URL + "administrador/",
  URL_AULA: BASE_URL + "aula/",
  URL_AUTH_SIGNIN: BASE_URL + "auth/signin/",
  URL_AUTH_SIGNUP: BASE_URL + "auth/signup/",
  URL_AUTH_CHANGEPASSWORD: BASE_URL + "auth/changePassword/",
  URL_RESERVA: BASE_URL + "reserva/",
  URL_RESERVA_CS: BASE_URL + "reserva/changeState/",
  URL_RESERVA_CU: BASE_URL + "reserva/cleanUp/",
  URL_RESERVA_FH: BASE_URL + "reserva/fechaHora/",
  URL_RESERVA_ST: BASE_URL + "reserva/stats/"
};