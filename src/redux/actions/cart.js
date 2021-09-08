export const addPizzaToCart = (pizza) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizza,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removePizza = (pizzaId) => ({
  type: 'REMOVE_PIZZA',
  payload: pizzaId,
});
