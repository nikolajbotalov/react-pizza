import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory } from '../redux/actions/filters';
import { Categories, PizzaBlock, SortPopup } from '../components';

const categoryNames = ['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducers }) => pizzasReducers.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((pizza) => {
            return <PizzaBlock key={pizza.id} {...pizza} />;
          })}
      </div>
    </div>
  );
};

export default Home;
