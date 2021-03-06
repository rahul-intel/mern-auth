import { SET_ERROR, HIDE_ERROR } from "../constants/actionTypes";

export const setError = (error)=> {
    return {
        type: SET_ERROR,
        error: error
    }
}

export const hideError = ()=> {
    return {
        type: HIDE_ERROR
    }
}