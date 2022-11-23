/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Navbar.js
//Descripción:  Componente Navbar usado a lo largo del front-end de NeoB como barra de navegación*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          NeoB (En Pruebas)
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/reservar/CRE.1201.01.480'//'/salas'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Salas de estudio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/protocolo'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Protocolo Covid
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
