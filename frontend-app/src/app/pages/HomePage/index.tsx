import { Home } from 'app/components/Home';
import { Profile } from 'app/components/Profile/Profile';
import { Register } from 'app/components/Register/Register';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Home />
    </>
  );
}
