import { AUTH, HIDE_ERROR, SET_ERROR } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router)=> async (dispatch)=> {
    try {
        const data = await api.signIn(formData);
        console.log(data);
        //return;
        if(data?.data?.message){
            dispatch({ type: SET_ERROR, error: data.data.message });
        }else{
            dispatch({ type: HIDE_ERROR });
            dispatch({ type: AUTH, data: data?.data});
            router.push('/');
        }
    } catch (error) {
        //console.log(error);
        dispatch({ type: SET_ERROR, error:"Something went wrong!" });
    }

}

export const signup = (formData, router) => async (dispatch) => {
    try {
        const data = await api.signUp(formData);
        if (data?.data?.message) {
            dispatch({ type: SET_ERROR, error: data.data.message });
        } else {
            dispatch({ type: HIDE_ERROR });
            dispatch({ type: AUTH, data: data?.data});
            router.push('/');
        }
    } catch (error) {
        //console.log(error);
        dispatch({ type: SET_ERROR, error: "Something went wrong!" });
    }
}
