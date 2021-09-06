import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filterReducers from './reducers/filters';
import pizzasReducers from './reducers/pizzas';
import cartReducers from './reducers/cart';

const reducers = combineReducers({
  filterReducers,
  pizzasReducers,
  cartReducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

window.store = store;

export default store;
