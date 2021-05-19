import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { PublicRoute } from './helperRoutes';
import HomePro from '../Products/Home';
import Categorias from '../Products/Categorias';
import Rol from '../Products/Rol'; 
import Productos from '../Products/Productos';



const SecurityRoutes = () => {
    const {path} =useRouteMatch();
    return (
        <Switch>
            <PublicRoute exact path="/homePeli" component={HomePro}/>
            <PublicRoute exact path="/Rol" component={Rol}/>
            <PublicRoute exact path="/Categorias" component={Categorias}/>
            <PublicRoute exact path="/Productos" component={Productos}/>
            <Route exact path="*" render={() => {
                return <Redirect  to='/'/> 
            }}/>
        </Switch>
    )
}

export default SecurityRoutes;