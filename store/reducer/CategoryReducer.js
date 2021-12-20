import { CATEGORIES } from "../../data/categories";

const initialState ={
    categories: CATEGORIES,
    selected: null
}

const CategoryReducer = (state = initialState) =>{
    return state
}

export default CategoryReducer