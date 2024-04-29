import { createStore, combineReducers, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";

import {
  getProductDetailsReducer,
  getProductsReducer,
} from "./reducers/productReducer";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./reducers/cartReducer";

const persistConfig = {
  key: "persist-store",
  storage,
};

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export default store;
