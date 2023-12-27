import { ActionTypes } from '../constants/Action-Types';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export const selectedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state,...payload };
      case ActionTypes.REMOVED_SELECTED_PRODUCTS:
      return { };
    default:
       return state;
  }
};
