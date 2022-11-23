/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      administrador.js
//Descripción:  Archivo para la definición del modelo de la tabla administrador de la BD*/


const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('administrador', {
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    contrasenya: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastlogin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechafin: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'administrador',
    schema: 'neob_main_schema',
    timestamps: false
    });
};
