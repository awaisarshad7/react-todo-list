import React, {Component} from 'react';
import Item from "./TodoItem";

export default class TodoList extends
Component{
    render(){
        return(
          <section>
              <h2>Hello from todo List</h2>
              <Item />
          </section>
        )
    }
}