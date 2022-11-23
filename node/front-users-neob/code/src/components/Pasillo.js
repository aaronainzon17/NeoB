/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Pasillo.js
//Descripción:  Componente Pasillo usado para representar una pasillo dentro del componente SelectSeat*/

import React from "react"
import SeatStyle from "./seat.module.scss"

function Pasillo(props) {
  return (
    <div className={SeatStyle.pasillo}/>
  )
}

export default Pasillo
