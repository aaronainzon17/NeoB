const BACK_IP = process.env.REACT_APP_BACKEND_IP || "localhost";
const BACK_PORT = process.env.REACT_APP_BACKEND_PORT || "8080";
const BACK_PROTOCOL = process.env.REACT_APP_HTTP_PROTOCOL || "http";
const BASE_URL = BACK_PROTOCOL+"://"+BACK_IP+":"+BACK_PORT+"/api/";
module.exports = {
  URL_AULA: BASE_URL + "aula/",
  URL_RESERVA: BASE_URL + "reserva/",
  URL_RESERVA_CONFIRMAR: BASE_URL + "reserva/confirmar",
  URL_RESERVA_NOCONFIRMAR: BASE_URL + "reserva/noconfirmar",
  URL_RESERVA_FINALIZAR: BASE_URL + "reserva/finalizar",
  URL_RESERVA_ESCANEAR: BASE_URL + "reserva/escanear",
  URL_RESERVA_CU: BASE_URL + "reserva/cleanUp/",
  URL_RESERVA_FH: BASE_URL + "reserva/fechaHora/",
  URL_MAIL_RES: BASE_URL + "mail/reserva/",
  URL_MAIL_CONF: BASE_URL + "mail/confirmacion/",
  URL_REPORT: BASE_URL + "report/",
};