import { combineReducers } from "redux";
import { reducer as products } from "./products/reducer";
import { reducer as self } from "./self/reducer";
import { reducer as productTypes } from "./productTypes/reducer";
import { reducer as basket } from "./basket/reducer";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products,
  self,
  productTypes,
  basket
});

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

export default createStore(reducers, allEnhancers);
