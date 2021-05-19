import React from 'react';
import { Switch,Redirect, Route } from 'react-router-dom'
import {PublicRoute } from './helperRoutes'
import { isAuthenticated } from '../Condominium/services/auth/authentication';
import UserRoutes from './user-routing.routes'
import LoginOFFRoutes from './loginOFF-routing.routes';
import UserProvider from '../Hooks/User/User.Provider'


/* Rutas para el producto */

import HomePro from '../Products/Home';
import Categorias from '../Products/Categorias';
import Rol from '../Products/Rol'; 
import Productos from '../Products/Productos';

/* Rutas para el Condominio */
import Home from '../Condominium/views/Home';
import MainContainer from '../Condominium/Components/MainContainer';
import Header from '../Condominium/Components/Partials/Header/Header';
import LeftNav from '../Condominium/Components/Partials/LeftNav/LeftNav';
import MainContent from '../Condominium/Components/MainContent';
import FooterT from '../Condominium/Components/Partials/Footer/FooterT';
import LayoutProvider from '../Hooks/Layout/Types/Layout.Provider';
import HeaderLoginOFF from '../Condominium/Components/Partials/Header/HeaderLoginOFF'
import LefNavLoginOFF from '../Condominium/Components/Partials/LeftNav/LefNavLoginOFF';
import SecurityRoutes from './security-routing.routes';



const Routes = () => {
    const { isAuth } = isAuthenticated();
    return (
        <Switch>
             <LayoutProvider>
                <MainContainer>
                    <HeaderLoginOFF/>
                    <LefNavLoginOFF/>
                    <MainContent>
                        <LoginOFFRoutes/>
                    </MainContent>
                    <FooterT/>
                </MainContainer>
            </LayoutProvider> 
            
            <PublicRoute exact path="/" component={Home}/>
            <LayoutProvider>
                <MainContainer>
                    <Header/>
                    <LeftNav/>
                    <MainContent>
                        <Route path="/user">
                            <UserProvider>
                                <UserRoutes/>
                            </UserProvider>
                        </Route>
                    </MainContent>
                    <FooterT/>
                </MainContainer>
            </LayoutProvider>
            <LayoutProvider>
                <MainContainer>
                    <HeaderLoginOFF/>
                    <LefNavLoginOFF/>
                    <MainContent>
                        <LoginOFFRoutes/>
                    </MainContent>
                    <FooterT/>
                </MainContainer>
            </LayoutProvider> 
            
            <LayoutProvider>
                <MainContainer>
                    <Header/>
                    <LeftNav/>
                    <MainContent>
                        <Route path="/security">
                            <UserProvider>
                                <SecurityRoutes/>
                            </UserProvider>
                        </Route>
                    </MainContent>
                    <FooterT/>
                </MainContainer>
            </LayoutProvider> 
            <Route exact path="*" render={() => {
                return <Redirect  to={isAuth ? '/user/profile' : '/'}/> 
            }}/>
        </Switch>

    )
}
export default Routes;