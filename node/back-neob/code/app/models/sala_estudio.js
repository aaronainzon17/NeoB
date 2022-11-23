/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      sala_estudio.js
//Descripción:  Archivo para la definición del modelo de la tabla sala_estudio de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sala_estudio', {
    idsala: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aula',
        key: 'idaula'
      }
    }
  }, {
    sequelize,
    tableName: 'sala_estudio',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
