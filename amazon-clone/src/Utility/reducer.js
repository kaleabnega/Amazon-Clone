import { Type } from "./action.type";

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const IsItemExisting = state.basket.find((item) => {
        return item.productID == action.item.productID;
      });

      if (!IsItemExisting) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          if (item.productID == action.item.productID) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });

        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const deletedItemIndex = state.basket.findIndex(
        (item) => item.productID == action.id
      );

      let newBasket = [...state.basket];

      if (newBasket[deletedItemIndex].quantity > 1) {
        newBasket[deletedItemIndex] = {
          ...newBasket[deletedItemIndex],
          quantity: newBasket[deletedItemIndex].quantity - 1,
        };
      } else {
        newBasket.splice(deletedItemIndex, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};
