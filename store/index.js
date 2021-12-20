import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducer/CategoryReducer";
import ItemReducer from "./reducer/ItemReducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    items: ItemReducer
})

export default createStore(RootReducer)