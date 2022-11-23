/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      db.config.js
//Descripción:  Archivo con parámetros de configuración para la base de datos  */

module.exports = {
    HOST: process.env.DB || "localhost",
    PORT: process.env.DB_PORT ||"22222",
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME || "neob",
    SCHEMA: process.env.DB_SCHEMA || "neob_main_schema",
    dialect: process.env.DB_DIALECT || "postgres",
};