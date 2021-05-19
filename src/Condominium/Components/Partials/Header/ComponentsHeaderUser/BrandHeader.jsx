import React from 'react'
import Logo from './../../../../../assets/img/logo.png'
import { Navbar } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons';
function BrandHeader({props}) {
  const {onShowHideleftNav} = props;  
  return (
    
      <Navbar.Brand className="dsc-header__brand">
        <FontAwesomeIcon icon= {faBars} className="dsc-header__brand-menu" onClick={onShowHideleftNav}/>
        <div className="dsc-header__brand-logo">
          <img src={Logo} alt="Logo"/>
          <spam> Condominio</spam>
        </div>
      </Navbar.Brand>

    
     );
}
export default BrandHeader;