/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      Seat.js
//Descripción:  Componente Seat usado para representar una asiento dentro del componente SelectSeat*/

import React from "react"
import SeatStyle from "./seat.module.scss"

class Seat extends React.Component {
  seatRef = React.createRef();

  setSeat = () => {
    const seat = this.seatRef.current.value
    this.props.setSeat(seat)
  }

  render() {
    const { seat, status, currentSeat, orientation, use } = this.props
    const isCurrent = currentSeat === seat
    const estado = status
    //const norte = orientation === "norte"
    var isAvailable = (status === "libre" || use ==="Admin")
    var buttonClasses
    if (orientation === "norte") {
      buttonClasses =  `${SeatStyle.button} ${SeatStyle.button_unavailable}` 
    }else if (orientation === "sur"){
      buttonClasses = `${SeatStyle.button} ${SeatStyle.button_unavailable} ${SeatStyle.sur}`
    }else if (orientation === "izquierda"){
      buttonClasses = `${SeatStyle.button} ${SeatStyle.button_unavailable} ${SeatStyle.izquierda}`
    }else if (orientation === "derecha"){
      buttonClasses = `${SeatStyle.button} ${SeatStyle.button_unavailable} ${SeatStyle.derecha}`
    }
    //var buttonClasses = norte ? `${SeatStyle.button} ${SeatStyle.button_unavailable}` : `${SeatStyle.button} ${SeatStyle.button_unavailable} ${SeatStyle.sur}`
    if (isCurrent){
      if (orientation === "norte") {
        buttonClasses =  `${SeatStyle.button} ${SeatStyle.current}` 
      }else if (orientation === "sur"){
        buttonClasses = `${SeatStyle.button} ${SeatStyle.current} ${SeatStyle.sur}`
      }else if (orientation === "izquierda"){
        buttonClasses = `${SeatStyle.button} ${SeatStyle.current} ${SeatStyle.izquierda}`
      }else if (orientation === "derecha"){
        buttonClasses = `${SeatStyle.button} ${SeatStyle.current} ${SeatStyle.derecha}`
      }
      //buttonClasses = norte ? `${SeatStyle.button} ${SeatStyle.current}` : `${SeatStyle.button} ${SeatStyle.current} ${SeatStyle.sur}`
    }else{
      if (estado === "sucio"){
        if (orientation === "norte") {
          buttonClasses =  `${SeatStyle.button} ${SeatStyle.unfair}` 
        }else if (orientation === "sur"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.unfair} ${SeatStyle.sur}`
        }else if (orientation === "izquierda"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.unfair} ${SeatStyle.izquierda}`
        }else if (orientation === "derecha"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.unfair} ${SeatStyle.derecha}`
        }
        //buttonClasses = norte ? `${SeatStyle.button} ${SeatStyle.unfair}` : `${SeatStyle.button} ${SeatStyle.unfair} ${SeatStyle.sur}` 
      }else if (estado === "ocupado"){
        if (orientation === "norte") {
          buttonClasses =  `${SeatStyle.button} ${SeatStyle.busy}` 
        }else if (orientation === "sur"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.busy} ${SeatStyle.sur}`
        }else if (orientation === "izquierda"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.busy} ${SeatStyle.izquierda}`
        }else if (orientation === "derecha"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.busy} ${SeatStyle.derecha}`
        }
        //buttonClasses = norte ? `${SeatStyle.button} ${SeatStyle.busy}` : `${SeatStyle.button} ${SeatStyle.busy} ${SeatStyle.sur}`    
      }else if (estado === "libre"){
        if (orientation === "norte") {
          buttonClasses =  `${SeatStyle.button}` 
        }else if (orientation === "sur"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.sur}`
        }else if (orientation === "izquierda"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.izquierda}`
        }else if (orientation === "derecha"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.derecha}`
        }
        //buttonClasses = norte ? `${SeatStyle.button}` : `${SeatStyle.button}  ${SeatStyle.sur}`
      }else if (estado === "escaneado"){
        if (orientation === "norte") {
          buttonClasses =  `${SeatStyle.button} ${SeatStyle.scanned}` 
        }else if (orientation === "sur"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.scanned} ${SeatStyle.sur}`
        }else if (orientation === "izquierda"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.scanned} ${SeatStyle.izquierda}`
        }else if (orientation === "derecha"){
          buttonClasses = `${SeatStyle.button} ${SeatStyle.scanned} ${SeatStyle.derecha}`
        }
        //buttonClasses = norte ? `${SeatStyle.button} ${SeatStyle.scanned}` : `${SeatStyle.button} ${SeatStyle.scanned} ${SeatStyle.sur}`    
      }
    }
    return (
      <React.Fragment>
        { isAvailable ? (
          <button onClick={this.setSeat} ref={this.seatRef} value={seat} className={buttonClasses} title={`Asiento ${seat} ${estado}`} />
        ) : (
          <div title={`Asiento ${seat} ${estado}`} className={buttonClasses}/>
        )}
      </React.Fragment>
    )
  }
}

export default Seat
