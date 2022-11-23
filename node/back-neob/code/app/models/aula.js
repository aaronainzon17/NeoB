/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      aula.js
//Descripción:  Archivo para la definición del modelo de la tabla aula de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aula', {
    idaula: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aforomax: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    aforoactual: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    politicareport: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edificio: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'edificio',
        key: 'idedificio'
      }
    }
  }, {
    sequelize,
    tableName: 'aula',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
