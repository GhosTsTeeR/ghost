import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from './../../../../../assets/img/logo.png'


export default  function BrandLeftNav({props}) {  
    const {onShowHideleftNav} = props;
  return (
    <div className="dsc-left-nav-brand">
        <FontAwesomeIcon icon= {faBars} className="dsc-lef-nav-brand__menu" onClick={onShowHideleftNav}/>
        <div className="dsc-left-nav-brand__logo">
            <img src={Logo} alt="Logo"/>
            <spam> Condominio</spam>
        </div>
    </div>
    
     );
}
