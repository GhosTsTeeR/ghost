import React from 'react'
import { Navbar } from 'rbx';
import ModalLogin from '../../../Modals/ModalLogin';
function SubmenuHeader() {  
  return (
    <div className="dsc-header__submenu">
        <div>
            <ModalLogin/>
        </div>
    </div>
     );
}
export default SubmenuHeader;