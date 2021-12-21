import { PRODUCTOS } from "../../data/products";
import { FILTERED_ITEM, SELECT_ITEM } from "../actions/ItemAction";

const initialState =  {
    items: PRODUCTOS,
    filteredItems:[],
    selected:null
}
const ItemReducer =(state=initialState,action)=>{
    switch (action.type){
        case SELECT_ITEM:
            return {...state,selected: state.items.find(item=>item.id===action.itemID)}
        case FILTERED_ITEM:
            return {...state, filteredItems:state.items.filter(item=>item.category===action.categoryID)}
        default:
            return state
    }
}
export default ItemReducer  
