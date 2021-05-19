import React, { useContext } from 'react'
import LayoutContext from '../../Hooks/Layout/Types/Layout.Context'


export default  function MainContainer(props) {  
  const layout$ = useContext(LayoutContext);
  const { show } = layout$;
  const classContainer = show ? 'dsc-main-container' : 'dsc-main-container-full';
  const { children } = props
  return (
        <div className={classContainer}>
            {children}
        </div>
     );
}
