import {VALUE_CHANGE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './actionTypes';
import axios from 'axios';
export const inputValueChangeAction = (value) => {
    return {
        type:VALUE_CHANGE,
        value
    }
}
export const addItemAction = () => {
    return {
        type:ADD_ITEM
    }
}
export const deleteItemAction = (index) => {
    return {
        type:DELETE_ITEM,
        index
    }
}
export const getEasyListByIn = (data) => {
    return {
        type:GET_LIST,
        data
    }
}
export const getListByAxios = () => {
    let url = "j/search_tags?type=movie&source=index";
    return (dispatch) => {
        axios.get(url)
        .then((data) => {
            const action = getEasyListByIn(data);
            dispatch(action);
        }).catch((err) => {
            console.log(err);
        });
    }  
}