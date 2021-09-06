import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Cart } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};

export default App;
