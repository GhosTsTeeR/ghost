import React, { useContext } from 'react'
import Logo from '../../../../assets/img/logo.png';
import { Navbar, Button } from 'rbx';
import { Link } from 'react-router-dom';
import ModalLogin from '../../Modals/ModalLogin';
import BrandHeader from './ComponentsHeaderLoginOFF/BrandHeader';
import SubmenuHeader from './ComponentsHeaderLoginOFF/SubmenuHeader';
import LayautContext from '../../../../Hooks/Layout/Types/Layout.Context';
import UserContext from '../../../../Hooks/User/User.Context';
function Headerbx() {  
  const layout$ = useContext(LayautContext);
  const user$ = useContext(UserContext)
  return (
    <Navbar className="dsc-header" >
      <BrandHeader props= {layout$}/>
      <SubmenuHeader props={user$}/>
    </Navbar>
    
     );
}
export default Headerbx;