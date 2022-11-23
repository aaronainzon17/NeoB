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

function TomasPollan(props) {
  return (
    <div className={SeatStyles.tomasPollan}>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1I" 
        status={props.estadoAsientos.get("1I") ? props.estadoAsientos.get("1I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1J") ? props.estadoAsientos.get("1J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1K") ? props.estadoAsientos.get("1K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1L") ? props.estadoAsientos.get("1L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1M") ? props.estadoAsientos.get("1M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("1N") ? props.estadoAsientos.get("1N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("1O") ? props.estadoAsientos.get("1O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("1P") ? props.estadoAsientos.get("1P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2I") ? props.estadoAsientos.get("2I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2J") ? props.estadoAsientos.get("2J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2K") ? props.estadoAsientos.get("2K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2L" 
        status={props.estadoAsientos.get("2L") ? props.estadoAsientos.get("2L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2M") ? props.estadoAsientos.get("2M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("2N") ? props.estadoAsientos.get("2N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("2O") ? props.estadoAsientos.get("2O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="2P" 
        status={props.estadoAsientos.get("2P") ? props.estadoAsientos.get("2P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13I" 
        status={props.estadoAsientos.get("13I") ? props.estadoAsientos.get("13I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13J") ? props.estadoAsientos.get("13J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13K") ? props.estadoAsientos.get("13K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13L") ? props.estadoAsientos.get("13L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13M") ? props.estadoAsientos.get("13M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("13N") ? props.estadoAsientos.get("13N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("13O") ? props.estadoAsientos.get("13O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("13P") ? props.estadoAsientos.get("13P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14I") ? props.estadoAsientos.get("14I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("14J") ? props.estadoAsientos.get("14J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14K") ? props.estadoAsientos.get("14K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14L" 
        status={props.estadoAsientos.get("14L") ? props.estadoAsientos.get("14L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14M") ? props.estadoAsientos.get("14M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("14N") ? props.estadoAsientos.get("14N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("14O") ? props.estadoAsientos.get("14O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="14P" 
        status={props.estadoAsientos.get("14P") ? props.estadoAsientos.get("14P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15I" 
        status={props.estadoAsientos.get("15I") ? props.estadoAsientos.get("15I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15J") ? props.estadoAsientos.get("15J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15K") ? props.estadoAsientos.get("15K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15L") ? props.estadoAsientos.get("15L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15M") ? props.estadoAsientos.get("15M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("15N") ? props.estadoAsientos.get("15N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("15O") ? props.estadoAsientos.get("15O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("15P") ? props.estadoAsientos.get("15P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16I") ? props.estadoAsientos.get("16I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("16J") ? props.estadoAsientos.get("16J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16K") ? props.estadoAsientos.get("16K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16L" 
        status={props.estadoAsientos.get("16L") ? props.estadoAsientos.get("16L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16M") ? props.estadoAsientos.get("16M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("16N") ? props.estadoAsientos.get("16N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("16O") ? props.estadoAsientos.get("16O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16P" 
        status={props.estadoAsientos.get("16P") ? props.estadoAsientos.get("16P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17I" 
        status={props.estadoAsientos.get("17I") ? props.estadoAsientos.get("17I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17J") ? props.estadoAsientos.get("17J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("17K") ? props.estadoAsientos.get("17K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17L") ? props.estadoAsientos.get("17L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("17M") ? props.estadoAsientos.get("17M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("17N") ? props.estadoAsientos.get("17N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("17O") ? props.estadoAsientos.get("17O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("17P") ? props.estadoAsientos.get("17P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18I") ? props.estadoAsientos.get("18I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("18J") ? props.estadoAsientos.get("18J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18K") ? props.estadoAsientos.get("18K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18L" 
        status={props.estadoAsientos.get("18L") ? props.estadoAsientos.get("18L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18M") ? props.estadoAsientos.get("18M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("18N") ? props.estadoAsientos.get("18N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("18O") ? props.estadoAsientos.get("18O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="18P" 
        status={props.estadoAsientos.get("18P") ? props.estadoAsientos.get("18P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19I" 
        status={props.estadoAsientos.get("19I") ? props.estadoAsientos.get("19I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("19J") ? props.estadoAsientos.get("19J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("19K") ? props.estadoAsientos.get("19K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("19L") ? props.estadoAsientos.get("19L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("19M") ? props.estadoAsientos.get("19M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("19N") ? props.estadoAsientos.get("19N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("19O") ? props.estadoAsientos.get("19O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("19P") ? props.estadoAsientos.get("19P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20I") ? props.estadoAsientos.get("20I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("20J") ? props.estadoAsientos.get("20J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20K") ? props.estadoAsientos.get("20K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20L" 
        status={props.estadoAsientos.get("20L") ? props.estadoAsientos.get("20L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20M") ? props.estadoAsientos.get("20M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("20N") ? props.estadoAsientos.get("20N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("20O") ? props.estadoAsientos.get("20O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="20P" 
        status={props.estadoAsientos.get("20P") ? props.estadoAsientos.get("20P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21I" 
        status={props.estadoAsientos.get("21I") ? props.estadoAsientos.get("21I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("21J") ? props.estadoAsientos.get("21J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("21K") ? props.estadoAsientos.get("21K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("21L") ? props.estadoAsientos.get("21L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("21M") ? props.estadoAsientos.get("21M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("21N") ? props.estadoAsientos.get("21N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("21O") ? props.estadoAsientos.get("21O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("21P") ? props.estadoAsientos.get("21P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
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
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22I") ? props.estadoAsientos.get("22I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("22J") ? props.estadoAsientos.get("22J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22K") ? props.estadoAsientos.get("22K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22L" 
        status={props.estadoAsientos.get("22L") ? props.estadoAsientos.get("22L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22M") ? props.estadoAsientos.get("22M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("22N") ? props.estadoAsientos.get("22N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("22O") ? props.estadoAsientos.get("22O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="22P" 
        status={props.estadoAsientos.get("22P") ? props.estadoAsientos.get("22P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>23</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23A" 
        status={props.estadoAsientos.get("23A") ? props.estadoAsientos.get("23A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("23B") ? props.estadoAsientos.get("23B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("23C") ? props.estadoAsientos.get("23C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("23D") ? props.estadoAsientos.get("23D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("23E") ? props.estadoAsientos.get("23E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("23F") ? props.estadoAsientos.get("23F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("23G") ? props.estadoAsientos.get("23G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("23H") ? props.estadoAsientos.get("23H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23I" 
        status={props.estadoAsientos.get("23I") ? props.estadoAsientos.get("23I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("23J") ? props.estadoAsientos.get("23J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("23K") ? props.estadoAsientos.get("23K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("23L") ? props.estadoAsientos.get("23L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("23M") ? props.estadoAsientos.get("23M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("23N") ? props.estadoAsientos.get("23N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("23O") ? props.estadoAsientos.get("23O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("23P") ? props.estadoAsientos.get("23P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollan"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>24</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24A") ? props.estadoAsientos.get("24A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("24B") ? props.estadoAsientos.get("24B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24C") ? props.estadoAsientos.get("24C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24D" 
        status={props.estadoAsientos.get("24D") ? props.estadoAsientos.get("24D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24E") ? props.estadoAsientos.get("24E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("24F") ? props.estadoAsientos.get("24F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24G") ? props.estadoAsientos.get("24G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24H" 
        status={props.estadoAsientos.get("24H") ? props.estadoAsientos.get("24H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24I") ? props.estadoAsientos.get("24I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("24J") ? props.estadoAsientos.get("24J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24K") ? props.estadoAsientos.get("24K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24L" 
        status={props.estadoAsientos.get("24L") ? props.estadoAsientos.get("24L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24M") ? props.estadoAsientos.get("24M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("24N") ? props.estadoAsientos.get("24N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("24O") ? props.estadoAsientos.get("24O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24P" 
        status={props.estadoAsientos.get("24P") ? props.estadoAsientos.get("24P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>25</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25A" 
        status={props.estadoAsientos.get("25A") ? props.estadoAsientos.get("25A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("25B") ? props.estadoAsientos.get("25B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("25C") ? props.estadoAsientos.get("25C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("25D") ? props.estadoAsientos.get("25D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("25E") ? props.estadoAsientos.get("25E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("25F") ? props.estadoAsientos.get("25F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("25G") ? props.estadoAsientos.get("25G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("25H") ? props.estadoAsientos.get("25H"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>26</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("26A") ? props.estadoAsientos.get("26A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("26B") ? props.estadoAsientos.get("26B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("26C") ? props.estadoAsientos.get("26C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26D" 
        status={props.estadoAsientos.get("26D") ? props.estadoAsientos.get("26D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("26E") ? props.estadoAsientos.get("26E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("26F") ? props.estadoAsientos.get("26F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("26G") ? props.estadoAsientos.get("26G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26H" 
        status={props.estadoAsientos.get("26H") ? props.estadoAsientos.get("26H"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>27</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27A" 
        status={props.estadoAsientos.get("27A") ? props.estadoAsientos.get("27A"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27B" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("27B") ? props.estadoAsientos.get("27B"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27C" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("27C") ? props.estadoAsientos.get("27C"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27D" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("27D") ? props.estadoAsientos.get("27D"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27E" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("27E") ? props.estadoAsientos.get("27E"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27F" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("27F") ? props.estadoAsientos.get("27F"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27G" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("27G") ? props.estadoAsientos.get("27G"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27H" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("27H") ? props.estadoAsientos.get("27H"): "libre"} orientation="sur"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27I" 
        status={props.estadoAsientos.get("27I") ? props.estadoAsientos.get("27I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("27J") ? props.estadoAsientos.get("27J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("27K") ? props.estadoAsientos.get("27K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("27L") ? props.estadoAsientos.get("27L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("27M") ? props.estadoAsientos.get("27M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("27N") ? props.estadoAsientos.get("27N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("27O") ? props.estadoAsientos.get("27O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("27P") ? props.estadoAsientos.get("27P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Mesa size="tomasPollan"/>
      <Pasillo/>
      <Mesa size="tomasPollanEnchufe"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>28</p>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28A" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28A") ? props.estadoAsientos.get("28A"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28B" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("28B") ? props.estadoAsientos.get("28B"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28C" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28C") ? props.estadoAsientos.get("28C"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28D" 
        status={props.estadoAsientos.get("28D") ? props.estadoAsientos.get("28D"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28E" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28E") ? props.estadoAsientos.get("28E"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28F" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("28F") ? props.estadoAsientos.get("28F"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28G" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28G") ? props.estadoAsientos.get("28G"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28H" 
        status={props.estadoAsientos.get("28H") ? props.estadoAsientos.get("28H"): "libre"} orientation="norte"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28I") ? props.estadoAsientos.get("28I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("28J") ? props.estadoAsientos.get("28J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28K") ? props.estadoAsientos.get("28K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28L" 
        status={props.estadoAsientos.get("28L") ? props.estadoAsientos.get("28L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28M") ? props.estadoAsientos.get("28M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("28N") ? props.estadoAsientos.get("28N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("28O") ? props.estadoAsientos.get("28O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="28P" 
        status={props.estadoAsientos.get("28P") ? props.estadoAsientos.get("28P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>29</p>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29I" 
        status={props.estadoAsientos.get("29I") ? props.estadoAsientos.get("29I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("29J") ? props.estadoAsientos.get("29J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("29K") ? props.estadoAsientos.get("29K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("29L") ? props.estadoAsientos.get("29L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("29M") ? props.estadoAsientos.get("29M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("29N") ? props.estadoAsientos.get("29N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("29O") ? props.estadoAsientos.get("29O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("29P") ? props.estadoAsientos.get("29P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Pasillo/>
      <Pasillo/>
      <Mesa size="tomasPollanEnchufe"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>30</p>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("30I") ? props.estadoAsientos.get("30I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("30J") ? props.estadoAsientos.get("30J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("30K") ? props.estadoAsientos.get("30K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30L" 
        status={props.estadoAsientos.get("30L") ? props.estadoAsientos.get("30L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("30M") ? props.estadoAsientos.get("30M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("30N") ? props.estadoAsientos.get("30N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("30O") ? props.estadoAsientos.get("30O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="30P" 
        status={props.estadoAsientos.get("30P") ? props.estadoAsientos.get("30P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>31</p>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31I" 
        status={props.estadoAsientos.get("31I") ? props.estadoAsientos.get("31I"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31J" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("31J") ? props.estadoAsientos.get("31J"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31K" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("31K") ? props.estadoAsientos.get("31K"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31L" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("31L") ? props.estadoAsientos.get("31L"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31M" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("31M") ? props.estadoAsientos.get("31M"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31N" 
        status={props.aforoActual === 50 ? "no disponible" : props.estadoAsientos.get("31N") ? props.estadoAsientos.get("31N"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31O" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("31O") ? props.estadoAsientos.get("31O"): "libre"} orientation="sur"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31P" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("31P") ? props.estadoAsientos.get("29P"): "libre"} orientation="sur"/>
      </div> 
      <div className={SeatStyles.tomasPollan_filaMesa}>
      <p className={SeatStyles.numFila}> </p>
      <Pasillo/>
      <Pasillo/>
      <Mesa size="tomasPollanEnchufe"/>
      </div>
      <div className={SeatStyles.tomasPollan_filaSillas}>
      <p className={SeatStyles.numFila}>32</p>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32I" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("32I") ? props.estadoAsientos.get("32I"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32J" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("32J") ? props.estadoAsientos.get("32J"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32K" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("32K") ? props.estadoAsientos.get("32K"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32L" 
        status={props.estadoAsientos.get("32L") ? props.estadoAsientos.get("32L"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32M" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("32M") ? props.estadoAsientos.get("32M"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32N" 
        status={props.aforoActual < 50 ? "no disponible" : props.estadoAsientos.get("32N") ? props.estadoAsientos.get("32N"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32O" 
        status={props.aforoActual < 100 ? "no disponible" : props.estadoAsientos.get("32O") ? props.estadoAsientos.get("32O"): "libre"} orientation="norte"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="32P" 
        status={props.estadoAsientos.get("32P") ? props.estadoAsientos.get("32P"): "libre"} orientation="norte"/>
      </div>
      <Pasillo/>
      </div>
  );
}

export default TomasPollan;
