/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      usuario.js
//Descripción:  Archivo para la definición del modelo de la tabla usuario de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    idusuario: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
