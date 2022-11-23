/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      CardItem.js
//Descripción:  Componente CardItem usado a lo largo del front-end de NeoB para mostrar imágenes agrupadas 
                y con links a otras partes del front end */

import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link onClick={scroll.scrollToTop} className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt={props.text}
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
