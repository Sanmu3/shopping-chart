const cartItem = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      return state.filter((cartItem, index) => index !== action.payload);
  }

  return state;
};

export default cartItem;
