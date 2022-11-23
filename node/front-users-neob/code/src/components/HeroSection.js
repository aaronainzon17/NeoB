/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      HeroSection.js
//Descripción:  Componente HeroSection usado en la parte superior de la página de Home de BibliUz*/

import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



export default function HeroSection() {
  return (
    <div>
      <div className='hero-container'>
        <video src='/videos/video_bibliUz.mp4' autoPlay loop muted />
        <h1>NeoB</h1>
        <p>Que nada te impida estudiar</p>
        <div className='hero-btns'>
          <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path='/reservar/CRE.1201.01.480'//'/salas'
          >
            RESERVAR PLAZA
          </Button>
        </div>
      </div>
    </div>
  );
}

