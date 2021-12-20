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
import { useTranslation } from 'react-i18next';
import { Footer } from './components/Footer';
import '../styles/styles.css';
import { RegisterPage } from './pages/RegisterPage/Loadable';
import { ProfilePage } from './pages/ProfilePage';

export function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - InviggoNet"
        defaultTitle="InviggoNet"
        htmlAttributes={{ lang: i18n.language }}
      ></Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchUserPage} />

        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}
