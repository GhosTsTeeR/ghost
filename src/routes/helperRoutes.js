import { Route, Redirect} from 'react-router-dom';
import { isAuthenticated } from '../Condominium/services/auth/authentication';

export const PrivateRoute = ({component, ...options})=> {
    const isAuth = isAuthenticated();
    if (isAuth) return <Route {...options} component={component} />
    return <Redirect to="/Home"/>
    
}

export const PublicRoute = ({component, ...options})=> {
    const isAuth = isAuthenticated();
    if (!isAuth) return <Route {...options} component={component} />
    return <Redirect to="/user/my-favorites"/>
    
}