import { combineReducers } from 'redux';

import cartReducer from './cartReducer.js'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  cart: cartReducer
})

export default rootReducer