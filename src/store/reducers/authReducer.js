import * as actionTypes from '../actions/actionTypes';

const initialState = [
    {
        username: 'admin',
        email: 'admin@gmail.com',
        first_name: 'Creative',
        last_name: 'User',
        password: 'password',
    }
]

const session = {
    user: {
        
    },
    isLogged: false,
}

const AuthReducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.CREATE_USER:
            return [...state, action.payload]
        default:
            return state; 
    }
}

export const SessionReducer = (state=session,action) => {
    switch(action.type){
        case actionTypes.LOG_IN:
            return {user: action.payload, isLogged: true}
        case actionTypes.LOG_OUT:
            return {user: {}, isLogged: false}
        default:
            return state;
    }
}
 
export default AuthReducer;