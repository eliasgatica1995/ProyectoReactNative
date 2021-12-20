import { PRODUCTOS } from "../../data/products";

const initialState =  {
    items: PRODUCTOS,
    filteredItems:[],
    selected:null
}
const ItemReducer =(state=initialState)=>{
    return state
}
export default ItemReducer
