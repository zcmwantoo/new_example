import {VALUE_CHANGE,ADD_ITEM,DELETE_ITEM} from './actionTypes';
const defaultState = {
    inputValue:'',
    list:[]
};    //默认数据
/**
 * 
 */
// reducer可以接收state，但是不能修改state
export default (state = defaultState,action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case VALUE_CHANGE:
            newState.inputValue = action.value;
            return newState;
        case ADD_ITEM:
            newState.list = [...state.list,newState.inputValue];
            newState.inputValue = '';
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.index,1);
            return newState;
        default:
            return state;
    }
}