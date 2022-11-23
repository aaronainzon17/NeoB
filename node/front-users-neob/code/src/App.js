/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      App.js
//Descripción:  Archivo para el arranque del servidor de Front-end*/

import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Salas from './components/pages/Salas';
import Protocolo from './components/pages/Protocolo';
import About from './components/pages/About';
import Footer from './components/Footer';
import Confirmar from './components/pages/Confirmar';
import NoConfirmar from './components/pages/NoConfirmar';
import Finalizar from './components/pages/Finalizar';
import NotImplemented from './components/pages/notImplemented';
import Reserva from './components/pages/Reserva';
import Escanear from './components/pages/Escanear';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/protocolo' component={Protocolo} />
          <Route path='/salas' component={Salas} />
          <Route path='/about' component={About} />
          <Route path='/confirmar/:confirmar_id' component={Confirmar} />
          <Route path='/noconfirmar/:confirmar_id' component={NoConfirmar} />
          <Route path='/finalizar/:finalizar_id' component={Finalizar} />
          <Route path='/reservar/:sala_id' component={Reserva} />
          <Route path='/escanear/:sala_id/:asiento_id' component={Escanear} />
          <Route path='/notImplemented' component={NotImplemented} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
