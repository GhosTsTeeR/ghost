import { Redirect, Route, Switch } from 'react-router';
import { PublicRoute } from './helperRoutes';
import { isAuthenticated } from '../Condominium/services/auth/authentication';
import Home from '../Condominium/views/Home';
import Inquiries from '../Condominium/views/Inquiries';
import Households from '../Condominium/views/Households';
import BuyProperty from '../Condominium/views/BuyProperty';
import CrudBulmaChart from '../Condominium/views/CrudBulmaChart';
const loginOFFRoutes = () => {
    const { isAuth } = isAuthenticated();
    return (
        
        <Switch>
            <PublicRoute exact path="/" component={Home}/>
            <PublicRoute exact path="/Inquiries" component={Inquiries}/>
            <PublicRoute exact path="/Households" component={Households}/>
            <PublicRoute exact path="/Buy-Property" component={BuyProperty}/>
            <PublicRoute exact path="/Crud-Bulma-chart" component={CrudBulmaChart}/>
            <Route exact path="*" render={() => {
                return <Redirect  to={isAuth ? '/user/profile' : '/'}/> 
            }}/>
        </Switch>
    )
}

export default loginOFFRoutes