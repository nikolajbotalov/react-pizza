import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегатерианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzasReducers }) => pizzasReducers.items);
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
                  onClickAddPizza={(pizzaData) => console.log(pizzaData)}
                  key={pizza.id}
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
