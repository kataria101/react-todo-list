import React, { Component } from "react";
import Item from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    return (
      <section>
        <h2>to do list</h2>
        <Item />
      </section>
    );
  }
}
