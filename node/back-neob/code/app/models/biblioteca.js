/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      biblioteca.js
//Descripción:  Archivo para la definición del modelo de la tabla biblioteca de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('biblioteca', {
    idbiblio: {
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
    tableName: 'biblioteca',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
