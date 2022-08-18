import * as actionTypes from '../actions/actionTypes';
const initialState = [

]

const TodoReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TODO:
            return [...state, action.payload];
        case actionTypes.DELETE_TODO:
            let newtodos = state.filter(todo => (todo.id != action.payload.id))
            return [...newtodos];
        case actionTypes.EDIT_TODO:
            let filteredtodo = state.filter(t => t.id != action.payload.id)
            return [...filteredtodo, action.payload]
        default:
            return state;
    }
}
 
export default TodoReducer;