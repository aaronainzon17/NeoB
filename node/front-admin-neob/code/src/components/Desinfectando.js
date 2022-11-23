/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Desinfectando.js
//Descripción:  Animación Desinfectando usado a lo largo del front-end de NeoB en las páginas notimplemented*/

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