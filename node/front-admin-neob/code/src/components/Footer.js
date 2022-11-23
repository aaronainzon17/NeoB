/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Footer.js
//Descripción:  Componente Footer usado a lo largo del front-end de NeoB como pie de página*/


import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contacto</h2>
            <p>subesteina@unizar.es</p>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              NeoB Admin
            </Link>
          </div>
          <small className='website-rights'>NeoB © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
