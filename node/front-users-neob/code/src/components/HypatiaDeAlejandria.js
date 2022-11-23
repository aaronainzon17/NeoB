/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      CardItem.js
//Descripción:  Componente CardItem usado a lo largo del front-end de NeoB para mostrar imágenes agrupadas 
                y con links a otras partes del front end */

import React from 'react';
import SeatStyles from "./seat.module.scss"
import Seat from "./Seat"
import Pasillo from "./Pasillo"
import { Mesa } from "./Mesa"
import Enchufe from "./Enchufe"

function HypatiaDeAlejandria(props) {
  return (
    <div className={SeatStyles.hypatia}>
      <div className={SeatStyles.hypatia_filaSillas}>
        <Pasillo/>
        <p className={SeatStyles.numFila}>A</p>
        <p className={SeatStyles.numFila}>B</p>
        <p className={SeatStyles.numFila}>C</p>
        <p className={SeatStyles.numFila}>D</p>
        <p className={SeatStyles.numFila}>E</p>
        <p className={SeatStyles.numFila}>F</p>
        <p className={SeatStyles.numFila}>G</p>
        <p className={SeatStyles.numFila}>H</p>
        <Pasillo/>
        <p className={SeatStyles.numFila}>I</p>
        <p className={SeatStyles.numFila}>J</p>
        <p className={SeatStyles.numFila}>K</p>
        <p className={SeatStyles.numFila}>L</p>
        <p className={SeatStyles.numFila}>M</p>
        <p className={SeatStyles.numFila}>N</p>
        <p className={SeatStyles.numFila}>O</p>
        <p className={SeatStyles.numFila}>P</p>
        <Pasillo/>
        <p className={SeatStyles.numFila}>Q</p>
        <p className={SeatStyles.numFila}>R</p>
        <p className={SeatStyles.numFila}>S</p>
        <p className={SeatStyles.numFila}>T</p>
        <p className={SeatStyles.numFila}>U</p>
        <p className={SeatStyles.numFila}>V</p>
        <p className={SeatStyles.numFila}>W</p>
        <p className={SeatStyles.numFila}>X</p>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>1</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1A" 
        status={props.estadoAsientos.get("1A") ? props.estadoAsientos.get("1A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1B") ? props.estadoAsientos.get("1B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1C") ? props.estadoAsientos.get("1C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1D") ? props.estadoAsientos.get("1D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1E") ? props.estadoAsientos.get("1E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("1F") ? props.estadoAsientos.get("1F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1G") ? props.estadoAsientos.get("1G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1H") ? props.estadoAsientos.get("1H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>2</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2A") ? props.estadoAsientos.get("2A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2B") ? props.estadoAsientos.get("2B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2C") ? props.estadoAsientos.get("2C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2D" 
        status={props.estadoAsientos.get("2D") ? props.estadoAsientos.get("2D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2E") ? props.estadoAsientos.get("2E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2F") ? props.estadoAsientos.get("2F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2G") ? props.estadoAsientos.get("2G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2H" 
        status={props.estadoAsientos.get("2H") ? props.estadoAsientos.get("2H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>3</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3A" 
        status={props.estadoAsientos.get("3A") ? props.estadoAsientos.get("3A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3B") ? props.estadoAsientos.get("3B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3C") ? props.estadoAsientos.get("3C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3D") ? props.estadoAsientos.get("3D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3E") ? props.estadoAsientos.get("3E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("3F") ? props.estadoAsientos.get("3F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3G") ? props.estadoAsientos.get("3G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3H") ? props.estadoAsientos.get("3H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3I" 
        status={props.estadoAsientos.get("3I") ? props.estadoAsientos.get("3I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3J") ? props.estadoAsientos.get("3J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3K") ? props.estadoAsientos.get("3K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3L") ? props.estadoAsientos.get("3L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3M") ? props.estadoAsientos.get("3M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("3N") ? props.estadoAsientos.get("3N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3O") ? props.estadoAsientos.get("3O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3P") ? props.estadoAsientos.get("3P"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3Q" 
        status={props.estadoAsientos.get("3Q") ? props.estadoAsientos.get("3Q"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3R" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3R") ? props.estadoAsientos.get("3R"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3S" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3S") ? props.estadoAsientos.get("3S"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3T" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3T") ? props.estadoAsientos.get("3T"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3U" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3U") ? props.estadoAsientos.get("3U"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3V" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("3V") ? props.estadoAsientos.get("3V"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3W" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3W") ? props.estadoAsientos.get("3W"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3X" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3X") ? props.estadoAsientos.get("3X"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa_enchufe}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Enchufe/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>4</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4A") ? props.estadoAsientos.get("4A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4B") ? props.estadoAsientos.get("4B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4C") ? props.estadoAsientos.get("4C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4D" 
        status={props.estadoAsientos.get("4D") ? props.estadoAsientos.get("4D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4E") ? props.estadoAsientos.get("4E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4F") ? props.estadoAsientos.get("4F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4G") ? props.estadoAsientos.get("4G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4H" 
        status={props.estadoAsientos.get("4H") ? props.estadoAsientos.get("4H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4I") ? props.estadoAsientos.get("4I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4J") ? props.estadoAsientos.get("4J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4K") ? props.estadoAsientos.get("4K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4L" 
        status={props.estadoAsientos.get("4L") ? props.estadoAsientos.get("4L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4M") ? props.estadoAsientos.get("4M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4N") ? props.estadoAsientos.get("4N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4O") ? props.estadoAsientos.get("4O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4P" 
        status={props.estadoAsientos.get("4P") ? props.estadoAsientos.get("4P"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4Q" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4Q") ? props.estadoAsientos.get("4Q"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4R" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4R") ? props.estadoAsientos.get("4R"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4S" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4S") ? props.estadoAsientos.get("4S"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4T" 
        status={props.estadoAsientos.get("4T") ? props.estadoAsientos.get("4T"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4U" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4U") ? props.estadoAsientos.get("4U"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4V" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4V") ? props.estadoAsientos.get("4V"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4W" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4W") ? props.estadoAsientos.get("4W"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4X" 
        status={props.estadoAsientos.get("4X") ? props.estadoAsientos.get("4X"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>5</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5A" 
        status={props.estadoAsientos.get("5A") ? props.estadoAsientos.get("5A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5B") ? props.estadoAsientos.get("5B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5C") ? props.estadoAsientos.get("5C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5D") ? props.estadoAsientos.get("5D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5E") ? props.estadoAsientos.get("5E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("5F") ? props.estadoAsientos.get("5F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5G") ? props.estadoAsientos.get("5G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5H") ? props.estadoAsientos.get("5H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5I" 
        status={props.estadoAsientos.get("5I") ? props.estadoAsientos.get("5I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5J") ? props.estadoAsientos.get("5J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5K") ? props.estadoAsientos.get("5K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5L") ? props.estadoAsientos.get("5L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5M") ? props.estadoAsientos.get("5M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("5N") ? props.estadoAsientos.get("5N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5O") ? props.estadoAsientos.get("5O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5P") ? props.estadoAsientos.get("5P"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5Q" 
        status={props.estadoAsientos.get("5Q") ? props.estadoAsientos.get("5Q"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5R" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5R") ? props.estadoAsientos.get("5R"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5S" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5S") ? props.estadoAsientos.get("5S"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5T" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5T") ? props.estadoAsientos.get("5T"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5U" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5U") ? props.estadoAsientos.get("5U"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5V" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("5V") ? props.estadoAsientos.get("5V"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5W" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5W") ? props.estadoAsientos.get("5W"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5X" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5X") ? props.estadoAsientos.get("5X"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa_enchufe}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Enchufe/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>6</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6A") ? props.estadoAsientos.get("6A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6B") ? props.estadoAsientos.get("6B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6C") ? props.estadoAsientos.get("6C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6D" 
        status={props.estadoAsientos.get("6D") ? props.estadoAsientos.get("6D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6E") ? props.estadoAsientos.get("6E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6F") ? props.estadoAsientos.get("6F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6G") ? props.estadoAsientos.get("6G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6H" 
        status={props.estadoAsientos.get("6H") ? props.estadoAsientos.get("6H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6I") ? props.estadoAsientos.get("6I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6J") ? props.estadoAsientos.get("6J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6K") ? props.estadoAsientos.get("6K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6L" 
        status={props.estadoAsientos.get("6L") ? props.estadoAsientos.get("6L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6M") ? props.estadoAsientos.get("6M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6N") ? props.estadoAsientos.get("6N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6O") ? props.estadoAsientos.get("6O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6P" 
        status={props.estadoAsientos.get("6P") ? props.estadoAsientos.get("6P"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6Q" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6Q") ? props.estadoAsientos.get("6Q"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6R" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6R") ? props.estadoAsientos.get("6R"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6S" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6S") ? props.estadoAsientos.get("6S"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6T" 
        status={props.estadoAsientos.get("6T") ? props.estadoAsientos.get("6T"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6U" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6U") ? props.estadoAsientos.get("6U"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6V" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6V") ? props.estadoAsientos.get("6V"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6W" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6W") ? props.estadoAsientos.get("6W"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6X" 
        status={props.estadoAsientos.get("6X") ? props.estadoAsientos.get("6X"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>7</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7A" 
        status={props.estadoAsientos.get("7A") ? props.estadoAsientos.get("7A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7B") ? props.estadoAsientos.get("7B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7C") ? props.estadoAsientos.get("7C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7D") ? props.estadoAsientos.get("7D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7E") ? props.estadoAsientos.get("7E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("7F") ? props.estadoAsientos.get("7F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7G") ? props.estadoAsientos.get("7G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7H") ? props.estadoAsientos.get("7H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7I" 
        status={props.estadoAsientos.get("7I") ? props.estadoAsientos.get("7I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7J") ? props.estadoAsientos.get("7J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7K") ? props.estadoAsientos.get("7K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7L") ? props.estadoAsientos.get("7L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7M") ? props.estadoAsientos.get("7M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("7N") ? props.estadoAsientos.get("7N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7O") ? props.estadoAsientos.get("7O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7P") ? props.estadoAsientos.get("7P"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7Q" 
        status={props.estadoAsientos.get("7Q") ? props.estadoAsientos.get("7Q"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7R" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7R") ? props.estadoAsientos.get("7R"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7S" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7S") ? props.estadoAsientos.get("7S"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7T" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7T") ? props.estadoAsientos.get("7T"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7U" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7U") ? props.estadoAsientos.get("7U"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7V" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("7V") ? props.estadoAsientos.get("7V"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7W" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7W") ? props.estadoAsientos.get("7W"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7X" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7X") ? props.estadoAsientos.get("7X"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa_enchufe}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Enchufe/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>8</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8A") ? props.estadoAsientos.get("8A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8B") ? props.estadoAsientos.get("8B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8C") ? props.estadoAsientos.get("8C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8D" 
        status={props.estadoAsientos.get("8D") ? props.estadoAsientos.get("8D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8E") ? props.estadoAsientos.get("8E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8F") ? props.estadoAsientos.get("8F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8G") ? props.estadoAsientos.get("8G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8H" 
        status={props.estadoAsientos.get("8H") ? props.estadoAsientos.get("8H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8I") ? props.estadoAsientos.get("8I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8J") ? props.estadoAsientos.get("8J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8K") ? props.estadoAsientos.get("8K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8L" 
        status={props.estadoAsientos.get("8L") ? props.estadoAsientos.get("8L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8M") ? props.estadoAsientos.get("8M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8N") ? props.estadoAsientos.get("8N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8O") ? props.estadoAsientos.get("8O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8P" 
        status={props.estadoAsientos.get("8P") ? props.estadoAsientos.get("8P"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8Q" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8Q") ? props.estadoAsientos.get("8Q"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8R" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8R") ? props.estadoAsientos.get("8R"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8S" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8S") ? props.estadoAsientos.get("8S"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8T" 
        status={props.estadoAsientos.get("8T") ? props.estadoAsientos.get("8T"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8U" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8U") ? props.estadoAsientos.get("8U"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8V" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8V") ? props.estadoAsientos.get("8V"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8W" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8W") ? props.estadoAsientos.get("8W"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8X" 
        status={props.estadoAsientos.get("8X") ? props.estadoAsientos.get("8X"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>9</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9A" 
        status={props.estadoAsientos.get("9A") ? props.estadoAsientos.get("9A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9B") ? props.estadoAsientos.get("9B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9C") ? props.estadoAsientos.get("9C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9D") ? props.estadoAsientos.get("9D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9E") ? props.estadoAsientos.get("9E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("9F") ? props.estadoAsientos.get("9F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9G") ? props.estadoAsientos.get("9G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9H") ? props.estadoAsientos.get("9H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9I" 
        status={props.estadoAsientos.get("9I") ? props.estadoAsientos.get("9I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9J") ? props.estadoAsientos.get("9J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9K") ? props.estadoAsientos.get("9K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9L") ? props.estadoAsientos.get("9L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9M") ? props.estadoAsientos.get("9M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("9N") ? props.estadoAsientos.get("9N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9O") ? props.estadoAsientos.get("9O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9P") ? props.estadoAsientos.get("9P"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9Q" 
        status={props.estadoAsientos.get("9Q") ? props.estadoAsientos.get("9Q"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9R" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9R") ? props.estadoAsientos.get("9R"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9S" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9S") ? props.estadoAsientos.get("9S"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9T" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9T") ? props.estadoAsientos.get("9T"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9U" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9U") ? props.estadoAsientos.get("9U"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9V" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("9V") ? props.estadoAsientos.get("9V"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9W" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9W") ? props.estadoAsientos.get("9W"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9X" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9X") ? props.estadoAsientos.get("9X"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa_enchufe}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Enchufe/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>10</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10A") ? props.estadoAsientos.get("10A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10B") ? props.estadoAsientos.get("10B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10C") ? props.estadoAsientos.get("10C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10D" 
        status={props.estadoAsientos.get("10D") ? props.estadoAsientos.get("10D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10E") ? props.estadoAsientos.get("10E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10F") ? props.estadoAsientos.get("10F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10G") ? props.estadoAsientos.get("10G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10H" 
        status={props.estadoAsientos.get("10H") ? props.estadoAsientos.get("10H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10I") ? props.estadoAsientos.get("10I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10J") ? props.estadoAsientos.get("10J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10K") ? props.estadoAsientos.get("10K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10L" 
        status={props.estadoAsientos.get("10L") ? props.estadoAsientos.get("10L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10M") ? props.estadoAsientos.get("10M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10N") ? props.estadoAsientos.get("10N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10O") ? props.estadoAsientos.get("10O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10P" 
        status={props.estadoAsientos.get("10P") ? props.estadoAsientos.get("10P"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10Q" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10Q") ? props.estadoAsientos.get("10Q"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10R" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10R") ? props.estadoAsientos.get("10R"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10S" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10S") ? props.estadoAsientos.get("10S"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10T" 
        status={props.estadoAsientos.get("10T") ? props.estadoAsientos.get("10T"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10U" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10U") ? props.estadoAsientos.get("10U"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10V" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10V") ? props.estadoAsientos.get("10V"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10W" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10W") ? props.estadoAsientos.get("10W"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10X" 
        status={props.estadoAsientos.get("10X") ? props.estadoAsientos.get("10X"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>11</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11A" 
        status={props.estadoAsientos.get("11A") ? props.estadoAsientos.get("11A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11B") ? props.estadoAsientos.get("11B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11C") ? props.estadoAsientos.get("11C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11D") ? props.estadoAsientos.get("11D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11E") ? props.estadoAsientos.get("11E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("11F") ? props.estadoAsientos.get("11F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11G") ? props.estadoAsientos.get("11G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11H") ? props.estadoAsientos.get("11H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11I" 
        status={props.estadoAsientos.get("11I") ? props.estadoAsientos.get("11I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11J") ? props.estadoAsientos.get("11J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11K") ? props.estadoAsientos.get("11K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11L") ? props.estadoAsientos.get("11L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11M") ? props.estadoAsientos.get("11M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("11N") ? props.estadoAsientos.get("11N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11O") ? props.estadoAsientos.get("11O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11P") ? props.estadoAsientos.get("11P"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11Q" 
        status={props.estadoAsientos.get("11Q") ? props.estadoAsientos.get("11Q"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11R" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11R") ? props.estadoAsientos.get("11R"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11S" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11S") ? props.estadoAsientos.get("11S"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11T" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11T") ? props.estadoAsientos.get("11T"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11U" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11U") ? props.estadoAsientos.get("11U"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11V" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("11V") ? props.estadoAsientos.get("11V"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11W" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11W") ? props.estadoAsientos.get("11W"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11X" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11X") ? props.estadoAsientos.get("11X"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa_enchufe}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Mesa size="hypatia"/>
      <Enchufe/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>12</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12A") ? props.estadoAsientos.get("12A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12B") ? props.estadoAsientos.get("12B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12C") ? props.estadoAsientos.get("12C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12D" 
        status={props.estadoAsientos.get("12D") ? props.estadoAsientos.get("12D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12E") ? props.estadoAsientos.get("12E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12F") ? props.estadoAsientos.get("12F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12G") ? props.estadoAsientos.get("12G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12H" 
        status={props.estadoAsientos.get("12H") ? props.estadoAsientos.get("12H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12I") ? props.estadoAsientos.get("12I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12J") ? props.estadoAsientos.get("12J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12K") ? props.estadoAsientos.get("12K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12L" 
        status={props.estadoAsientos.get("12L") ? props.estadoAsientos.get("12L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12M") ? props.estadoAsientos.get("12M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12N") ? props.estadoAsientos.get("12N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12O") ? props.estadoAsientos.get("12O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12P" 
        status={props.estadoAsientos.get("12P") ? props.estadoAsientos.get("12P"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12Q" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12Q") ? props.estadoAsientos.get("12Q"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12R" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12R") ? props.estadoAsientos.get("12R"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12S" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12S") ? props.estadoAsientos.get("12S"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12T" 
        status={props.estadoAsientos.get("12T") ? props.estadoAsientos.get("12T"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12U" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12U") ? props.estadoAsientos.get("12U"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12V" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12V") ? props.estadoAsientos.get("12V"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12W" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12W") ? props.estadoAsientos.get("12W"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12X" 
        status={props.estadoAsientos.get("12X") ? props.estadoAsientos.get("12X"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>13</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13A" 
        status={props.estadoAsientos.get("13A") ? props.estadoAsientos.get("13A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13B") ? props.estadoAsientos.get("13B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13C") ? props.estadoAsientos.get("13C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13D") ? props.estadoAsientos.get("13D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13E") ? props.estadoAsientos.get("13E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("13F") ? props.estadoAsientos.get("13F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13G") ? props.estadoAsientos.get("13G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13H") ? props.estadoAsientos.get("13H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>14</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14A") ? props.estadoAsientos.get("14A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("14B") ? props.estadoAsientos.get("14B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14C") ? props.estadoAsientos.get("14C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14D" 
        status={props.estadoAsientos.get("14D") ? props.estadoAsientos.get("14D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14E") ? props.estadoAsientos.get("14E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("14F") ? props.estadoAsientos.get("14F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14G") ? props.estadoAsientos.get("14G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14H" 
        status={props.estadoAsientos.get("14H") ? props.estadoAsientos.get("14H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>

      <Pasillo/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>15</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15A" 
        status={props.estadoAsientos.get("15A") ? props.estadoAsientos.get("15A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15B") ? props.estadoAsientos.get("15B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15C") ? props.estadoAsientos.get("15C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15D") ? props.estadoAsientos.get("15D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15E") ? props.estadoAsientos.get("15E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("15F") ? props.estadoAsientos.get("15F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15G") ? props.estadoAsientos.get("15G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15H") ? props.estadoAsientos.get("15H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>16</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16A") ? props.estadoAsientos.get("16A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("16B") ? props.estadoAsientos.get("16B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16C") ? props.estadoAsientos.get("16C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16D" 
        status={props.estadoAsientos.get("16D") ? props.estadoAsientos.get("16D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16E") ? props.estadoAsientos.get("16E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("16F") ? props.estadoAsientos.get("16F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16G") ? props.estadoAsientos.get("16G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16H" 
        status={props.estadoAsientos.get("16H") ? props.estadoAsientos.get("16H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>17</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17A" 
        status={props.estadoAsientos.get("17A") ? props.estadoAsientos.get("17A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17B") ? props.estadoAsientos.get("17B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("17C") ? props.estadoAsientos.get("17C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17D") ? props.estadoAsientos.get("17D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("17E") ? props.estadoAsientos.get("17E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("17F") ? props.estadoAsientos.get("17F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("17G") ? props.estadoAsientos.get("17G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17H") ? props.estadoAsientos.get("17H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>18</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18A") ? props.estadoAsientos.get("18A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("18B") ? props.estadoAsientos.get("18B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18C") ? props.estadoAsientos.get("18C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18D" 
        status={props.estadoAsientos.get("18D") ? props.estadoAsientos.get("18D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18E") ? props.estadoAsientos.get("18E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("18F") ? props.estadoAsientos.get("18F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18G") ? props.estadoAsientos.get("18G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18H" 
        status={props.estadoAsientos.get("18H") ? props.estadoAsientos.get("18H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>19</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19A" 
        status={props.estadoAsientos.get("19A") ? props.estadoAsientos.get("19A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("19B") ? props.estadoAsientos.get("19B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("19C") ? props.estadoAsientos.get("19C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("19D") ? props.estadoAsientos.get("19D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("19E") ? props.estadoAsientos.get("19E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("19F") ? props.estadoAsientos.get("19F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("19G") ? props.estadoAsientos.get("19G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("19H") ? props.estadoAsientos.get("19H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollanEnchufe"/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>20</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20A") ? props.estadoAsientos.get("20A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("20B") ? props.estadoAsientos.get("20B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20C") ? props.estadoAsientos.get("20C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20D" 
        status={props.estadoAsientos.get("20D") ? props.estadoAsientos.get("20D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20E") ? props.estadoAsientos.get("20E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("20F") ? props.estadoAsientos.get("20F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20G") ? props.estadoAsientos.get("20G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20H" 
        status={props.estadoAsientos.get("20H") ? props.estadoAsientos.get("20H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>21</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21A" 
        status={props.estadoAsientos.get("21A") ? props.estadoAsientos.get("21A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("21B") ? props.estadoAsientos.get("21B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("21C") ? props.estadoAsientos.get("21C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("21D") ? props.estadoAsientos.get("21D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("21E") ? props.estadoAsientos.get("21E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("21F") ? props.estadoAsientos.get("21F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("21G") ? props.estadoAsientos.get("21G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("21H") ? props.estadoAsientos.get("21H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div> 
      <div className={SeatStyles.hypatia_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="hypatia"/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.hypatia_filaSillas}>
      <p className={SeatStyles.numFila}>22</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22A") ? props.estadoAsientos.get("22A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("22B") ? props.estadoAsientos.get("22B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22C") ? props.estadoAsientos.get("22C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22D" 
        status={props.estadoAsientos.get("22D") ? props.estadoAsientos.get("22D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22E") ? props.estadoAsientos.get("22E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("22F") ? props.estadoAsientos.get("22F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22G") ? props.estadoAsientos.get("22G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22H" 
        status={props.estadoAsientos.get("22H") ? props.estadoAsientos.get("22H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      </div>
      <Pasillo/>
      </div>
  );
}

export default HypatiaDeAlejandria;
