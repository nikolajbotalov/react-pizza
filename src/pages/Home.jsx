import React from 'react';
import { Categories, PizzaBlock, SortPopup } from '../components';

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={() => console.log('hi')}
          items={['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((pizza) => {
          return <PizzaBlock key={pizza.id} {...pizza} />;
        })}
      </div>
    </div>
  );
};

export default Home;
