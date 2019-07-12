import React from 'react';
import {InputItem,Button,WhiteSpace,List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
import store from './store/index'
import {inputValueChangeAction,addItemAction,deleteItemAction} from './store/actionCreators'
const Item = List.Item;

export default class Todolist extends React.Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.storeChange);//订阅store
    }
    storeChange =() =>{
        this.setState(store.getState());
    }
    render() {
        return (
            <>
                <InputItem 
                    value={this.state.inputValue} placeholder="todo info"
                    onChange={(value) => {this.inputValueChange(value)}}
                    onKeyDown={(ev) => {if(ev.keyCode === 13) {this.addItem()}}}
                    >事项</InputItem>
                <WhiteSpace/>
                <Button type="primary" onClick={() => {this.addItem()}}>新增</Button>
                <WhiteSpace/>
                <List>
                    {this.state.list.map((item,index) => {
                        return <Item wrap key={item+index} onClick = {() => {this.deleteItem(index)}}>{item}</Item>
                    })}
                    
                </List>
            </>
        )
    }
    inputValueChange = (val) => {
        store.dispatch(inputValueChangeAction(val));
    }
    addItem = () => {
        if(this.state.inputValue) {
            store.dispatch(addItemAction());
        }
    }
    deleteItem = (index) => {
        store.dispatch(deleteItemAction(index));
    }
}