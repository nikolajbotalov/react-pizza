const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE_PiZZA = 'REMOVE_PIZZA';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getPizzaPrice = (pizza) => pizza.reduce((sum, obj) => obj.price + sum, 0);

const card = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          pizzaPrice: getPizzaPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getPizzaPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }
    case CLEAR_CART:
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case REMOVE_PiZZA:
      const newItems = {
        ...state.items,
      };

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
      };
    default:
      return state;
  }
};

export default card;
