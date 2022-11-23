/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      App.js
//Descripción:  Archivo para el arranque del servidor de Front-end*/

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import LogIn from './components/pages/LogIn';
import Administracion from './components/pages/Administracion';
import NotImplemented from './components/pages/notImplemented';
import ChangePassword from './components/pages/ChangePassword';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LogIn} />
          <Route path='/administracion' component={Administracion} />
          <Route path='/notImplemented' component={NotImplemented} />
          <Route path='/cambiarPassword' component={ChangePassword} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
