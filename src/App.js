import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Home, Cart } from './pages';
import { Header } from './components';

const App = () => {
  const [pizzas, setPizzas] = useState([]);

  // Переписать на axios, иначе, возникает ошибка бесконечного цикла
  // Запрос для получения списка пицц
  useEffect(() => {
    fetch('http://localhost:3000/db.json').then((res) => {
      res.json().then((json) => {
        setPizzas(json.pizzas);
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
};

export default App;
