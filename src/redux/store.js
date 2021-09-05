import { createStore, combineReducers } from 'redux';
import filterReducers from './reducers/filters';
import pizzasReducers from './reducers/pizzas';

const reducers = combineReducers({
  filterReducers,
  pizzasReducers,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
