/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      mail.config.js
//Descripción:  Archivo con parámetros de configuración para la cuenta de email de NeoB  */

module.exports = {
    USER: process.env.MAIL_USER,
    PASSWORD: process.env.MAIL_PASSWORD,
    DOMAIN: process.env.MAIL_DOMAIN
};