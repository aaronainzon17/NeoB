/*Proyecto:     BibliUz
//Fecha:        noviembre-2020
//Autores:      Aarón Ibáñez Espés 779088, Pablo García García 781020, Arturo Calvera Tonin 776303
//Módulo:       Front-end del sistema de información del proyecto BibliUZ
//Fichero:      CardItem.js
//Descripción:  Componente CardItem usado a lo largo del front-end de BibliUz para mostrar imágenes agrupadas 
                y con links a otras partes del front end */

import React from 'react';
import SeatStyles from "./seat.module.scss"
import Seat from "./Seat"
import Pasillo from "./Pasillo"
import { Mesa } from "./Mesa"
import Enchufe from "./Enchufe"

function Hemeroteca(props) {
  return (
    <div className={SeatStyles.hemeroteca}>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <Pasillo/>
        <Pasillo/>
        <p className={SeatStyles.numFila}>A</p>
        <Pasillo/>
        <p className={SeatStyles.numFila}>B</p>
        <Mesa size="espacio"/>
        <p className={SeatStyles.numFila}>C</p>  
        <p className={SeatStyles.numFila}>D</p>
        <p className={SeatStyles.numFila}>E</p>
        <p className={SeatStyles.numFila}>F</p>
        <p className={SeatStyles.numFila}>G</p>
        <p className={SeatStyles.numFila}>H</p>
        <p className={SeatStyles.numFila}>I</p>
        <p className={SeatStyles.numFila}>J</p>
        <p className={SeatStyles.numFila}>K</p>
      </div>
      
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>1</p>
      <Mesa size="vertical_top"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="1A" 
        status={props.estadoAsientos.get("1A") ? props.estadoAsientos.get("1A"): "libre"} orientation="izquierda"/>
      <Pasillo/>
      <Mesa size="espacio"/>
      <Enchufe/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Enchufe/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Enchufe/>
      <Mesa size="espacio"/>
      </div>
      
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>2</p>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Pasillo/>
      <Mesa size="espacio"/>
      <Mesa size="vertical_top"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical_top"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical_top"/>
      <Mesa size="espacio"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>3</p>
      <Mesa size="vertical"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3A" 
        status={props.estadoAsientos.get("3A") ? props.estadoAsientos.get("3A"): "libre"} orientation="izquierda"/>
      <Pasillo/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3B" 
        status={props.estadoAsientos.get("3B") ? props.estadoAsientos.get("3B"): "libre"} orientation="derecha"/>
      <Mesa size="vertical"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3C" 
        status={props.estadoAsientos.get("3C") ? props.estadoAsientos.get("3C"): "libre"} orientation="izquierda"/>
      <Mesa size="espacio"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3E" 
        status={props.estadoAsientos.get("3E") ? props.estadoAsientos.get("3E"): "libre"} orientation="derecha"/>
      <Mesa size="vertical"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3G" 
        status={props.estadoAsientos.get("3G") ? props.estadoAsientos.get("3G"): "libre"} orientation="izquierda"/>
      <Mesa size="espacio"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3I" 
        status={props.estadoAsientos.get("3I") ? props.estadoAsientos.get("3I"): "libre"} orientation="derecha"/>
      <Mesa size="vertical"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="3K" 
        status={props.estadoAsientos.get("3K") ? props.estadoAsientos.get("3K"): "libre"} orientation="izquierda"/>
      </div>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>4</p>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Pasillo/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      </div>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>5</p>
      <Mesa size="vertical"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="5A" 
        status={props.estadoAsientos.get("5A") ? props.estadoAsientos.get("5A"): "libre"} orientation="izquierda"/>
      <Mesa size="espacio"/>
      <Pasillo/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      </div>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>6</p>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Pasillo/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      </div>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>7</p>
      <Mesa size="vertical"/>
      <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="7A" 
        status={props.estadoAsientos.get("7A") ? props.estadoAsientos.get("7A"): "libre"} orientation="izquierda"/>
      <Mesa size="espacio"/>
      <Pasillo/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      </div>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
      <p className={SeatStyles.numFila}>8</p>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Pasillo/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="espacio"/>
      <Mesa size="vertical"/>
      <Mesa size="espacio"/>
      </div>
      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>9</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9A" 
          status={props.estadoAsientos.get("9A") ? props.estadoAsientos.get("9A"): "libre"} orientation="izquierda"/>
        <Pasillo/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9B" 
          status={props.estadoAsientos.get("9B") ? props.estadoAsientos.get("9B"): "libre"} orientation="derecha"/>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9C" 
          status={props.estadoAsientos.get("9C") ? props.estadoAsientos.get("9C"): "libre"} orientation="izquierda"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9E" 
          status={props.estadoAsientos.get("9E") ? props.estadoAsientos.get("9E"): "libre"} orientation="derecha"/>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9G" 
          status={props.estadoAsientos.get("9G") ? props.estadoAsientos.get("9G"): "libre"} orientation="izquierda"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9I" 
          status={props.estadoAsientos.get("9I") ? props.estadoAsientos.get("9I"): "libre"} orientation="derecha"/>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="9K" 
          status={props.estadoAsientos.get("9K") ? props.estadoAsientos.get("9K"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>10</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="vertical_bottom"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="vertical_bottom"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="vertical_bottom"/>
        <Mesa size="espacio"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>11</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="11A" 
        status={props.estadoAsientos.get("11A") ? props.estadoAsientos.get("11A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>12</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>13</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="13A" 
        status={props.estadoAsientos.get("13A") ? props.estadoAsientos.get("13A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>14</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>15</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15A" 
        status={props.estadoAsientos.get("15A") ? props.estadoAsientos.get("15A"): "libre"} orientation="izquierda"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="15E" 
        status={props.estadoAsientos.get("15E") ? props.estadoAsientos.get("15E"): "libre"} orientation="derecha"/>
        <Mesa size="vertical_top"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>16</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="vertical_bottom"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="16G" 
        status={props.estadoAsientos.get("16G") ? props.estadoAsientos.get("16G"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>17</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="17A" 
          status={props.estadoAsientos.get("17A") ? props.estadoAsientos.get("17A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>18</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>19</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="19A" 
          status={props.estadoAsientos.get("19A") ? props.estadoAsientos.get("19A"): "libre"} orientation="izquierda"/>
      </div>
      
      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>20</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>21</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="21A" 
        status={props.estadoAsientos.get("21A") ? props.estadoAsientos.get("21A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>22</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>23</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="23A" 
        status={props.estadoAsientos.get("23A") ? props.estadoAsientos.get("23A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>24</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="24E" 
        status={props.estadoAsientos.get("24E") ? props.estadoAsientos.get("24E"): "libre"} orientation="derecha"/>
        <Mesa size="vertical_top"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>25</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25A" 
        status={props.estadoAsientos.get("25A") ? props.estadoAsientos.get("25A"): "libre"} orientation="izquierda"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="25G" 
        status={props.estadoAsientos.get("25G") ? props.estadoAsientos.get("25G"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>26</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="26E" 
        status={props.estadoAsientos.get("26E") ? props.estadoAsientos.get("26E"): "libre"} orientation="derecha"/>
        <Mesa size="vertical_bottom"/>
        <Mesa size="espacio"/>
        <Enchufe/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>27</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="27A" 
        status={props.estadoAsientos.get("27A") ? props.estadoAsientos.get("27A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>28</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>29</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="29A" 
        status={props.estadoAsientos.get("29A") ? props.estadoAsientos.get("29A"): "libre"} orientation="izquierda"/>
      </div>
      
      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>30</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>31</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="31A" 
        status={props.estadoAsientos.get("31A") ? props.estadoAsientos.get("31A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>32</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>33</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="33A" 
        status={props.estadoAsientos.get("33A") ? props.estadoAsientos.get("33A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>34</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>35</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="35A" 
        status={props.estadoAsientos.get("35A") ? props.estadoAsientos.get("35A"): "libre"} orientation="izquierda"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="35E" 
        status={props.estadoAsientos.get("35E") ? props.estadoAsientos.get("35E"): "libre"} orientation="derecha"/>
        <Mesa size="vertical_top"/>
      </div>
      
      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>36</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="36G" 
        status={props.estadoAsientos.get("36G") ? props.estadoAsientos.get("36G"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>37</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="37A" 
        status={props.estadoAsientos.get("37A") ? props.estadoAsientos.get("37A"): "libre"} orientation="izquierda"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="37E" 
        status={props.estadoAsientos.get("37E") ? props.estadoAsientos.get("37E"): "libre"} orientation="derecha"/>
        <Mesa size="vertical_bottom"/>
        <Mesa size="espacio"/>
        <Enchufe/>
      </div>
      
      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>38</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>39</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="39A" 
        status={props.estadoAsientos.get("39A") ? props.estadoAsientos.get("39A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>40</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>41</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="41A" 
        status={props.estadoAsientos.get("41A") ? props.estadoAsientos.get("41A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>42</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>43</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="43A" 
        status={props.estadoAsientos.get("43A") ? props.estadoAsientos.get("43A"): "libre"} orientation="izquierda"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>44</p>
        <Mesa size="vertical"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>45</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45A" 
        status={props.estadoAsientos.get("45A") ? props.estadoAsientos.get("45A"): "libre"} orientation="izquierda"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45C" 
        status={props.estadoAsientos.get("45C") ? props.estadoAsientos.get("45C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45D" 
        status={props.estadoAsientos.get("45D") ? props.estadoAsientos.get("45D"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45E" 
        status={props.estadoAsientos.get("45E") ? props.estadoAsientos.get("45E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45F" 
        status={props.estadoAsientos.get("45F") ? props.estadoAsientos.get("45F"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45G" 
        status={props.estadoAsientos.get("45G") ? props.estadoAsientos.get("45G"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45H" 
        status={props.estadoAsientos.get("45H") ? props.estadoAsientos.get("45H"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45I" 
        status={props.estadoAsientos.get("45I") ? props.estadoAsientos.get("45I"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="45J" 
        status={props.estadoAsientos.get("45J") ? props.estadoAsientos.get("45J"): "libre"} orientation="sur"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>46</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="hypatia"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>47</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47A" 
        status={props.estadoAsientos.get("47A") ? props.estadoAsientos.get("47A"): "libre"} orientation="izquierda"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47C" 
        status={props.estadoAsientos.get("47C") ? props.estadoAsientos.get("47C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47D" 
        status={props.estadoAsientos.get("47D") ? props.estadoAsientos.get("47D"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47E" 
        status={props.estadoAsientos.get("47E") ? props.estadoAsientos.get("47E"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47F" 
        status={props.estadoAsientos.get("47F") ? props.estadoAsientos.get("47F"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47G" 
        status={props.estadoAsientos.get("47G") ? props.estadoAsientos.get("47G"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47H" 
        status={props.estadoAsientos.get("47H") ? props.estadoAsientos.get("47H"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47I" 
        status={props.estadoAsientos.get("47I") ? props.estadoAsientos.get("47I"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="47J" 
        status={props.estadoAsientos.get("47J") ? props.estadoAsientos.get("47J"): "libre"} orientation="norte"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>48</p>
        <Mesa size="vertical"/>

      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>49</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49A" 
        status={props.estadoAsientos.get("49A") ? props.estadoAsientos.get("49A"): "libre"} orientation="izquierda"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49C" 
        status={props.estadoAsientos.get("49C") ? props.estadoAsientos.get("49C"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49D" 
        status={props.estadoAsientos.get("49D") ? props.estadoAsientos.get("49D"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49E" 
        status={props.estadoAsientos.get("49E") ? props.estadoAsientos.get("49E"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49F" 
        status={props.estadoAsientos.get("49F") ? props.estadoAsientos.get("49F"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49G" 
        status={props.estadoAsientos.get("49G") ? props.estadoAsientos.get("49G"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49H" 
        status={props.estadoAsientos.get("49H") ? props.estadoAsientos.get("49H"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49I" 
        status={props.estadoAsientos.get("49I") ? props.estadoAsientos.get("49I"): "libre"} orientation="sur"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="49J" 
        status={props.estadoAsientos.get("49J") ? props.estadoAsientos.get("49J"): "libre"} orientation="sur"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>50</p>
        <Mesa size="vertical"/>
        <Mesa size="espacio"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Mesa size="hypatia"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>51</p>
        <Mesa size="vertical"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51A" 
        status={props.estadoAsientos.get("51A") ? props.estadoAsientos.get("51A"): "libre"} orientation="izquierda"/>
        <Pasillo/>
        <Mesa size="espacio"/>
        <Mesa size="espacio"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51C" 
        status={props.estadoAsientos.get("51C") ? props.estadoAsientos.get("51C"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51D" 
        status={props.estadoAsientos.get("51D") ? props.estadoAsientos.get("51D"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51E" 
        status={props.estadoAsientos.get("51E") ? props.estadoAsientos.get("51E"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51F" 
        status={props.estadoAsientos.get("51F") ? props.estadoAsientos.get("51F"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51G" 
        status={props.estadoAsientos.get("51G") ? props.estadoAsientos.get("51G"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51H" 
        status={props.estadoAsientos.get("51H") ? props.estadoAsientos.get("51H"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51I" 
        status={props.estadoAsientos.get("51I") ? props.estadoAsientos.get("51I"): "libre"} orientation="norte"/>
        <Seat use={props.use} setSeat={props.setSeat} currentSeat={props.value} seat="51J" 
        status={props.estadoAsientos.get("51J") ? props.estadoAsientos.get("51J"): "libre"} orientation="norte"/>
      </div>

      <div className={SeatStyles.hemeroteca_fila_sillas}>
        <p className={SeatStyles.numFila}>52</p>
        <Mesa size="vertical_bottom"/>
      </div>

    </div>
  );
}

export default Hemeroteca;
