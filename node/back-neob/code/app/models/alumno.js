/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      alumno.js
//Descripción:  Archivo para la definición del modelo de la tabla alumno de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alumno', {
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    }
  }, {
    sequelize,
    tableName: 'alumno',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
