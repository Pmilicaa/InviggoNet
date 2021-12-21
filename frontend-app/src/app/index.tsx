/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Header } from './components/Header';
import { SearchUserPage } from './pages/SearchUserPage/Loadable';
import { Footer } from './components/Footer';
import '../styles/styles.css';
import { FriendRequestsPage } from './pages/FriendRequests';
import { RegisterPage } from './pages/RegisterPage/Loadable';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { useCurrentUserSlice } from './pages/LoginPage/slice';


export function App() {

  const dispatch = useDispatch();

  const { actions } = useCurrentUserSlice();

  React.useEffect(() => {
    dispatch(actions.getUser(undefined));
  }, [])

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - InviggoNet"
        defaultTitle="InviggoNet"
      ></Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search/:search" component={SearchUserPage} />
        <Route exact path="/requests" component={FriendRequestsPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
