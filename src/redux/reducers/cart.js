const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const ADD_PIZZA_CART = 'ADD_PIZZA_CART';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case ADD_PIZZA_CART:
      return {
        ...state,
        items: {
          [action.payload.id]: [...state.items[action.payload.id], action.payload],
        },
      };
    default:
      return state;
  }
};

export default card;
