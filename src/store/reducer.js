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
        case 'value_change':
            newState.inputValue = action.value;
            return newState;
        case 'add_item':
            newState.list = [...state.list,action.value];
            newState.inputValue = '';
            return newState;
        case 'delete_item':
            newState.list.splice(action.index,1);
            return newState;
        default:
            return state;
    }
}