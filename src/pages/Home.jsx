import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import { objectOf } from 'prop-types';

const categoryNames = ['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducers }) => pizzasReducers.items);
  const cartItems = useSelector(({ cartReducers }) => cartReducers.items);
  const isLoaded = useSelector(({ pizzasReducers }) => pizzasReducers.isLoaded);
  const { sortBy, category } = useSelector(({ filterReducers }) => filterReducers);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = React.useCallback((sortType) => {
    dispatch(setSortBy(sortType));
  });

  const handleAddPizzaToCart = (pizzaData) => {
    dispatch(addPizzaToCart(pizzaData));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza) => {
              return (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  key={pizza.id}
                  addedCount={cartItems[pizza.id] && cartItems[pizza.id].length}
                  {...pizza}
                />
              );
            })
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
