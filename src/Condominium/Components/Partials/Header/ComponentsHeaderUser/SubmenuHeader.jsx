import React from 'react'
import Avatar from './../../../../../assets/img/avatar.png';
import { Navbar } from 'rbx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-solid-svg-icons';
function SubmenuHeader() {  
  return (
    <div className="dsc-header__submenu">
        <Navbar.Item className="dsc-header__submenu-icon">
            <FontAwesomeIcon icon={faBell} className="dsc-header__submenu-icon"/> 
            <Link to="/Home"></Link>
        </Navbar.Item>
            <FontAwesomeIcon icon={faBell} className="dsc-header__submenu-icon"/> 
        <div className="dsc-header__submenu-usr"><img src={Avatar} alt=""/></div>
    </div>
     );
}
export default SubmenuHeader;