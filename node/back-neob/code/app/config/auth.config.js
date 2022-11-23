/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      auth.config.js
//Descripción:  Archivo con parámetros de configuración para la autenticación de usuarios  */

module.exports = {
    secret: process.env.AUTH_SECRET,
    secretTokenStr: process.env.AUTH_TOKEN
};