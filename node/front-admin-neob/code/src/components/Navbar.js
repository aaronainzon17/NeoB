/*Proyecto:     NeoB
//Módulo:       Front-end del sistema de información del proyecto NeoB
//Fichero:      Navbar.js
//Descripción:  Componente Navbar usado a lo largo del front-end de NeoB como barra de navegación*/

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import AuthenticationDataService from "../services/auth.service";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const user = AuthenticationDataService.getCurrentUser();

  const handleLogOut = () => {
    AuthenticationDataService.logout();
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
          NeoB Admin
          </Link>
          { user ?
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          :
          <div>
          </div>
          }
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          { user ?
            <li>
            <Link
            to='/cambiarPassword'
            className='nav-links-mobile'
            >
              Cambiar Contraseña
            </Link>
            <Link
            to='/'
            className='nav-links-mobile'
            onClick={handleLogOut}
            >
              Cerrar Sesión
            </Link>
            </li>
            :
            <li>
            </li>
          }
          </ul>
          { user && button ?
            <>
              <Link to='/cambiarPassword' className='nav-links' >Cambiar Contraseña</Link>
              <Button buttonStyle='btn--outline' path='/' onClick={handleLogOut}>Cerrar Sesión</Button>
            </>
            : 
            <li>
            </li>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
