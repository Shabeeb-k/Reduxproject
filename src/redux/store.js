import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //createStore takes 2 para...first is reducers ie combineReducer and second is state...here state is empty
export default store;
