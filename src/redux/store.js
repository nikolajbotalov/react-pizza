import { createStore, combineReducers } from 'redux';
import filterReduces from './reducers/filters';
import pizzasReduces from './reducers/pizzas';

const reducers = combineReducers({
  filterReduces,
  pizzasReduces,
});

const store = createStore(reducers);

export default store;
