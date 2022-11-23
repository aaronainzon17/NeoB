/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      Salas.js
//Descripción:  Página Salas del front-end de BibliUz con todas las bibliotecas en las que se puede reservar
                un asiento */

import React from 'react';
import '../../App.css';
import './Salas.css';
import '../Cards.css';
import CardItem from '../CardItem';

export default function Salas() {
  return (
    <div> 
    <div className='salas_body'>
      <h1>¿En qué sala de estudio quieres reservar plaza?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/edificiobetancourt.jpg'
              text='Sala de estudio Tomás Pollán'
              label='EINA - Edificio Betancourt'
              path='/reservar/CRE.1201.00.400'
            />
            <CardItem
              src='images/edificiobetancourt.jpg'
              text='Biblioteca Hypatia de Alejandría'
              label='EINA - Edificio Betancourt'
              path='/reservar/CRE.1201.01.480'
            />
            <CardItem
              src='images/adabyron.jpg'
              text='Sala de estudio Ada Byron'
              label='EINA - Edificio Ada Byron'
              path='/reservar/CRE.1200.02.540'
            />
            <CardItem
              src='images/edificiobetancourt.jpg'
              text='Hemeroteca'
              label='EINA - Edificio Betancourt'
              path='/reservar/CRE.1201.02.690'
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
}
