/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      Home.js
//Descripción:  Página Home del front-end de BibliUz que sirve como página de inicio del sistema*/

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
