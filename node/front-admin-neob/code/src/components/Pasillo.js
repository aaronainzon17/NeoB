/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
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
