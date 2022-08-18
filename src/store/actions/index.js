import * as actionTypes from './actionTypes';
console.log(actionTypes);

export const add_todo = (data) => {
    return({
        type: actionTypes.ADD_TODO,
        payload: data
    })
}
export const delete_todo = (data) => {
    return({
        type: actionTypes.DELETE_TODO,
        payload: data
    })
}
export const edit_todo = (data) => {
    return({
        type: actionTypes.EDIT_TODO,
        payload: data
    })
}

export const create_user = (data) => {
    return ({
        type: actionTypes.CREATE_USER,
        payload: data,
    });
}

export const login_user = (user) => {
    return({
        type: actionTypes.LOG_IN,
        payload: user
    })
}

export const logout_user = (user) => {
    return({
        type: actionTypes.LOG_OUT,
        payload: user
    })
}

