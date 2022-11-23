/*Proyecto:     NeoB
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      reserva.js
//Descripción:  Archivo para la definición del modelo de la tabla reserva de la BD*/

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserva', {
    idreserva: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    idalumno: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    idasiento: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    idaula: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'aula',
        key: 'idaula'
      }
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    horainicio: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    horafin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estadoasiento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    confirmadaDeadline: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    confirmada: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    horaconfirmacion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finalizada: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    escaneada: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    horaescaneo: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reserva',
    schema: 'neob_main_schema',
    timestamps: true
    });
};
