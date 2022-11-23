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

function AdaByron(props) {
  return (
    <div className={SeatStyles.ada}>
      <div className={SeatStyles.ada_filaSillas}>
        <Pasillo/>
        <p className={SeatStyles.numFila}>A</p>
        <p className={SeatStyles.numFila}>B</p>
        <p className={SeatStyles.numFila}>C</p>
        <p className={SeatStyles.numFila}>D</p>
        <Pasillo/>
        <p className={SeatStyles.numFila}>E</p>
        <p className={SeatStyles.numFila}>F</p>
        <p className={SeatStyles.numFila}>G</p>
        <p className={SeatStyles.numFila}>H</p>
        <Pasillo/>
        <p className={SeatStyles.numFila}>I</p>
        <p className={SeatStyles.numFila}>J</p>
        <p className={SeatStyles.numFila}>K</p>
        <p className={SeatStyles.numFila}>L</p>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>1</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1A" 
          status={props.estadoAsientos.get("1A") ? props.estadoAsientos.get("1A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1B") ? props.estadoAsientos.get("1B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1C") ? props.estadoAsientos.get("1C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1D") ? props.estadoAsientos.get("1D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1E" 
          status={props.estadoAsientos.get("1E") ? props.estadoAsientos.get("1E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1F") ? props.estadoAsientos.get("1F"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1G" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1G") ? props.estadoAsientos.get("1G"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1H" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1H") ? props.estadoAsientos.get("1H"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1I" 
          status={props.estadoAsientos.get("1I") ? props.estadoAsientos.get("1I"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1J" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1J") ? props.estadoAsientos.get("1J"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1K" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1K") ? props.estadoAsientos.get("1K"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1L" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1L") ? props.estadoAsientos.get("1L"): "libre"} orientation="sur"/>
      </div>
      <div className={SeatStyles.ada_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>2</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2A" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2A") ? props.estadoAsientos.get("2A"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2B" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2B") ? props.estadoAsientos.get("2B"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2C" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2C") ? props.estadoAsientos.get("2C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2D" 
          status={props.estadoAsientos.get("2D") ? props.estadoAsientos.get("2D"): "libre"} orientation="norte"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2E" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2E") ? props.estadoAsientos.get("2E"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2F" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2F") ? props.estadoAsientos.get("2F"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2G" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2G") ? props.estadoAsientos.get("2G"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2H" 
          status={props.estadoAsientos.get("2H") ? props.estadoAsientos.get("2H"): "libre"} orientation="norte"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2I" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2I") ? props.estadoAsientos.get("2I"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2J" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2J") ? props.estadoAsientos.get("2J"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2K" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2K") ? props.estadoAsientos.get("2K"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2L" 
          status={props.estadoAsientos.get("2L") ? props.estadoAsientos.get("2L"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>3</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3A" 
          status={props.estadoAsientos.get("3A") ? props.estadoAsientos.get("3A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3B") ? props.estadoAsientos.get("3B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("3C") ? props.estadoAsientos.get("3C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3D") ? props.estadoAsientos.get("3D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3E" 
          status={props.estadoAsientos.get("3E") ? props.estadoAsientos.get("3E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("3F") ? props.estadoAsientos.get("3F"): "libre"} orientation="sur"/>
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
      </div>
      <div className={SeatStyles.ada_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>4</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4A" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4A") ? props.estadoAsientos.get("4A"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4B" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("4B") ? props.estadoAsientos.get("4B"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4C" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("4C") ? props.estadoAsientos.get("4C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="4D" 
          status={props.estadoAsientos.get("4D") ? props.estadoAsientos.get("4D"): "libre"} orientation="norte"/>
        <Pasillo/>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>5</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5A" 
          status={props.estadoAsientos.get("5A") ? props.estadoAsientos.get("5A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5B") ? props.estadoAsientos.get("5B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("5C") ? props.estadoAsientos.get("5C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5D") ? props.estadoAsientos.get("5D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5E" 
          status={props.estadoAsientos.get("5E") ? props.estadoAsientos.get("5E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("5F") ? props.estadoAsientos.get("5F"): "libre"} orientation="sur"/>
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
      </div>
      <div className={SeatStyles.ada_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}></p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6A" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6A") ? props.estadoAsientos.get("6A"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6B" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("6B") ? props.estadoAsientos.get("6B"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6C" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("6C") ? props.estadoAsientos.get("6C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="6D" 
          status={props.estadoAsientos.get("6D") ? props.estadoAsientos.get("6D"): "libre"} orientation="norte"/>
        <Pasillo/>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>7</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7A" 
          status={props.estadoAsientos.get("7A") ? props.estadoAsientos.get("7A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7B") ? props.estadoAsientos.get("7B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("7C") ? props.estadoAsientos.get("7C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7D") ? props.estadoAsientos.get("7D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7E" 
          status={props.estadoAsientos.get("7E") ? props.estadoAsientos.get("7E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("7F") ? props.estadoAsientos.get("7F"): "libre"} orientation="sur"/>
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
      </div>
      <div className={SeatStyles.ada_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>8</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8A" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8A") ? props.estadoAsientos.get("8A"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8B" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("8B") ? props.estadoAsientos.get("8B"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8C" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("8C") ? props.estadoAsientos.get("8C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="8D" 
          status={props.estadoAsientos.get("8D") ? props.estadoAsientos.get("8D"): "libre"} orientation="norte"/>
        <Pasillo/>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>9</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9A" 
          status={props.estadoAsientos.get("9A") ? props.estadoAsientos.get("9A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9B") ? props.estadoAsientos.get("9B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("9C") ? props.estadoAsientos.get("9C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9D") ? props.estadoAsientos.get("9D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9E" 
          status={props.estadoAsientos.get("9E") ? props.estadoAsientos.get("9E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("9F") ? props.estadoAsientos.get("9F"): "libre"} orientation="sur"/>
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
      </div>
      <div className={SeatStyles.ada_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>10</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10A" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10A") ? props.estadoAsientos.get("10A"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10B" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("10B") ? props.estadoAsientos.get("10B"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10C" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("10C") ? props.estadoAsientos.get("10C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="10D" 
          status={props.estadoAsientos.get("10D") ? props.estadoAsientos.get("10D"): "libre"} orientation="norte"/>
        <Pasillo/>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>11</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11A" 
          status={props.estadoAsientos.get("11A") ? props.estadoAsientos.get("11A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11B") ? props.estadoAsientos.get("11B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("11C") ? props.estadoAsientos.get("11C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11D") ? props.estadoAsientos.get("11D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11E" 
          status={props.estadoAsientos.get("11E") ? props.estadoAsientos.get("11E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("11F") ? props.estadoAsientos.get("11F"): "libre"} orientation="sur"/>
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
      </div>
      <div className={SeatStyles.ada_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="Ada"/>
      </div>
      <div className={SeatStyles.ada_filaSillas}>
        <p className={SeatStyles.numFila}>12</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12A" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12A") ? props.estadoAsientos.get("12A"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12B" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("12B") ? props.estadoAsientos.get("12B"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12C" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("12C") ? props.estadoAsientos.get("12C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="12D" 
          status={props.estadoAsientos.get("12D") ? props.estadoAsientos.get("12D"): "libre"} orientation="norte"/>
        <Pasillo/>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas2}>
        <p className={SeatStyles.numFila}>13</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13A" 
          status={props.estadoAsientos.get("13A") ? props.estadoAsientos.get("13A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13B") ? props.estadoAsientos.get("13B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13C") ? props.estadoAsientos.get("13C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13D") ? props.estadoAsientos.get("13D"): "libre"} orientation="sur"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13E" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13E") ? props.estadoAsientos.get("13E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13F" 
          status={props.estadoAsientos.get("13F") ? props.estadoAsientos.get("13F"): "libre"} orientation="sur"/>
      </div>
      <div className={SeatStyles.ada_filaMesa2}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      <Mesa size="AdaMini"/>
      </div>
      <div className={SeatStyles.ada_filaSillas2}>
        <p className={SeatStyles.numFila}>14</p>
          <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14A" 
            status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14A") ? props.estadoAsientos.get("14A"): "libre"} orientation="norte"/>
          <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14B" 
            status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("14B") ? props.estadoAsientos.get("14B"): "libre"} orientation="norte"/>
          <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14C" 
            status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14C") ? props.estadoAsientos.get("14C"): "libre"} orientation="norte"/>
          <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14D" 
            status={props.estadoAsientos.get("14D") ? props.estadoAsientos.get("14D"): "libre"} orientation="norte"/>
          <Pasillo/>
          <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14E" 
            status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("14E") ? props.estadoAsientos.get("14E"): "libre"} orientation="norte"/>
          <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14F" 
            status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14F") ? props.estadoAsientos.get("14F"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas2}>
        <p className={SeatStyles.numFila}>15</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15A" 
          status={props.estadoAsientos.get("15A") ? props.estadoAsientos.get("15A"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15B" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15B") ? props.estadoAsientos.get("15B"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15C" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15C") ? props.estadoAsientos.get("15C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15D" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15D") ? props.estadoAsientos.get("15D"): "libre"} orientation="sur"/>
        <Pasillo/>
      </div>
      <div className={SeatStyles.ada_filaMesa2}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="Ada"/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.ada_filaSillas2}>
        <p className={SeatStyles.numFila}>16</p>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16E" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16E") ? props.estadoAsientos.get("16E"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16F" 
          status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("16F") ? props.estadoAsientos.get("16F"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16G" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16G") ? props.estadoAsientos.get("16G"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16H" 
          status={props.estadoAsientos.get("16H") ? props.estadoAsientos.get("16H"): "libre"} orientation="norte"/>
        <Pasillo/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.ada_filaSillas3}>
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
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17E") ? props.estadoAsientos.get("17E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17F" 
          status={props.estadoAsientos.get("17F") ? props.estadoAsientos.get("17F"): "libre"} orientation="sur"/>
      </div>
      <div className={SeatStyles.ada_filaMesa3}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="AdaMax"/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.ada_filaSillas3}>
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
            status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("18E") ? props.estadoAsientos.get("18E"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18F" 
          status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18F") ? props.estadoAsientos.get("18F"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
    </div>
  );
}

export default AdaByron;
