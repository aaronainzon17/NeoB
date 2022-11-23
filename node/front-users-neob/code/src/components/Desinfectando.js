/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      Desinfectando.js
//Descripción:  Animación Desinfectando usado a lo largo del front-end de BibliUz en las páginas notimplemented*/

import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../images/animations/notImplemented'

class Desinfectando extends Component {
  render(){
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
      </div>
    )
  }
}

export default Desinfectando