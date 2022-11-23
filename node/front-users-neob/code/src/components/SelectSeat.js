/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      SelectSeat.js
//Descripción:  Componente SelectSeat usado para mostrar el estado de una sala en la pantalla de reserva
                y permitir la selección de un asiento*/

import React from "react"
import Application from "./application.module.scss"
import AdaByron from "./AdaByron"
import TomasPollan from "./TomasPollan"
import HypatiaDeAlejandria from "./HypatiaDeAlejandria"
import Hemeroteca from "./Hemeroteca"




class SelectSeat extends React.Component {
  constructor(props) {
    super(props);
    this.estadoAsientos= this.props.estadoAsientos;
    this.sala_id = this.props.sala_id;
    this.aforoActual = this.props.aforoActual;
  };
  
sala_layout = (idsala) =>{
  switch (idsala){
    case 'CRE.1200.02.540' : //Ada Byron
      return AdaByron(this.props)

    case 'CRE.1201.00.400' : //Tomas Pollan
      return TomasPollan(this.props)

    case 'CRE.1201.01.480' : //Hypatia de Alejandria 
      return HypatiaDeAlejandria(this.props)
    case 'CRE.1201.02.690':
      return Hemeroteca(this.props)

    default:
      return <div></div> 
  }
}

render() {
  ////console.log(this.estadoAsientos);
  return (
    <div className={Application.calendar}>
      {this.sala_layout(this.sala_id)}
    </div>
  );
}
}

export default SelectSeat