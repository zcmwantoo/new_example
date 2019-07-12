import {VALUE_CHANGE,ADD_ITEM,DELETE_ITEM} from './actionTypes';

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