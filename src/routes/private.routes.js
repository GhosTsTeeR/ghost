import React from 'react';
import { Switch } from 'react-router-dom'
import {PrivateRoute} from './helperRoutes'
import { Redirect } from 'react-router-dom';
import Productos from '../Products/Productos';



const PrivateRoutes = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/Productos" component={Productos}/>
            <Redirect path="/**" to="/"/> 
        </Switch>

    )
}
export default PrivateRoutes;