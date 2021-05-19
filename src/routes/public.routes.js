import React from 'react';
import { Switch,Redirect,  } from 'react-router-dom'
import {PublicRoute} from './helperRoutes'


/* Rutas para el producto */

import HomePro from '../Products/Home';
import Categorias from '../Products/Categorias';
import Rol from '../Products/Rol'; 
import Productos from '../Products/Productos';

/* Rutas para el Condominio */
import Home from '../Condominium/views/Home';






const Routes = () => {
    return (
        <Switch>

                {/* Rutas para el producto */}

            <PublicRoute exact path="/" component={HomePro}/>
            <PublicRoute exact path="/home" component={HomePro}/>
            <PublicRoute exact path="/Rol" component={Rol}/>
            <PublicRoute exact path="/Categorias" component={Categorias}/>
            <Redirect path="/**" to="/"/> 

                {/* Rutas para el Condominio */}

            <PublicRoute exact path="/" component={Home}/>
            <Redirect path="/**" to="/"/>
        </Switch>

    )
}
export default Routes;