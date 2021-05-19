import React, { useContext } from 'react';
import { Navbar, Input, Button } from 'rbx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faHome, faShoppingCart, faSearch, faHeart, faUserLock, faExclamationTriangle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import LayoutContext from '../../../../Hooks/Layout/Types/Layout.Context'
import BrandLeftNav from './Components/BrandLeftNav'
import UserContext from '../../../../Hooks/User/User.Context';
import SolidButton from '../../Buttons/SolidButton';


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
          <div className="dsc-left-nav-brand-busqueda">
          <Input type="text" color="info" placeholder="Casa/Usuario"/>
          <Button><FontAwesomeIcon icon={faSearch}/> </Button>
          {/* <SolidButton  txt= "Buscar" type="search">{faSearch}</SolidButton> */}
          </div>
          <div className="dsc-left-nav-menu-LoginOFF">
            <h5 className="dsc-left-nav-menu-LoginOFF__title">Asesoria</h5>
            <Navbar.Segment  className="dsc-left-nav-menu-LoginOFF__links">
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link">
                <FontAwesomeIcon icon={faHome}/> 
                <Link to="/">Inicio</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link">
              <FontAwesomeIcon icon= {faQuestionCircle}/>
                <Link to="/Inquiries">Consultas</Link>
              </Navbar.Item>
            </Navbar.Segment>
          </div>
          <div className="dsc-left-nav-menu-LoginOFF">
            <h5 className="dsc-left-nav-menu-LoginOFF__title">Mas que Hogares</h5>
            <Navbar.Segment  className="dsc-left-nav-menu-LoginOFF__links">
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link">
                <FontAwesomeIcon icon={faHome}/> 
                <Link to="/Households">Hogares</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link">
                <FontAwesomeIcon icon= {faHeart}/>
                <Link to="/user/messages">Convenios</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link">
                <FontAwesomeIcon icon= {faExclamationTriangle}/>
                <Link to="/user/security">Seguridad</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link">
                <FontAwesomeIcon icon= {faShoppingCart}/>
                <Link to="/Buy-Property">Comprar Propiedad</Link>
              </Navbar.Item>
              <Navbar.Item className="dsc-left-nav-menu-LoginOFF__links-link"> 
                <Link to="/Crud-Bulma-chart">Crud Bulma chart</Link>
              </Navbar.Item>
            </Navbar.Segment>
          </div>

        </div>

      </Navbar>
      }
      </React.Fragment>
     );
}
