/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Cross.js
//Descripción:  Componente Cross usado a lo largo del front-end de NeoB para mostrar un error*/

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