import { createStore } from 'redux';
import presidentReducer from './reducer';

const store = createStore(presidentReducer);

window.store = store;

export default store;
