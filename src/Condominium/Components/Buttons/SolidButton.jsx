import React from 'react'
import StyledSolidButton from './components/StyledSolidButton'
import {  faHome, faShoppingCart, faSearch, faHeart, faUserLock, faExclamationTriangle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
const SolidButton = ({form, props, txt, type}) => { 
  return (
    <React.Fragment >
        <StyledSolidButton   {...props} type={type}>{txt} </StyledSolidButton>
    </React.Fragment>
    
     );
}
export default SolidButton;



