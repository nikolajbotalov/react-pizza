import React, { useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Home, Cart } from './pages';
import { Header } from './components';
import { setPizzas } from './redux/actions/pizzas';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

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
