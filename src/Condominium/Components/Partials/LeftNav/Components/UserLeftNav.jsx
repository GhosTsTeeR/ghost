import React from 'react';
import { Navbar } from 'rbx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars,faUserCog, faHome, faShoppingCart, faComments, faHeart, faUserLock, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Avatar from './../../../../../assets/img/avatar.png';




export default  function UserLeftNav() {  
  return (
        <div className="dcs-left-nav-menu-usr">
          <div className="dsc-left-nav-usr">
            <div className="dsc-left-nav-usr__avatar"><img src={Avatar} alt=""/></div>
            
              <h4 className="dsc-left-usr__name">GhosTsTeeR</h4>
              <h6 className="dsc-left-usr__position">SoftwareDeveloper</h6>
          </div>
          <div className="dsc-left-nav-menu">
            <h5 className="dsc-left-nav-menu__title">Mi cuenta</h5>
            <Navbar.Segment  className="dsc-left-nav-menu__links">
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon={faHome}/> 
                <Link to="/Home">Inicio</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
              <FontAwesomeIcon icon= {faUserCog}/>
                <Link to="/Rol">Mi Perfil</Link>
              </Navbar.Item>
            </Navbar.Segment>
          </div>
          <div className="dsc-left-nav-menu">
            <h5 className="dsc-left-nav-m">Aficiones</h5>
            <Navbar.Segment  className="dsc-left-nav-menu__links">
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon={faHeart}/>
                <Link to="/Home">Mis Favoritos</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faComments}/>
                <Link to="/Categorias">Mensajes</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faUserLock}/>
                <Link to="/faUserLock">Administracion</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faExclamationTriangle}/>
                <Link to="/Categorias">Seguridad</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faShoppingCart}/>
                <Link to="/Productos">Compra y Venta</Link>
              </Navbar.Item>
            </Navbar.Segment>
          </div>
        </div>

     );
}
