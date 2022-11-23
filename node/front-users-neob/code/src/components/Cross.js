/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      Cross.js
//Descripción:  Componente Cross usado a lo largo del front-end de BibliUz para mostrar un error*/

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../images/animations/redcross'

class Cross extends Component {
  render(){
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={300}
              width={300}
        />
      </div>
    )
  }
}

export default Cross