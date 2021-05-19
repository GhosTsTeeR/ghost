import React from 'react'
import ListInfoUser from './Components/Listar/ListInfoUser'
import PublicRoutes from '../routes/public.routes';
import PrivateRoutes from '../routes/private.routes';
import Routes from '../routes/routes';
import MainContainer from './Components/MainContainer'
import Header from './Components/Partials/Header/Header'
import LeftNav from './Components/Partials/LeftNav/LeftNav'
import FooterT from './Components/Partials/Footer/FooterT'
import LayoutProvider from '../Hooks/Layout/Types/Layout.Provider'
import './../assets/styles/scss/Partials.scss';

import MainContent from './Components/MainContent'
import { isAuthenticated } from './services/auth/authentication';

function CondominiumLayout(props) {
  const isAuth = isAuthenticated();
  
  return (
    <Routes/>
  );
}

export default CondominiumLayout;