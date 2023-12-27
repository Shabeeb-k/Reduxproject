import { combineReducers } from 'redux';
import { productReducer,selectedProduct } from './productReducer';

//creating constant for reducers and assign our productReducer....here key is allProduct
const reducers = combineReducers({
  allProducts: productReducer,
  selectedProductItem:selectedProduct,
});
export default reducers;
