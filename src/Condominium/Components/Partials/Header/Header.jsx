import React, { useContext } from 'react'
import SubmenuHeader from './ComponentsHeaderUser/SubmenuHeader'
import BrandHeader from './ComponentsHeaderUser/BrandHeader'
import { Navbar } from 'rbx';
import LayautContext from '../../../../Hooks/Layout/Types/Layout.Context';
import UserContext from '../../../../Hooks/User/User.Context';

function Header() {  
  const layout$ = useContext(LayautContext);
  const user$ = useContext(UserContext)
  return (
    
    <Navbar className="dsc-header" >
      <BrandHeader props= {layout$}/>
      <SubmenuHeader props={user$}/>
    </Navbar>
    
     );
}
export default Header;