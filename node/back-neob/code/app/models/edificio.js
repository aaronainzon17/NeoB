/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      edificio.js
//Descripción:  Archivo para la definición del modelo de la tabla edificio de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('edificio', {
    idedificio: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    campus: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'campus',
        key: 'idcampus'
      }
    }
  }, {
    sequelize,
    tableName: 'edificio',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
