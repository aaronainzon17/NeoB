/*Proyecto:     NeoB
//Módulo:       Back-end del sistema de información del proyecto NeoB
//Fichero:      server.js
//Descripción:  Archivo para el arranque del servidor de back-end*/

var cluster = require('cluster');
const { sign } = require('crypto');
if (cluster.isMaster){
  cluster.fork();
  cluster.on('exit', function(worker, code, signal) {
    cluster.fork();
  });
}
else{//Worker
  const express = require("express");
  const bodyParser = require("body-parser");
  const cors = require("cors");
  const dbConf = require("./app/config/db.config")
  /*
  const {authJwt} = require("./app/middleware");
  const reserva = require('./app/routes/reserva.routes');
  const report = require('./app/routes/report.routes');
  const mail = require('./app/routes/mail.routes');
  const {signup,signin} = require('./app/routes/auth.routes');
  const aula = require('./app/routes/aula.routes');
  const {adminfind,adminfindA,admindel} = require('./app/routes/administrador.routes')
  const administra = require('./app/routes/administra.routes')*/

  const app = express();

  /*
  var corsOptions = {
    origin: "http://localhost:3000"
  };*/

  //app.use(cors(corsOptions));
  app.use(cors());

  // parse requests of content-type - application/json
  app.use(bodyParser.json());

  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  const db = require("./app/models");
  try{
    db.sequelize.sync();
  }catch(err){
    //If DB is unreacheable restart...
    console.log("DB Unreachable")
    process.exit(1);
  }
  

  // simple route
  app.get("/", (req, res) => {
      res.json({ message: `Welcome to neob back-end server.` });
  });

  /*
  app.use('/api/reserva', authJwt.verifyGeneralToken, reserva);
  app.use('/api/report', authJwt.verifyGeneralToken, report);
  app.use('/api/mail', authJwt.verifyGeneralToken, mail);
  /*
  app.use('/api/auth/signup',[authJwt.verifyToken, authJwt.isModerator], signup);
  app.use('/api/auth/signin', signin);
  require('./app/routes/auth.routes/')(app)

  app.use('/api/aula', authJwt.verifyGeneralToken, aula);
  app.use('/api/administrador/:usuario', authJwt.verifyToken,adminfind);
  app.use('/api/administrador/',[authJwt.verifyToken, authJwt.isModerator], adminfindA);
  app.use('/api/administrador/:usuario',[authJwt.verifyToken, authJwt.isModerator], admindel);
  app.use('/api/administra',[authJwt.verifyToken, authJwt.isModerator], administra);*/

  require("./app/routes/administra.routes")(app);
  require("./app/routes/administrador.routes")(app);
  require("./app/routes/aula.routes")(app);
  require("./app/routes/reserva.routes")(app);
  require("./app/routes/mail.routes")(app);
  require("./app/routes/report.routes")(app);
  require('./app/routes/auth.routes')(app);

  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Back-end is running on port ${dbConf.HOST}:${PORT}.`);
    //console.log(process.env);
  });

  process.on('uncaughtException', function(){
    console.log(err);
    //If DB is unreacheable restart...
    process.exit(1);
  });

}
