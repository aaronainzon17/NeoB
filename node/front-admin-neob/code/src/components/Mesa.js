/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Mesa.js
//Descripción:  Componente Mesa usado para representar una mesa dentro del componente SelectSeat*/

import React from "react"
import SeatStyle from "./seat.module.scss"

export const Mesa = ({size}) => {
    var tableSize = null;
    if (size === "tomasPollan"){
        tableSize = `${SeatStyle.mesaTomasPollan}`;
    }else if (size === "tomasPollanEnchufe"){
        tableSize = `${SeatStyle.mesaTomasPollanEnchufe}`;
    }else if (size === "Ada"){
        tableSize = `${SeatStyle.mesaAda}`;
    }else if (size === "AdaMini"){
        tableSize = `${SeatStyle.mesaAdaMini}`;
    }else if (size === "AdaMax"){
            tableSize = `${SeatStyle.mesaAdaMax}`;
    }else if (size === "Torres"){
        tableSize = `${SeatStyle.mesaTorres}`;
    }else if (size === "hypatia"){
        tableSize = `${SeatStyle.mesaHypatia}`;
    }else if (size === "vertical"){
        tableSize = `${SeatStyle.mesaVertical}`;
    }else if (size === "vertical_top"){
        tableSize = `${SeatStyle.mesaVertical_top}`;
    }else if (size === "vertical_bottom"){
        tableSize = `${SeatStyle.mesaVertical_bottom}`;
    }else if (size === "espacio"){
        tableSize = `${SeatStyle.espacio_mesa}`;
    }else{
        tableSize = `${SeatStyle.mesaL}`;
    }
    return (
        <div className={tableSize}/>
    )
}