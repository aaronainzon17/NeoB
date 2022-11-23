/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Cards.js
//Descripción:  Componente Cards usado en la página principal para mostrar las bibliotecas más populares*/

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Salas disponibles en Zaragoza</h1>
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
  );
}

export default Cards;
