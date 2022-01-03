

import { createStore, combineReducers, applyMiddleware } from "redux";
//reducers
import CategoryReducer from "./reducer/CategoryReducer";
import ItemReducer from "./reducer/ItemReducer";
import CartReducer from "./reducer/CartReducer";





import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    items: ItemReducer,
    cart: CartReducer,
    
})

export default createStore(RootReducer,applyMiddleware(thunk))