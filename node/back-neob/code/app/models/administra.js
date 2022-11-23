/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      administra.js
//Descripción:  Archivo para la definición del modelo de la tabla administra de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('administra', {
    idaula: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aula',
        key: 'idaula'
      }
    },
    idadmin: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'administrador',
        key: 'usuario'
      }
    },
    fechaini: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    tableName: 'administra',
    schema: 'neob_main_schema',
    timestamps: true
    });
};
