/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      index.js
//Descripción:  Archivo para la sincronización del modelo de BD y con los modelos definidos del back-end*/

const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  schema: dbConfig.SCHEMA, 
  dialect: dbConfig.dialect,
  //operatorsAliases: false,
  operatorsAliases: 0,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./usuario.js")(sequelize, Sequelize);
db.admin = require("./administrador.js")(sequelize, Sequelize);
db.alumno = require("./alumno.js")(sequelize, Sequelize);
db.campus = require("./campus.js")(sequelize, Sequelize);
db.edificio = require("./edificio.js")(sequelize, Sequelize);
db.aula = require("./aula.js")(sequelize, Sequelize);
db.biblioteca = require("./biblioteca.js")(sequelize, Sequelize);
db.sala_estudio = require("./sala_estudio.js")(sequelize, Sequelize);
db.reserva = require("./reserva.js")(sequelize, Sequelize);
db.administra = require("./administra.js")(sequelize, Sequelize);



db.aula.belongsToMany(db.admin, {
  through: "administra",
  foreignKey: "idaula",
  otherKey: "idadmin"
});
db.admin.belongsToMany(db.aula, {
  through: "administra",
  foreignKey: "idadmin",
  otherKey: "idaula"
});

module.exports = db;