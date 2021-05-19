import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { PrivateRoute } from './helperRoutes';
import Home from '../Condominium/views/Users/Home';
import MyFavourites from '../Condominium/views/Users/MyFavourites';
import Profile from '../Condominium/views/Users/Profile';
import Messages from '../Condominium/views/Users/Messages';
import Administration from '../Condominium/views/Users/Administration';
import Security from '../Condominium/views/Users/Security';
import { isAuthenticated } from '../Condominium/services/auth/authentication';
import Productos from '../Products/Productos';
import BuyAndSell from '../Condominium/views/Users/BuyAndSell';
import Publications from '../Condominium/views/Users/Publications';
import Friends from '../Condominium/views/Users/Friends';



const UserRoutes = () => {
    const {path} =useRouteMatch();
    const { isAuth } = isAuthenticated();
    return (
        <Switch>
            <PrivateRoute exact path={`${path}/Home`} component={Home}/>
            <PrivateRoute exact path={`${path}/My-favorites`} component={MyFavourites}/>
            <PrivateRoute exact path={`${path}/Profile`} component={Profile}/>
            <PrivateRoute exact path={`${path}/Messages`} component={Messages}/>
            <PrivateRoute exact path={`${path}/Administration`} component={Administration}/>
            <PrivateRoute exact path={`${path}/Security`} component={Security}/>
            <PrivateRoute exact path={`${path}/Productos`} component={Productos}/>
            <PrivateRoute exact path={`${path}/Friends`} component={Friends}/>
            <PrivateRoute exact path={`${path}/Publications`} component={Publications}/>
            <PrivateRoute exact path={`${path}/Buy-And-Sell`} component={BuyAndSell}/>
            <PrivateRoute exact path={`${path}/Productos`} component={Productos}/>
            <Route exact path="*" render={() => {
                return <Redirect  to={isAuth ? '/user/profile' : '/Inquiries'}/> 
            }}/>
        </Switch>
    )
}

export default UserRoutes