import React, { useContext } from 'react';
import { Navbar } from 'rbx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faUser,faUserCog ,faClipboard, faHome, faShoppingCart, faComments, faHeart, faUserLock, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from './../../../../assets/img/logo.png'
import Avatar from './../../../../assets/img/avatar.png';
import LayoutContext from '../../../../Hooks/Layout/Types/Layout.Context'
import BrandLeftNav from './Components/BrandLeftNav'
import UserLeftNav from './Components/UserLeftNav'
import UserContext from '../../../../Hooks/User/User.Context';


export default  function LeftNav() {  
  const layout$ = useContext(LayoutContext);
  const { show } = layout$;
  const user$ = useContext(UserContext)
  return (
    <React.Fragment>
      {show &&
      <Navbar className="dsc-left-nav">
        <div className="dsc-container-nav-brand">
          <BrandLeftNav props={layout$}/>
          <div className="dsc-left-nav-usr">
            <div className="dsc-left-nav-usr__avatar"><img src={Avatar} alt=""/></div>
            
              <h4 className="dsc-left-usr__name">{user$.username}fdfdf</h4>
              <h6 className="dsc-left-usr__position">{user$.estado}</h6>
          </div>
          <div className="dsc-left-nav-menu">
            <h5 className="dsc-left-nav-menu__title">Mi cuenta</h5>
            <Navbar.Segment  className="dsc-left-nav-menu__links">
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon={faHome}/> 
                <Link to="/user/Home">inicio</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
              <FontAwesomeIcon icon= {faUserCog}/>
                <Link to="/user/Profile">Mi Perfil</Link>
              </Navbar.Item>
            </Navbar.Segment>
          </div>
          <div className="dsc-left-nav-menu">
            <h5 className="dsc-left-nav-menu__title">Aficiones</h5>
            <Navbar.Segment  className="dsc-left-nav-menu__links">
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon={faHeart}/>
                <Link to="/user/My-favorites">Mis Favoritos</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faComments}/>
                <Link to="/user/Messages">Mensaje</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faUserLock}/>
                <Link to="/user/Administration">Administación</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faExclamationTriangle}/>
                <Link to="/user/Security">Seguridad</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faShoppingCart}/>
                <Link to="/user/Buy-And-Sell">Compra y Venta</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faShoppingCart}/>
                <Link to="/user/Friends">Amigos</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faShoppingCart}/>
                <Link to="/user/Publications">Publicaciones</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu__links-link">
                <FontAwesomeIcon icon= {faShoppingCart}/>
                <Link to="/user/Productos">Productos (ejemplo)</Link>
              </Navbar.Item>
            </Navbar.Segment>
          </div>

        </div>

      </Navbar>
      }
      </React.Fragment>
     );
}
